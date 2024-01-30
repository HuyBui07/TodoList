import express from 'express';
import { getTodos, addTodo, deleteTodo, updateTodo } from '../controllers/todoController';
import { requireAuth } from '../middlewares/requireAuth';

const router = express.Router();

router.use(requireAuth);

router.get('/', getTodos);

router.post('/', addTodo);

router.delete('/:_id', deleteTodo);

router.put('/:_id', updateTodo);

export default router;