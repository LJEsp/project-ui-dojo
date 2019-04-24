import React from "react";
import styled from "styled-components";

import { MenuButton, Typography } from "../elements";

const StyledVerticalMenu = styled.nav`
  .verticalMenu-section {
    margin-bottom: var(--size-s);
  }

  .verticalMenu-section-title {
    margin-bottom: var(--size-xs);
  }
`;

const VerticalMenu = props => {
  return (
    <StyledVerticalMenu {...props}>
      <section className="verticalMenu-section">
        <MenuButton
          variant="profile"
          imageSrc="https://images-na.ssl-images-amazon.com/images/M/MV5BMjIyMzgxMzc5N15BMl5BanBnXkFtZTgwNDg3NzYzMDI@._V1_UY256_CR38,0,172,256_AL_.jpg"
        >
          Letitia Wright
        </MenuButton>
      </section>

      <section className="verticalMenu-section">
        <MenuButton icon="fas fa-newspaper" iconColor="blue">
          News Feed
        </MenuButton>
        <MenuButton icon="fas fa-comment" iconColor="lightBlue">
          Messenger
        </MenuButton>
        <MenuButton icon="fas fa-play-circle" iconColor="indigo">
          Videos on Watch
        </MenuButton>
        <MenuButton icon="fas fa-store" iconColor="teal">
          Marketplace
        </MenuButton>
      </section>

      <section className="verticalMenu-section">
        <Typography variant="menu" className="verticalMenu-section-title">
          Shortcuts
        </Typography>
        <MenuButton icon="fas fa-mug-hot" iconColor="red">
          ReactJS Philippines
        </MenuButton>
        <MenuButton icon="fas fa-users" iconColor="grey">
          Manila JavaScript
        </MenuButton>
        <MenuButton icon="fas fa-users" iconColor="grey">
          freeCodeCamp.Manila
        </MenuButton>
      </section>

      <section className="verticalMenu-section">
        <Typography variant="menu" className="verticalMenu-section-title">
          Explore
        </Typography>
        <MenuButton icon="fas fa-user-friends" iconColor="blue">
          Friends List
        </MenuButton>
        <MenuButton icon="fas fa-flag" iconColor="deepOrange">
          Pages
        </MenuButton>
        <MenuButton icon="fas fa-bookmark" iconColor="deepPurple">
          Saved
        </MenuButton>
        <MenuButton icon="fas fa-calendar-day" iconColor="red">
          Events
        </MenuButton>
        <MenuButton icon="fas fa-users" iconColor="blue">
          Groups
        </MenuButton>
      </section>

      <div className="verticalMenu-section">
        <Typography variant="menu" className="verticalMenu-section-title">
          Create
        </Typography>

        <Typography variant="user" small>
          Ad • Page • Group • Event • Fundraiser
        </Typography>
      </div>
    </StyledVerticalMenu>
  );
};

export default VerticalMenu;
