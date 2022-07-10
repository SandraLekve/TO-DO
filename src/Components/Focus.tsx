import React from 'react';
import useTaskStore from '../hooks/use-task-store';
import { TasksProps } from '../types';

type Props = {};

const Focus: React.FC<Props> = () => {
  const {
    focusedTask: task,
    suffeleFocusedTask,
    updateTaskcompletion,
  } = useTaskStore;

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
