import styled from "styled-components"
import WriteBoard from "./view/WriteBoard"

function App() {
  return (
    <Container>
      <WriteBoard />
    </Container>
  );
}

const Container = styled.div`
  max-width: 1200px;
  min-width: 800px;
  height: 100vh;
  margin: auto;

  background-color: rgba(255, 204, 204,.3);
`;

export default App;
