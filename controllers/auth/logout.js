const {User} = require('../../models/user');

const logout = async(req, res)=>{
const {_id} = req.User;
await User.findByIdAndUpdate(_id, {token:''});
res.status(204).sand();

}


module.exports = logout;