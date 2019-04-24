import React from "react";
import styled from "styled-components";

import { SearchBox, Button, ButtonIcon, Avatar } from "../elements";
import { InnerWidth } from "../helpers";

const StyledHeader = styled.header`
  width: 100%;

  background-color: ${p => p.theme.color.primary.mainFixed};
  color: ${p => p.theme.color.lightFixed};

  display: flex;
  justify-content: center;
  padding: var(--size-s);

  white-space: nowrap;
`;

const StyledInnerWidth = styled(InnerWidth)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header-left {
    display: flex;
 
    @media (max-width: ${p => p.theme.breakpoint.desktopL}) {
      flex-grow: 0;
    }
  }

  .header-searchBox {
    width: ${p => p.theme.increment(16)};
  }

  .header-right {
    font-size: ${p => p.theme.font.scale.small};
    display: flex;
    align-items: center;
  }

  .header-icons {
    /* color: ${p => p.theme.color.primary.dark}; */
    display: flex;
    flex-flow: row nowrap;
  }
`;

const Header = props => {
  return (
    <StyledHeader>
      <StyledInnerWidth>
        <div className="header-left">
          <ButtonIcon icon="fab fa-facebook-square fa-2x" margin="inline-s" />

          <div className="header-searchBox">
            <SearchBox placeholder="Search" />
          </div>
        </div>

        <div className="header-right">
          <Button margin="inline-s">
            <Avatar
              margin="inline-s"
              imageSrc="https://images-na.ssl-images-amazon.com/images/M/MV5BMjIyMzgxMzc5N15BMl5BanBnXkFtZTgwNDg3NzYzMDI@._V1_UY256_CR38,0,172,256_AL_.jpg"
            />
            Letitia
          </Button>

          <Button margin="inline-s">Home</Button>

          <Button margin="inline-base">Find Friends</Button>

          <div className="header-icons">
            <ButtonIcon
              icon="fas fa-user-friends fa-lg"
              margin="inline-m"
              alt="Friends"
            />

            <ButtonIcon
              icon="fas fa-comment-alt fa-lg"
              margin="inline-m"
              alt="Messages"
            />

            <ButtonIcon
              icon="fas fa-bell fa-lg"
              margin="inline-l"
              alt="Notifications"
            />

            <ButtonIcon
              icon="fas fa-question-circle fa-lg"
              margin="inline-m"
              alt="Help"
            />

            <ButtonIcon
              icon="fas fa-caret-down fa-lg"
              margin="inline-m"
              alt="More options"
            />
          </div>
        </div>
      </StyledInnerWidth>
    </StyledHeader>
  );
};

export default Header;
