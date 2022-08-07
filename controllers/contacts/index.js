const listContacts = require('./listContacts');
const listContactById = require('./listContactById');
const addContact = require('./addContact');
const contactUpdateById = require('./contactUpdateById');
const updateFavorite = require('./updateFavorite');
const removeById = require('./removeById');
module.exports = {
    listContacts,
    listContactById,
    addContact,
    contactUpdateById,
    updateFavorite,
    removeById
}