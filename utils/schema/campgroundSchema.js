import Joi from 'joi';

export const campgroundScrema = Joi.object({
    campground: Joi.object({
        title: Joi.string().min(3).required(),
        price: Joi.number().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
    // image: Joi.string().uri().required(),
    }).required()
})