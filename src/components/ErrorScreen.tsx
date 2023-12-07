import styled from "styled-components";
import ErrorMessage from "./ErrorMessage";
import { FC, MouseEventHandler } from "react";
import BackButton from "./BackButton";

type ErrorScreenProps = {
  error: string;
  onBackButtonClick: MouseEventHandler<HTMLButtonElement>;
};

const ErrorScreen: FC<ErrorScreenProps> = ({ error, onBackButtonClick }) => {
  return (
    <Wrapper>
      <ErrorMessage value={error} />
      <BackButton onClick={onBackButtonClick} />
    </Wrapper>
  );
};

export default ErrorScreen;

const Wrapper = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
