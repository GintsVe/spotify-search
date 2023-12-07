import { ChangeEvent, FC } from "react";
import styled from "styled-components";

type TInputProps = {
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput: FC<TInputProps> = ({ value, onChange, placeholder }) => {
  return <Input value={value} onChange={onChange} placeholder={placeholder} />;
};

export default SearchInput;

const Input = styled.input`
  width: 75%;
  height: 50px;
  border: 0;
  border-radius: 10px;
  padding: 10px;
`;
