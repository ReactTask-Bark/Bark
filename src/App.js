import styled from "styled-components";

import Header from "components/header/Header";
// import Main from "view/Main";
import DetailBoard from "view/DetailBoard";
import Router from "shared/Router";

function App() {
  return (
    <>
      <HeaderArea>
        <Layout>
          <Header />
        </Layout>
      </HeaderArea>
      <MainArea>
        <Layout>
          <Router></Router>
        </Layout>
      </MainArea>
    </>
  );
}

const Layout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: auto;
`;

const HeaderArea = styled.div`
  min-width: 800px;
  box-shadow: 0 0 5px 0;
`;
const MainArea = styled.div`
  min-width: 800px;
  background: rgba(255, 204, 204, 0.1);
  min-height: calc(100vh - 200px);
`;

export default App;
