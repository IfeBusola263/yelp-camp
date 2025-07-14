import DB from "../utils/db.js";
import mongoose from "mongoose";

const {ObjectId} = mongoose.Schema.Types;

const schema = {
    body: String,
    rating: Number,
    author: {
        type: ObjectId,
        ref: 'User'
    }
}

const ReviewSchema = DB.createSchema(schema);
export default DB.createModel('Review', ReviewSchema);