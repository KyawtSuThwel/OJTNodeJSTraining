import express from 'express';
import { allPost, delPost, post, singlePost, updatePost } from '../controllers/postController';

const router = express();

router.route('/')
    .get(allPost)
    .post(post)

router.route('/:id')
    .get(singlePost)
    .patch(updatePost)
    .delete(delPost)

export default router;