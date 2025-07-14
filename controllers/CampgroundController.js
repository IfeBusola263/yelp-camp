import Campground from '../models/campground.js'
import Review from '../models/reviews.js';
import mongoose from 'mongoose';
import ExpressError from '../models/error.js';
import { campgroundScrema } from '../utils/schema/campgroundSchema.js';
import { reviewSchema } from '../utils/schema/reviewSchema.js';

export default class CampgroundController {
    static async getCampgrounds(req, res){
        const camps = await Campground.find({});
        res.render('campgrounds/index', {campgrounds: camps});
    }

    static async getCampground(req, res){
        // console.log(typeof req.params.id, 'The ID', req.params.id, mongoose.Types.ObjectId.isValid(req.params.id));

        if (mongoose.Types.ObjectId.isValid(req.params.id)){
            const camp = await Campground.findById(req.params.id).populate({
                path: 'reviews',
                populate: 'author'
            }).populate('author', 'username');
            // console.log(camp);

             if (!camp){
                req.flash('error', 'Cannot find this Campground!');
                return;
            }

            res.render('campgrounds/show', {campground: camp});
            return
        }

        // console.log('The ID', req.params.id)
        Object.assign(ExpressError, {message: 'Check the ID', statusCode: 400});
        throw ExpressError;

    }

    static async createCampground(req, res){

        const { error } = campgroundScrema.validate(req.body || {});
        
        if (error){
            const msg = error.details.map(detail => detail.message).join(', ');
            console.log(msg);
            Object.assign(ExpressError, {message: msg, statusCode: 400});
            throw ExpressError;
        }

        const {campground} = req.body;
        const camp = new Campground({...campground})
        camp.author = req.user._id;
        await camp.save()
         req.flash('success', `Successfully created Campground ${campground.title}!`);
        res.redirect(`/campgrounds/${camp._id}`);

    }
    
    static async getCampgroundForm(req, res){
        res.render('campgrounds/new')
    }

    static async getUpdateCampground(req, res){
        const camp = await Campground.findById(req.params.id);

        if (!camp){
            req.flash('error', 'Cannot find this Campground!');
            return;
        }

        res.render('campgrounds/edit', {campground: camp})
    }

    static async updateCampground(req, res){

        const { error } = campgroundScrema.validate(req.body || {});
        
        if (error){
            const message1 = error.details.map(detail => detail.message).join(', ');
            console.log(message1);
            Object.assign(ExpressError, {message: message1, statusCode: 400});
            throw ExpressError;
        }

        const { id } = req.params;
        const { campground } = req.body;

        const camp = await Campground.findByIdAndUpdate(id, {...campground})

         if (!camp){
            req.flash('error', 'Cannot find this Campground!');
            return;
        }

        req.flash('success', 'Update has been saved!');
         res.redirect(`/campgrounds/${id}`);
    }

    static async deleteCampground(req, res){
         const { id } = req.params;
        //  await Campground.deleteOne({_id: id});
         await Campground.findByIdAndDelete({_id: id});
         req.flash('success', `You have deleted Campground`);
         res.redirect(`/campgrounds`);
    }

    static async createReview(req, res){
        const id = req.params.id;
        const {review} = req.body

        const {error} = reviewSchema.validate(req.body || {});

        if (error){
            const message = error.details.map(det => det.message).join(', ');
            console.log(message);
            Object.assign(ExpressError, {message, statusCode: 400});
            throw ExpressError;
        }

        // console.log('This is the ID', id);
        // console.log('This is the Review', review);
        const campground = await Campground.findById(id);
        const newReview = new Review(review);
        newReview.author = req.user._id;
        campground.reviews.push(newReview);
        await newReview.save();
        await campground.save();

        req.flash('success', `You have successfully created a review!`);
        res.redirect(`/campgrounds/${campground._id}`);

    }

    static async removeReview(req, res){
        const {id, reviewId} = req.params;
        await Review.findByIdAndDelete(reviewId);
        await Campground.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
        req.flash('success', `You have successfully deleted your review!`);
        res.redirect(`/campgrounds/${id}`);
    }
}

