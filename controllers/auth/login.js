const {User, schema} = require('../../models/user');
const {createError} = require('../../helpers');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const {SECRET_KEY} = process.env;



const login = async(req, res)=>{
    const {error} = schema.login.validate(req.body);
    if(error){
        throw createError(400, error.message);
    }
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user){
        throw createError(401, 'Email wrong');

    }
    if(!user.verify){
        throw createError(401, 'Email not verify');

    }
    const comparePassword = await bcrypt.compare(password, user.password);
    if(!comparePassword){
        throw createError(401, 'Password wrong');
    }
    const payload = {
        id:user._id
    }
    const token = jwt.sign(payload, SECRET_KEY, {expiresIn:'24h'});
    await User.findByIdAndUpdate(user._id,{token});
    res.json({
        token
    });
}

module.exports = login;