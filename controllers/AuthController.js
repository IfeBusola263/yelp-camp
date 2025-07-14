import User from '../models/user.js'

export default class AuthController{
    static getRegisterationForm(req, res){
        res.render('user/register');
    }

    static async registerUser(req, res, next){
        const {email, password, username} = req.body;

        try {
            const user = new User({email, username});
            const registeredUser = await User.register(user, password);

            // after registration, log the user in.
            req.login(registeredUser, (err) => {
                if (err) return next();
                req.flash('success', `Welcome, ${username} you have successfully registered`);
                res.redirect('/campgrounds')
            })
        } catch (error) {
            const message = error.name === 'MongoServerError' && error.code === 11000 && error.keyValue.email ? "Email is already taken" : error.message;
            req.flash('error', message);
            res.redirect('/register');
        }
    }

    static getLoginForm(_, res){
        res.render('user/login');
    }

    static async login(req, res){
        // console.log(req.session);
        req.flash('success', 'Welcome Back!');
        // const redirectUrl = req.session.returnTo || '/campgrounds'
        // console.log(res.locals);
        const redirectUrl = res.locals.returnTo || '/campgrounds'
        res.redirect(redirectUrl);
    }

    static async logout(req, res){
        req.logout((err) => {
            if (err){
                return next(err);
            }
            req.flash('success', 'Successfully Logged out!');
            res.redirect('/login');
        });
    }
}