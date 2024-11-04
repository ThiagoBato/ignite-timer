import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;

  color: ${props => props.theme["gray-100"]};
  font-size: 1.125rem;
  font-weight: bold;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
`;

const BasedInput = styled.input`
  height: 2.5rem;
  padding: 0 0.5rem;

  background-color: transparent;
  border: 0;
  border-bottom: 2px solid ${props => props.theme["gray-500"]};
  color: ${props => props.theme.white};
  font-size: 1.125rem;
  font-weight: bold;

  &:focus {
    border-color: ${props => props.theme["green-500"]};
    box-shadow: none;
  }

  &::placeholder {
    color: ${props => props.theme["gray-500"]}
  }
`;

export const TaskInput = styled(BasedInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator{
    display: none !important;
  }
`;

export const MinutesAmountInput = styled(BasedInput)`
  width: 4rem;
`;