import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import styled from 'styled-components';
import useTaskStore from '../hooks/use-task-store';
import DeleteIcon from '../icons/DeleteIcon';
import { TextButton } from '../Style/styles';
import { Task } from '../types';
import IconButton from './IconButton';
import Space from './Space';

const Container = styled.div`
  align-self: stretch;
  display: flex;
  flex: 0 1 460px;
  flex-direction: column;
  align-items: stretch;
`;

const List = styled.div`
  background-color: #7d7c7c;
  border-radius: 15px;
  padding: 45px 24px;
`;

const ListItem = styled.label`
  align-items: center;
  display: flex;
  font-size: 18px;
  padding: 4px 0;
`;

const DeleteButton = styled(IconButton)`
  visibility: hidden;
  ${ListItem}:hover & {
    visibility: visible;
  }
`;

const Input = styled.input`
  background-color: #6a6969;
  border: none;
  color: white;
  border-radius: 15px;
  padding: 20px 24px;
`;

type Props = {};

const Liste: React.FC<Props> = () => {
  const { addTask, tasks, setTasks, updateTaskcompletion } = useTaskStore();
  const [newTaskLabel, setNewTaskLabel] = useState('');

  const handleNewTasklabelChange = (e: ChangeEvent<HTMLInputElement>) =>
    setNewTaskLabel(e.target.value);

  const handlenewTaskKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newTaskLabel !== '') {
      addTask({ label: newTaskLabel });
      setNewTaskLabel('');
    }
  };

  const handleTaskCompleteChange =
    (handledTask: Task) => (e: ChangeEvent<HTMLInputElement>) => {
      updateTaskcompletion(handledTask.id, e.target.checked);
    };

  const handleClearClick = () => {
    setTasks((tasks) => tasks.filter((task) => !task.isComplete));
  };

  const handleTaskDeleteClick = (handledTask: Task) => () => {
    setTasks((tasks) => tasks.filter((task) => task.id !== handledTask.id));
  };

  return (
    <Container>
      <List>
        {tasks.map((task) => (
          <div key={task.id}>
            <ListItem>
              <input
                type="checkbox"
                checked={task.isComplete}
                onChange={handleTaskCompleteChange(task)}
              />
              <Space width={24} />
              {task.label}
              <Space flex={1} />
              <DeleteButton onClick={handleTaskDeleteClick(task)}>
                <DeleteIcon />
              </DeleteButton>
            </ListItem>
          </div>
        ))}
      </List>
      <Space height={30} />
      <Input
      placeholder='Add a task'
        value={newTaskLabel}
        onChange={handleNewTasklabelChange}
        onKeyPress={handlenewTaskKeyPress}
      />
      <Space height={45} />
      <TextButton onClick={handleClearClick}>Clear Completed</TextButton>
    </Container>
  );
};

export default Liste;
