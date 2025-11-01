import React from 'react';
import { Task } from '../types';

interface TaskItemProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: number) => void;
  onToggleComplete: (id: number, completed: boolean) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onEdit, onDelete, onToggleComplete }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-header">
        <div className="task-checkbox">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleComplete(task.id, !task.completed)}
            id={`task-${task.id}`}
          />
          <label htmlFor={`task-${task.id}`}></label>
        </div>
        <h3>{task.title}</h3>
      </div>
      
      <p className="task-description">{task.description}</p>
      
      <div className="task-meta">
        <span className="assigned-to">
          <strong>Assigned to:</strong> {task.assignedTo}
        </span>
        <span className={`status ${task.completed ? 'completed' : 'incomplete'}`}>
          {task.completed ? '✓ Completed' : '○ Incomplete'}
        </span>
      </div>

      <div className="task-actions">
        <button className="btn-edit" onClick={() => onEdit(task)}>
          Edit
        </button>
        <button className="btn-delete" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;