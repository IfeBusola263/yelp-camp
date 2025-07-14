import Campground from "../models/campground.js";
import Review from "../models/reviews.js";

export const isLoggedIn = async (req, res, next) => {
    if (!req.isAuthenticated()){
        // console.log(req.originalUrl, req?.url)
        // res.locals.returnTo = req.originalUrl;
        req.session.returnTo = req.originalUrl;
        req.flash('error','Please kindly log in first!');
        return res.redirect('/login');
    }
    next();

}

export const storeReturnRoute = async (req, res, next) => {
    if (req.session.returnTo){
        res.locals.returnTo = req.session.returnTo;
    }
    next();
}

export const isAuthor = async (req, res, next) => {
    const {id} = req.params;
    const userId = req.user._id;

    const campground = await Campground.findById(id);
    if (!campground.author.equals(userId)){

        // redirect back to the show page
        req.flash('error', `You don't have permission to do this!`);
        return res.redirect(`/campgrounds/${id}`);
    }

    next();
}

export const isReviewAuthor = async (req, res, next) => {
    const {id, reviewId} = req.params;
    const review = await Review.findById(reviewId).populate('author');
    let isAuthor;

    if (review){
        isAuthor = review.author.equals(req.user._id);
        if (isAuthor){
            next();
        }

        req.flash('error', "You don't have permission to do this.");
         res.redirect(`/campgrounds/${id}`);

    } else {
        req.flash('error', 'review not found');
        res.redirect(`/campgrounds/${id}`);
    }
}