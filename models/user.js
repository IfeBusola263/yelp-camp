import DB from '../utils/db.js'
import passportLocalMongoose from 'passport-local-mongoose';

const schema = {
    email: {
        type: String,
        required: true,
        unique: true,
    }
}

const userSchema = DB.createSchema(schema);

userSchema.plugin(passportLocalMongoose);

export default DB.createModel('User', userSchema);