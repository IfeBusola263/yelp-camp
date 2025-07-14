import Joi from "joi";

export const reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().max(5).min(1),
        body: Joi.string().required(),
    }).required()
})