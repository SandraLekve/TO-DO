import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  *{
    box-sizing: border-box;
  }
    body{
        background-color: #EEB3E0;
        color: white;
    }
`;

export const TextButton = styled.button`
  color: white;
  font-size: 14px;
  background: none;
  color: whitesmoke;
  border: none;
  align-self: center;

  &:hover{
    cursor: pointer;
  }
`;
