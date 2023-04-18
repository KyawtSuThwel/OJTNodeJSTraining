import express from 'express';
import { allUser, delUser, postUser, singleUser, updateUser } from '../controllers/userController';

const router = express();

router.route('/')
    .get(allUser)
    .post(postUser)

router.route('/:id')
    .get(singleUser)
    .patch(updateUser)
    .delete(delUser)

export default router;