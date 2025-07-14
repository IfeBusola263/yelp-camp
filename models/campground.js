import DB from '../utils/db.js'
import mongoose from 'mongoose';
import Review from './reviews.js';

const { ObjectId } = mongoose.Schema.Types


const schema = {
    title: String,
    price: Number,
    description: String,
    location: String,
    image: String,
    author: {
        type: ObjectId,
        ref: 'User'
    },
    reviews: [
        {
            type: ObjectId,
            ref: 'Review'
        }
    ]
}

const CampgroundSchema = DB.createSchema(schema);


/*
    This runs for all the calls to findOneAndDelete on the document,
    so it is important to find the reviews, attached to
    this specific document or campground in this case,
    so all reviews are not deleted.
*/
CampgroundSchema.post('findOneAndDelete', async function (doc) {

    if (doc){
        await Review.deleteMany({
            _id: {
                $in: doc.reviews
            }
        })
    }  
})
export default DB.createModel('Campground', CampgroundSchema);

