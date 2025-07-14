import DB from "../utils/db.js";

const schema = {
    body: String,
    rating: Number
}

const ReviewSchema = DB.createSchema(schema);
export default DB.createModel('Review', ReviewSchema);