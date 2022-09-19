import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { ScrollToTop } from "react-to-top";
import { Header } from "./common/Header";
import { Container } from "components/ui/Containers";



const Main = styled.main`
  min-height: calc(100vh - 50px);
`;

export const MainLayout = () => {
  return (
  <>
    <Header />
      <Main>
        <Container>
        <Suspense>
          <Outlet />
        </Suspense>
        </Container>
      </Main>
      <ScrollToTop
      bgColor="#e6bd77"
      size={50}
      strokeWidth={3}
      strokeColor='#eead71'
      symbolSize={25}
      symbol="&#11165;"
      />
  </>
  );
};


