import styled from "styled-components";

type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string;
  name: string;
};

const InputBase = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.mainBg};
  outline: 0;
  margin-bottom: 25px;
`;

const Input = (props: Props) => {
  return (
    <div>
      <InputBase
        onChange={props.onChange}
        placeholder={props.placeholder}
        value={props.value}
        name={props.name}
      />
    </div>
  );
};

export default Input;
