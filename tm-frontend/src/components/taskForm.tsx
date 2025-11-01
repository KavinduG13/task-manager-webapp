import React, { useState, useEffect } from 'react';
import { Task, CreateTaskData } from '../types';

interface TaskFormProps {
  onSubmit: (taskData: CreateTaskData) => void;
  onCancel?: () => void;
  editTask?: Task | null;
  users: string[];
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, onCancel, editTask, users }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [assignedTo, setAssignedTo] = useState('');

  useEffect(() => {
    if (editTask) {
      setTitle(editTask.title);
      setDescription(editTask.description);
      setAssignedTo(editTask.assignedTo);
    }
  }, [editTask]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, description, assignedTo });
    setTitle('');
    setDescription('');
    setAssignedTo('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>{editTask ? 'Edit Task' : 'Add New Task'}</h2>
      
      <div className="form-group">
        <label htmlFor="title">Title *</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Enter task title"
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description *</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          placeholder="Enter task description"
          rows={4}
        />
      </div>

      <div className="form-group">
        <label htmlFor="assignedTo">Assign To *</label>
        <input
          type="text"
          id="assignedTo"
          value={assignedTo}
          onChange={(e) => setAssignedTo(e.target.value)}
          required
          placeholder="Enter user name"
          list="users-list"
        />
        <datalist id="users-list">
          {users.map((user, index) => (
            <option key={index} value={user} />
          ))}
        </datalist>
      </div>

      <div className="form-actions">
        <button type="submit" className="btn-primary">
          {editTask ? 'Update Task' : 'Add Task'}
        </button>
        {onCancel && (
          <button type="button" className="btn-secondary" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default TaskForm;