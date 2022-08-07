const {Contact, schema} = require('../../models/contact');
const {createError} = require('../../helpers');



const addContact = async (req, res, next) => {
 
      const {error} = schema.add.validate(req.body);
      if(error){
        throw createError(400, error.message);
      }
   const result = await Contact.create(req.body);
      res.status(201).json(result);
  
  }

  module.exports = addContact;