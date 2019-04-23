import React from "react";
import styled, { ThemeProvider } from "styled-components";

import Header from "./components/layout/Header";

import GlobalStyle from "./theme/GlobalStyle";
import theme from "./theme/theme";

const StyledMain = styled.div``;

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledMain>
        <GlobalStyle />

        <Header />
      </StyledMain>
    </ThemeProvider>
  );
};

export default Main;
