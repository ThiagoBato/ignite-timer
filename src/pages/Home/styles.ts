import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  align-items: center;
  flex: 1;
  flex-direction: column;
  justify-content: center;

  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 3.5rem;
  }
`;

const BaseCountdownButton = styled.button`
  width: 100%;
  padding: 1rem;

  border: 0;
  border-radius: 8px;
  color: ${props => props.theme["gray-100"]};
  cursor: pointer;
  font-weight: bold;

  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;

  &:disabled {
    opacity: .7;
    cursor: not-allowed;
  }
`;

export const StartCountdownButton = styled(BaseCountdownButton)`
  background-color: ${props => props.theme["green-500"]};

  &:not(:disabled):hover {
    background-color: ${props => props.theme["green-700"]};
  }
`;
export const StopCountdownButton = styled(BaseCountdownButton)`
  background-color: ${props => props.theme['red-500']};

  &:not(:disabled):hover {
    background-color: ${props => props.theme["red-700"]};
  }
`;