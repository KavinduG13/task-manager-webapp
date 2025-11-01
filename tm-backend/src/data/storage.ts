import { Task, CreateTaskInput, UpdateTaskInput } from '../types';

// In-memory storage
let tasks: Task[] = [
  {
    id: 1,
    title: 'Setup Project',
    description: 'Initialize the project with React and Node.js',
    assignedTo: 'John Doe',
    completed: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 2,
    title: 'Create API Endpoints',
    description: 'Build REST API for task management',
    assignedTo: 'Jane Smith',
    completed: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 3,
    title: 'Design UI',
    description: 'Create responsive UI components',
    assignedTo: 'John Doe',
    completed: false,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

let taskIdCounter = 4;

// Get all tasks
export const getAllTasks = (): Task[] => {
  return tasks;
};

// Get tasks by completion status
export const getTasksByStatus = (completed: boolean): Task[] => {
  return tasks.filter(task => task.completed === completed);
};

// Get task by ID
export const getTaskById = (id: number): Task | undefined => {
  return tasks.find(task => task.id === id);
};

// Create new task
export const createTask = (taskData: CreateTaskInput): Task => {
  const newTask: Task = {
    ...taskData,
    id: taskIdCounter++,
    completed: false,
    createdAt: new Date(),
    updatedAt: new Date()
  };
  tasks.push(newTask);
  return newTask;
};

// Update task
export const updateTask = (id: number, taskData: UpdateTaskInput): Task | null => {
  const index = tasks.findIndex(task => task.id === id);
  if (index === -1) return null;
  
  tasks[index] = {
    ...tasks[index],
    ...taskData,
    updatedAt: new Date()
  };
  return tasks[index];
};

// Delete task
export const deleteTask = (id: number): boolean => {
  const index = tasks.findIndex(task => task.id === id);
  if (index === -1) return false;
  
  tasks.splice(index, 1);
  return true;
};

// Get all unique users (from assignedTo field)
export const getAllUsers = (): string[] => {
  const users = new Set(tasks.map(task => task.assignedTo));
  return Array.from(users);
};