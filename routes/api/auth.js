const express = require('express');
const ctrl = require('../../controllers/auth');
const {ctrlWrapper} = require('../../helpers');
const {auth, upload} = require('../../middleware');
const router = express.Router();

router.post('/register', ctrlWrapper(ctrl.register));
router.get('/verify/:verificationToken', ctrlWrapper(ctrl.verifyEmail));
router.post('/verify', ctrlWrapper(ctrl.resendVerifyEmail));
router.post('/login', ctrlWrapper(ctrl.login));
router.get('/current', auth, ctrlWrapper(ctrl.getCurrent));
router.get('/logout', auth, ctrlWrapper(ctrl.logout));
router.patch('/avatars', auth, upload.single('avatar'), ctrlWrapper(ctrl.setAvatar));

module.exports = router;
