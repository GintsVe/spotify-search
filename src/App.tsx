import styled from "styled-components";
import Router from "./components/Router";

const App = () => {
  return (
    <Wrapper>
      <Router />
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
`;
