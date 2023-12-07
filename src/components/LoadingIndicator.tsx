import styled, { keyframes } from "styled-components";

const LoadingIndicator = () => <LoadingSpinner />;

export default LoadingIndicator;

const spinnerRotation = keyframes`to {
    transform: rotate(1turn);
 }`;

const LoadingSpinner = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 9px solid;
  border-color: ${({ theme }) => theme.colors.primary};
  border-right-color: ${({ theme }) => theme.colors.tertiary};
  animation: ${spinnerRotation} 1s infinite linear;
`;
