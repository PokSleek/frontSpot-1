
import express from 'express';
import session from 'express-session';
import passport from 'passport';

import { getLogin, postLogin, postRegistry, logout } from '../controllers/User/User'

import passportAuth from '../controllers/Auth/Auth';

const router = express.Router();


router.get('/login', getLogin);
router.post('/login', postLogin);
router.post('/registry', postRegistry);
router.get('/logout', logout);

export default router;
