import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import { Header, VerticalMenu } from "./components/layout";
import { InnerWidth } from "./components/helpers";
import {
  CreatePost,
  Post,
  Stories,
  Sponsored
} from "./components/compositions";

import GlobalStyle from "./theme/GlobalStyle";
import themeLight from "./theme/themeLight";
import themeDark from "./theme/themeDark";

const StyledMain = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  background-color: ${p => p.theme.color.light};

  .main-scroll {
    overflow-y: auto;
    padding-top: var(--size-m);
    display: flex;
    justify-content: center;
  }

  .main-theme-switcher {
    position: fixed;
    bottom: var(--size-xl);
    right: var(--size-xl);

    & > button {
      background-color: ${p => p.theme.color.dark};
      color: ${p => p.theme.color.light};
      border-radius: var(--size-s);
      padding: var(--size-l);
      box-shadow: ${p => p.theme.shadow[2]};
    }
  }
`;

const StyledHeader = styled(Header)``;

const StyledInnerWidth = styled(InnerWidth)`
  display: grid;
  grid-template-columns: ${p => p.theme.increment(9)} auto ${p =>
      p.theme.increment(14)};
  grid-column-gap: var(--size-m);

  .main-feed {
    & > * {
      margin-bottom: var(--size-m);
    }
  }

  .main-right {
    & > * {
      margin-bottom: var(--size-m);
    }
  }
`;

const StyledVerticalMenu = styled(VerticalMenu)`
  position: fixed;
  width: ${p => p.theme.increment(9)};
`;

const Main = () => {
  const [theme, setTheme] = useState("light");

  function handleThemeSwitch() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <ThemeProvider theme={theme === "light" ? themeLight : themeDark}>
      <StyledMain>
        <GlobalStyle />

        <StyledHeader />

        <div className="main-scroll">
          <StyledInnerWidth>
            <div className="main-verticalMenu-container">
              <StyledVerticalMenu />
            </div>

            <div className="main-feed">
              <CreatePost />

              <Post
                authorImage="https://images-na.ssl-images-amazon.com/images/M/MV5BMTYyOTQ2NjkyMl5BMl5BanBnXkFtZTcwODk5NjQzOA@@._V1_UY256_CR5,0,172,256_AL_.jpg"
                authorName="Yifei Liu"
                content="Excepteur elit reprehenderit esse officia fugiat consectetur sint culpa laboris magna enim mollit. Nulla velit ullamco deserunt eiusmod tempor. Qui amet consequat ut esse sint."
              />
              <Post
                authorImage="https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5MjI0MzY2MF5BMl5BanBnXkFtZTcwMzM3ODM3OA@@._V1_UX172_CR0,0,172,256_AL_.jpg"
                authorName="Domhnall Gleeson"
                content="Quis id incididunt adipisicing veniam minim in tempor officia in Lorem commodo esse. Ad consequat incididunt eiusmod non. Non laborum tempor officia proident sit nisi culpa ut non. Exercitation excepteur sint commodo duis aliquip velit incididunt. Enim cillum aute do nulla dolor cillum do et officia. Ea exercitation nulla voluptate labore veniam nostrud et Lorem elit mollit aliqua. Anim reprehenderit sunt incididunt ex nulla do esse occaecat ex minim occaecat."
              />
              <Post
                authorImage="https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwMDQ0NDk1OV5BMl5BanBnXkFtZTcwNDcxOTExNg@@._V1_UY256_CR2,0,172,256_AL_.jpg"
                authorName="Karen Gillan"
                content="Id aute sit velit sit excepteur cupidatat quis excepteur quis laboris cupidatat do cillum."
              />
            </div>

            <div className="main-right">
              <Stories />

              <Sponsored />
            </div>
          </StyledInnerWidth>
        </div>

        <div className="main-theme-switcher">
          <button onClick={handleThemeSwitch}>Toggle Light/Dark</button>
        </div>
      </StyledMain>
    </ThemeProvider>
  );
};

export default Main;
