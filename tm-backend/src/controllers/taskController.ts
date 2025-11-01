import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import * as storage from '../data/storage';

// Get all tasks or filter by completion status
export const getTasks = (req: Request, res: Response): void => {
  try {
    const { completed } = req.query;
    
    if (completed !== undefined) {
      const isCompleted = completed === 'true';
      const tasks = storage.getTasksByStatus(isCompleted);
      res.json(tasks);
    } else {
      const tasks = storage.getAllTasks();
      res.json(tasks);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tasks', error });
  }
};

// Get single task by ID
export const getTask = (req: Request, res: Response): void => {
  try {
    const id = parseInt(req.params.id);
    const task = storage.getTaskById(id);
    
    if (!task) {
      res.status(404).json({ message: 'Task not found' });
      return;
    }
    
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching task', error });
  }
};

// Create new task
export const createTask = (req: Request, res: Response): void => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }
    
    const { title, description, assignedTo } = req.body;
    const newTask = storage.createTask({ title, description, assignedTo });
    
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: 'Error creating task', error });
  }
};

// Update task
export const updateTask = (req: Request, res: Response): void => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }
    
    const id = parseInt(req.params.id);
    const updatedTask = storage.updateTask(id, req.body);
    
    if (!updatedTask) {
      res.status(404).json({ message: 'Task not found' });
      return;
    }
    
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: 'Error updating task', error });
  }
};

// Delete task
export const deleteTask = (req: Request, res: Response): void => {
  try {
    const id = parseInt(req.params.id);
    const success = storage.deleteTask(id);
    
    if (!success) {
      res.status(404).json({ message: 'Task not found' });
      return;
    }
    
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting task', error });
  }
};

// Get all users
export const getUsers = (req: Request, res: Response): void => {
  try {
    const users = storage.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
};