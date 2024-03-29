import React from 'react';
import styled from 'styled-components';
import useTaskStore from '../hooks/use-task-store';
import Button from '../Components/Button';
import Space from '../Components/Space';
import { TextButton } from '../Style/styles';


type Props = {};

const Focus: React.FC<Props> = () => {
  const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    flex: 1;
  `;

  const Task = styled.div`
    display: flex;
    align-items: center;
    font-size: 32px;
    justify-content: center;
    padding-bottom: 45 px;
    flex: 1;
  `;
  const {
    focusedTask: task,
    suffeleFocusedTask,
    updateTaskcompletion,
  } = useTaskStore();

  const handleMarkCompleted = () => {
    if (task) updateTaskcompletion(task.id, true);
  };

  return task ? (
    <Container>
      <Task>{task.label}</Task>
      <Button onClick={handleMarkCompleted}>Mark Completed</Button>
      <Space height={45} />
      <TextButton onClick={suffeleFocusedTask}>Nope</TextButton>
    </Container>
  ) : (
    <div>No incomplete tasks.Yay! </div>
  );
};

export default Focus;
