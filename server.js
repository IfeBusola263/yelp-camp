import 'dotenv/config'
// import dotenv from 'dotenv';
// if (process.env.NODE_ENV !== 'production'){
//     dotenv.config();
// }

import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import campgroundRouter from './routes/index.js'
import userRouter from './routes/user.js';
import MethodOverride from 'method-override';
import ejsMate from 'ejs-mate';
import ErrorController from './controllers/ErrorController.js';
import session from 'express-session';
import flash from 'connect-flash';
import { flashHandler } from './utils/flash.js';
import passport from 'passport';
import localStrategy from 'passport-local';
import User from './models/user.js';



// console.log(process.env.CLOUDINARY_CLOUD_NAME);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PORT = process.env[2] || 3000;

const app = express();
app.set('views', join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.engine('ejs', ejsMate)
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(join(__dirname, '/public')))
app.use(MethodOverride('_method'));
const sessionConfigs = {
    secret: 'youCanDoBetter',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}

app.use(session(sessionConfigs))
app.use(flash());

// passport
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(flashHandler);

app.use('/', userRouter);
app.use('/campgrounds', campgroundRouter);

app.use(ErrorController.ErrorHandler)


app.listen(PORT, async () => {
    console.log(`Server is listening on PORT ${PORT}`);
});
