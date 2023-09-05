const joi = require('joi')

const validator = (req, res, next) => {

    const schema = joi.object({
        name: joi.string()
        .max(12)
        .min(3)
        .trim()
        .pattern(new RegExp('[a-zA-Z]'))
        .required()
        .messages({
            'string.min': 'The name must have more than three letters',
            'string.max': 'The name must have less than twelve letters',
            'string.empty':'The name is mandatory',
            'string.pattern.base':'the name can only have letters'
        }),
       surname: joi.string()
       .max(16)
       .min(3)
       .trim()
       .pattern(new RegExp('[a-zA-Z]'))
       .required()
       .messages({
           'string.empty' : 'The last name is required',
            'string.min': 'The last name must have more than three letters',
            'string.max': 'The last name must have less than sixteen letters',
            'string.pattern.base':'the last name can only contain letters'
        }),
        password: joi.string()
        .min(8)
        .trim()
        .pattern(new RegExp('^[a-zA-Z0-9]'))
        .required()
        .messages({
            'string.empty' : 'Pasword is mandatory',
            'string.min': 'The password must have more than three characters',
            'string.pattern.base':'The password can only have letters or numbers' 
        }),
        email: joi.string().email().trim().required()
        .messages({
            'string.empty': 'Please  enter an email',
            'string.email':'The mail requires a valid format',
        }),
        urlimage: joi.required(),
        country: joi.required(),
        googleLog:joi.boolean(),
        
    })

    const validate = schema.validate(req.body, { abortEarly: false })

    if(validate.error) {
        return res.json( { success: false, response: validate.error.details ,error:true} )
    }

    next()
}

module.exports = validator 