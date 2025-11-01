import React from 'react';
import { FilterType } from '../types';

interface TaskFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const TaskFilter: React.FC<TaskFilterProps> = ({ currentFilter, onFilterChange }) => {
  return (
    <div className="task-filter">
      <button
        className={currentFilter === 'all' ? 'active' : ''}
        onClick={() => onFilterChange('all')}
      >
        All Tasks
      </button>
      <button
        className={currentFilter === 'incomplete' ? 'active' : ''}
        onClick={() => onFilterChange('incomplete')}
      >
        Incomplete
      </button>
      <button
        className={currentFilter === 'completed' ? 'active' : ''}
        onClick={() => onFilterChange('completed')}
      >
        Completed
      </button>
    </div>
  );
};

export default TaskFilter;