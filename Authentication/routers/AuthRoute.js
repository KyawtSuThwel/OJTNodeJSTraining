import express from 'express';
import { login, loginUser, logout, protectedPage, signup,signupUser } from '../controllers/AuthController.js';
import checkSignIn from '../utils/utils.js';

const router = express.Router();

router.route('/signup')
    .get(signup)
    .post(signupUser)

router.get('/protected_page',checkSignIn,protectedPage);

router.get('/logout',logout);

router.route('/login')
    .get(login)
    .post(loginUser)

export default router;