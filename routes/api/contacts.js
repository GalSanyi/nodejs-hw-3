const express = require('express')
const ctrl = require('../../controllers/contacts');
const {ctrlWrapper} = require('../../helpers');
const router = express.Router();



router.get('/', ctrlWrapper(ctrl.listContacts));

router.get('/:contactId', ctrlWrapper(ctrl.listContactById));

router.post('/', ctrlWrapper(ctrl.addContact));

router.put('/:contactId', ctrlWrapper(ctrl.contactUpdateById));

router.patch('/:contactId/favorite', ctrlWrapper(ctrl.updateFavorite));

router.delete('/:contactId', ctrlWrapper(ctrl.removeById));


module.exports = router;
