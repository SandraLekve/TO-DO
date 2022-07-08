import React from 'react';
import { TasksProps } from '../types';

type Props = TasksProps & {};

const Focus: React.FC<Props> = ({ tasks, updateTaskcompletion }) => {
  const task = tasks.filter((task) => !task.isComplete)[0];

  const handleMarkCompleted = () => {
    updateTaskcompletion(task.id, true);
  };

  return task ? (
    <div>
      <div>{task.label}</div>
      <button onClick={handleMarkCompleted}>Mark Completed</button>
    </div>
  ) : (
    <div>No incomplete tasks.Yay! </div>
  );
};

export default Focus;
