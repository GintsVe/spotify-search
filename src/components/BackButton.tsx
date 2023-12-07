import { FC, MouseEventHandler } from "react";
import styled from "styled-components";

type BackButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const BackButton: FC<BackButtonProps> = ({ onClick }) => {
  return <Button onClick={onClick}>Go back</Button>;
};

export default BackButton;

const Button = styled.button`
  width: 100px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding-block: 7px;
  margin: 10px 5px;
  color: white;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: black;
  }
`;
