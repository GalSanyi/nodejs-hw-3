const express = require('express')
const ctrl = require('../../controllers/contacts');
const {ctrlWrapper} = require('../../helpers');
const router = express.Router();
const {auth} = require('../../middleware');


router.get('/', auth, ctrlWrapper(ctrl.listContacts));

router.get('/:contactId', auth, ctrlWrapper(ctrl.listContactById));

router.post('/', auth, ctrlWrapper(ctrl.addContact));

router.put('/:contactId', auth, ctrlWrapper(ctrl.contactUpdateById));

router.patch('/:contactId/favorite', auth, ctrlWrapper(ctrl.updateFavorite));

router.delete('/:contactId', auth, ctrlWrapper(ctrl.removeById));


module.exports = router;
