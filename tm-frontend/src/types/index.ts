export interface Task {
  id: number;
  title: string;
  description: string;
  assignedTo: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTaskData {
  title: string;
  description: string;
  assignedTo: string;
}

export interface UpdateTaskData {
  title?: string;
  description?: string;
  assignedTo?: string;
  completed?: boolean;
}

export type FilterType = 'all' | 'completed' | 'incomplete';