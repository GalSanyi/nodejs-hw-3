
const bcrypt = require('bcryptjs');
const {User, schema} = require('../../models/user');
const {createError, sendEmail} = require('../../helpers');
const gravatar = require('gravatar');
const nanoid = require('nanoid');


const register = async(req, res)=>{
    const {error} = schema.register.validate(req.body);
    if(error){
        throw createError(400, error.message);
    }
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(user){
        throw  createError(409, `${email} is already exist `)
    }
const hashPassword = await bcrypt.hash(password, 10);
const avatarURL = gravatar.url(email);
const verificationToken = nanoid(); 
    const result = await User.create({...req.body, password: hashPassword, avatarURL: avatarURL, verificationToken});
    const mail ={
        to:email,
        subject:'підтвердіть зеєстрацію',
        html:`<a target='_blank' href='http://localhost:3000/api/auth/verify/${verificationToken}'>нажміть на зеєстрацію</a>`
    }
    await sendEmail(mail);
    res.status(201).json({
name:result.name,
email:result.email,
    })
}


module.exports = register;