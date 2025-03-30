import React from "react";
import ApplicationHeader from "./components/layout/Header";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { loadTheme, GlobalStyles } from "./theme/components";
import Routes from "./Routes";

const StyledApplicationWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
`;

const App = () => {
  return (
    <StyledApplicationWrapper>
      <Router>
        <GlobalStyles />
        <ThemeProvider theme={loadTheme({})}>
          <ApplicationHeader />
          <Routes />
        </ThemeProvider>
      </Router>
    </StyledApplicationWrapper>
  );
};

export default App;
