import express from 'express';
import { getTodos, addTodo, deleteTodo, updateTodo } from '../controllers/todoController';

const router = express.Router();

router.get('/', getTodos);

router.post('/', addTodo);

router.delete('/:_id', deleteTodo);

router.put('/:_id', updateTodo);

export default router;