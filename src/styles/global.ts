import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme["green-500"]};
  }
  body {
    background-color: ${props => props.theme["gray-900"]};
    color: ${props => props.theme["gray-300"]};
    -webkit-font-smoothing: antialiased;
  }
  body,
  input,
  textarea,
  button {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
  }
`;

export const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green'
}
export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

export interface ButtonContainerProps {
  variant: ButtonVariant;
}