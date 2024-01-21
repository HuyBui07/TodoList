import express from 'express';
import { getTodos, addTodo, deleteTodo } from '../controllers/todoController';

const router = express.Router();

router.get('/', getTodos);

router.post('/', addTodo);

router.delete('/:_id', deleteTodo);

export default router;