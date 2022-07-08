import { nanoid } from 'nanoid';
import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { getAllJSDocTagsOfKind } from 'typescript';
import { Task, TasksProps } from '../types';

type Props = TasksProps & {};

const Liste: React.FC<Props> = ({ tasks, setTasks, updateTaskcompletion }) => {
  const [newTaskLabel, setNewTaskLabel] = useState('');

  const handleNewTasklabelChange = (e: ChangeEvent<HTMLInputElement>) =>
    setNewTaskLabel(e.target.value);

  const handlenewTaskKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newTaskLabel !== '') {
      setTasks((tasks) => [
        ...tasks,
        { id: nanoid(), label: newTaskLabel, isComplete: false },
      ]);
      setNewTaskLabel('');
    }
  };

  const handleTaskCompleteChange =
    (handledTask: Task) => (e: ChangeEvent<HTMLInputElement>) => {
      updateTaskcompletion(handledTask.id, e.target.checked )
    };

  const handleClearClick = () => {
    setTasks((tasks) => tasks.filter((task) => !task.isComplete));
  };

  const handleTaskDeleteClick = (handledTask: Task) => () => {
    setTasks((tasks) => tasks.filter((task) => task.id !== handledTask.id));
  };

  return (
    <div>
      <div>
        {tasks.map((task) => (
          <div key={task.id}>
            <input
              type="checkbox"
              checked={task.isComplete}
              onChange={handleTaskCompleteChange(task)}
            />
            {task.label}
            <button onClick={handleTaskDeleteClick(task)}>delete</button>
          </div>
        ))}
      </div>
      <input
        value={newTaskLabel}
        onChange={handleNewTasklabelChange}
        onKeyPress={handlenewTaskKeyPress}
      />
      <div>
        <button onClick={handleClearClick}>Clear Completed</button>
      </div>
    </div>
  );
};

export default Liste;
