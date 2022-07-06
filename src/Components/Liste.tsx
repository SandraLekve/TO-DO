import { nanoid } from 'nanoid';
import React, {
  ChangeEvent,
  ChangeEventHandler,
  KeyboardEvent,
  useState,
} from 'react';
import { getAllJSDocTagsOfKind } from 'typescript';

type Props = {};

type Task = {
  id: string;
  label: string;
  isComplete: boolean;
};

const Liste: React.FC<Props> = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
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

  const handelCompleteChange =
    (handledTask: Task) => (e: ChangeEvent<HTMLInputElement>) => {
      setTasks((tasks) =>
        tasks.map((task) => {
          if (task.id === handledTask.id)
            return { ...task, isComplete: e.target.checked };
          return task;
        })
      );
    };

  const handleClearClick = () => {
    setTasks((tasks) => tasks.filter((task) => !task.isComplete));
  };

  return (
    <div>
      <div>
        {tasks.map((task) => (
          <div key={task.id}>
            <input
              type="checkbox"
              checked={task.isComplete}
              onChange={handelCompleteChange(task)}
            />
            {task.label}
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
