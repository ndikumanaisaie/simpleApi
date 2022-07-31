import express from "express";

import { newUser, getUsers, getUser, deleteUser, updateUser } from "../controllers/users.js";

const router = express.Router();

router.get('/', getUsers);

router.post('/', newUser);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);


export default router;