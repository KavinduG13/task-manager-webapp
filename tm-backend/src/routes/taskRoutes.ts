import { Router } from 'express';
import { body } from 'express-validator';
import * as taskController from '../controllers/taskController';

const router = Router();

// Validation rules
const createTaskValidation = [
  body('title').trim().notEmpty().withMessage('Title is required'),
  body('description').trim().notEmpty().withMessage('Description is required'),
  body('assignedTo').trim().notEmpty().withMessage('Assigned user is required')
];

const updateTaskValidation = [
  body('title').optional().trim().notEmpty().withMessage('Title cannot be empty'),
  body('description').optional().trim().notEmpty().withMessage('Description cannot be empty'),
  body('assignedTo').optional().trim().notEmpty().withMessage('Assigned user cannot be empty'),
  body('completed').optional().isBoolean().withMessage('Completed must be a boolean')
];

// Routes
router.get('/tasks', taskController.getTasks);
router.get('/tasks/:id', taskController.getTask);
router.post('/tasks', createTaskValidation, taskController.createTask);
router.put('/tasks/:id', updateTaskValidation, taskController.updateTask);
router.delete('/tasks/:id', taskController.deleteTask);
router.get('/users', taskController.getUsers);

export default router;