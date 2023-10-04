import { Router } from 'express';
const router = Router();

import {
  renderSignUpForm,
  renderSigninForm,
  renderSigninFormAdmin,
  adminSignin,
  logout,
  signin,
  signup,
} from '../controllers/users.controller.js';

router.get('/users/signup', renderSignUpForm);

router.get('/users/signin', renderSigninForm);

router.get('/users/signin/admin',renderSigninFormAdmin);

router.post('/users/signin/admin',adminSignin);

router.post('/users/signup', signup);

router.post('/users/signin', signin);

router.get('/users/logout', logout);

export default router;
