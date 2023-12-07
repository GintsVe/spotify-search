import { FC } from "react";
import styled from "styled-components";

export type ErrorMessageProps = {
  value: string;
};

const ErrorMessage: FC<ErrorMessageProps> = ({ value }) => {
  return <Message>{value}</Message>;
};

export default ErrorMessage;

const Message = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.danger};
`;
