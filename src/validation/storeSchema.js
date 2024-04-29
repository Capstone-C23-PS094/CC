import Joi from 'joi';

//rules validasi 
const storeValidate = Joi.object({
    name: Joi.string()
        .min(3)
        .max(255)
        .required(),
    address: Joi.string()
        .min(5)
        .max(355)
        .required(),
    contact: Joi.string()
        .min(12)
        .required(),
    onlineShop: Joi.string()
            .min(15)
            .required(),    
    
}).options({ aboutEarly: false });

export {storeValidate}