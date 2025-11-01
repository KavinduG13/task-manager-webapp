import React, { useState, useEffect } from 'react';
import { taskApi } from './api/taskApi';
import { Task, CreateTaskData, FilterType } from './types';
import TaskList from './components/taskList';
import TaskForm from './components/taskForm';
import TaskFilter from './components/taskFilter';
import LoadingSpinner from './components/loadingSpinner';
import './App.css';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [users, setUsers] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<FilterType>('all');
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [showForm, setShowForm] = useState<boolean>(false);

  // Fetch tasks
  const fetchTasks = async () => {
    try {
      setLoading(true);
      setError(null);
      let data: Task[];
      
      if (filter === 'all') {
        data = await taskApi.getAllTasks();
      } else {
        data = await taskApi.getTasksByStatus(filter === 'completed');
      }
      
      setTasks(data);
    } catch (err) {
      setError('Failed to fetch tasks. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch users
  const fetchUsers = async () => {
    try {
      const data = await taskApi.getUsers();
      setUsers(data);
    } catch (err) {
      console.error('Failed to fetch users:', err);
    }
  };

  useEffect(() => {
    fetchTasks();
    fetchUsers();
  }, [filter]);

  // Create task
  const handleCreateTask = async (taskData: CreateTaskData) => {
    try {
      setError(null);
      await taskApi.createTask(taskData);
      setShowForm(false);
      fetchTasks();
      fetchUsers();
    } catch (err) {
      setError('Failed to create task. Please try again.');
      console.error(err);
    }
  };

  // Update task
  const handleUpdateTask = async (taskData: CreateTaskData) => {
    if (!editingTask) return;
    
    try {
      setError(null);
      await taskApi.updateTask(editingTask.id, taskData);
      setEditingTask(null);
      setShowForm(false);
      fetchTasks();
      fetchUsers();
    } catch (err) {
      setError('Failed to update task. Please try again.');
      console.error(err);
    }
  };

  // Delete task
  const handleDeleteTask = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this task?')) return;
    
    try {
      setError(null);
      await taskApi.deleteTask(id);
      fetchTasks();
      fetchUsers();
    } catch (err) {
      setError('Failed to delete task. Please try again.');
      console.error(err);
    }
  };

  // Toggle complete
  const handleToggleComplete = async (id: number, completed: boolean) => {
    try {
      setError(null);
      await taskApi.updateTask(id, { completed });
      fetchTasks();
    } catch (err) {
      setError('Failed to update task status. Please try again.');
      console.error(err);
    }
  };

  // Edit task
  const handleEditTask = (task: Task) => {
    setEditingTask(task);
    setShowForm(true);
  };

  // Cancel edit
  const handleCancelEdit = () => {
    setEditingTask(null);
    setShowForm(false);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>📋 Task Manager</h1>
      </header>

      <main className="app-main">
        {error && <div className="error-message">{error}</div>}

        {!showForm && (
          <button className="btn-add-task" onClick={() => setShowForm(true)}>
            + Add New Task
          </button>
        )}

        {showForm && (
          <TaskForm
            onSubmit={editingTask ? handleUpdateTask : handleCreateTask}
            onCancel={handleCancelEdit}
            editTask={editingTask}
            users={users}
          />
        )}

        <TaskFilter currentFilter={filter} onFilterChange={setFilter} />

        {loading ? (
          <LoadingSpinner />
        ) : (
          <TaskList
            tasks={tasks}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
            onToggleComplete={handleToggleComplete}
          />
        )}
      </main>
    </div>
  );
};

export default App;