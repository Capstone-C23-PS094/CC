import Joi from "joi"

//validasi
const userValidate = Joi.object({
    name: Joi.string()
        .min(3)
        .max(100)
        .required(),
    email: Joi.string()
        .email()
        .required(),
}).options({ abortEarly: false })

export { userValidate }