import styled from "styled-components";

const PageNotFound = () => {
  return (
    <Wrapper>
      <h1>Page not found</h1>
    </Wrapper>
  );
};

export default PageNotFound;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
