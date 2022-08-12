const {createError} = require('../helpers');
const jwt = require('jsonwebtoken');
const {User} = require('../models/user');
const {SECRET_KEY} = process.env


const auth = async(req, _, next)=>{
    const {authorization = ''} = req.headers;
    const [bearer, token] = authorization.split(' ');
    if(bearer !== 'Bearer'){
next(createError(401));
    }
    try {
        const {id } = jwt.verify(token, SECRET_KEY);
        const user = User.findById(id);
        if(!user || !user.token){
            next(createError(401));
        }
        req.user = user;
    } catch (error) {
        next(createError(401, error.message));
    }

}

module.exports = auth;