import styled from "styled-components";
import LoadingIndicator from "./LoadingIndicator";

const PageLoadingIndicator = () => {
  return (
    <Wrapper>
      <LoadingIndicator />
    </Wrapper>
  );
};

export default PageLoadingIndicator;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
