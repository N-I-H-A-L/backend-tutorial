import express from 'express';
import User from './../models/user.js';

import { getAllUsers, createUser, getUserById } from '../controllers/user.js';

const router = express.Router();

//Make the function asynchronous
router.get('/all', getAllUsers);

router.post('/new', createUser);

router.get('/userid/:id', getUserById);

export default router;