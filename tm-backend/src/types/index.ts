export interface Task {
  id: number;
  title: string;
  description: string;
  assignedTo: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateTaskInput {
  title: string;
  description: string;
  assignedTo: string;
}

export interface UpdateTaskInput {
  title?: string;
  description?: string;
  assignedTo?: string;
  completed?: boolean;
}