import axiosInstance from './axiosConfig';
import { Task, CreateTaskData, UpdateTaskData } from '../types';

export const taskApi = {
  // Get all tasks
  getAllTasks: async (): Promise<Task[]> => {
    const response = await axiosInstance.get('/tasks');
    return response.data;
  },

  // Get tasks by completion status
  getTasksByStatus: async (completed: boolean): Promise<Task[]> => {
    const response = await axiosInstance.get(`/tasks?completed=${completed}`);
    return response.data;
  },

  // Get single task
  getTask: async (id: number): Promise<Task> => {
    const response = await axiosInstance.get(`/tasks/${id}`);
    return response.data;
  },

  // Create task
  createTask: async (taskData: CreateTaskData): Promise<Task> => {
    const response = await axiosInstance.post('/tasks', taskData);
    return response.data;
  },

  // Update task
  updateTask: async (id: number, taskData: UpdateTaskData): Promise<Task> => {
    const response = await axiosInstance.put(`/tasks/${id}`, taskData);
    return response.data;
  },

  // Delete task
  deleteTask: async (id: number): Promise<void> => {
    await axiosInstance.delete(`/tasks/${id}`);
  },

  // Get all users
  getUsers: async (): Promise<string[]> => {
    const response = await axiosInstance.get('/users');
    return response.data;
  },
};