import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius};

  width: 100%;
  padding: 10px 16px;
  font-weight: bold;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;
  outline: 0;
  transition: opacity 300ms, background-color 300ms;
  cursor: pointer;

  &:disabled {
    background-color: #979797;
    cursor: not-allowed;
  }

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;

export default Button;
