import express from 'express';
import AuthController from '../controllers/AuthController.js';
import passport from 'passport';
import { storeReturnRoute } from '../middleware/index.js';
const router = express.Router();

const loginConfig = {
    failureFlash: true,
    failureRedirect: '/login',
}

router.get('/register', AuthController.getRegisterationForm);
router.post('/register', AuthController.registerUser);
router.get('/login', AuthController.getLoginForm);
router.post('/login', storeReturnRoute, passport.authenticate('local', loginConfig), AuthController.login);
router.get('/logout', AuthController.logout);


export default router;