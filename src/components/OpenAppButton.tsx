import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type OpenAppButtonProps = {
  url: string;
};

const OpenAppButton: FC<OpenAppButtonProps> = ({ url }) => {
  return <Button to={url}>Open in App</Button>;
};

export default OpenAppButton;

const Button = styled(Link)`
  background-color: #1bd407;
  color: black;
  padding: 10px;
  text-align: center;
  max-width: 150px;
  border-radius: 10px;
  font-weight: bold;

  &:hover {
    background-color: #17aa06;
  }
`;
