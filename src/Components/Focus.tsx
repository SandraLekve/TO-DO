import React from 'react';
import { TasksProps } from '../types';

type Props = TasksProps & {};

const Focus: React.FC<Props> = ({
  focusedTask: task,
  suffeleFocusedTask,
  updateTaskcompletion
}) => {
  const handleMarkCompleted = () => {
    if (task) updateTaskcompletion(task.id, true);
  };

  return task ? (
    <div>
      <div>{task.label}</div>
      <button onClick={handleMarkCompleted}>Mark Completed</button>
      <button onClick={suffeleFocusedTask}>Nope</button>
    </div>
  ) : (
    <div>No incomplete tasks.Yay! </div>
  );
};

export default Focus;
