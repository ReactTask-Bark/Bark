import styled from "styled-components";
import Router from "shared/Router";
import { useSelector } from "react-redux";

import Header from "components/header/Header";
import LoadingPage from "view/Loding";

function App() {
  const isLoading = useSelector((state) => state.post.isLoading);
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
          {isLoading && <LoadingPage />}
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
  position: fixed;
  top: 0;
  min-width: 800px;
  width: 100%;
  box-shadow: 0 0 5px 0;
  background: white;
`;
const MainArea = styled.div`
  margin-top: 200px;
  min-width: 800px;
  background: rgba(255, 204, 204, 0.1);
  min-height: calc(100vh - 200px);
`;

export default App;
