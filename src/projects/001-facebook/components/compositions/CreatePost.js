import React from "react";
import styled from "styled-components";

import { Card, Typography, Avatar, TextArea, MenuButton } from "../elements";

const StyledCard = styled(Card)`
  padding: var(--size-base);
  box-shadow: ${p => p.theme.shadow[0]};

  .createPost-row-input {
    display: flex;
    margin-bottom: var(--size-m);
    border-bottom: 1px solid ${p => p.theme.color.grey.light};
    padding-bottom: var(--size-m);
  }

  .createPost-row-buttons {
    display: flex;

    & > *:not(:last-child) {
      margin-right: var(--size-s);
    }
  }
`;

const StyledTextArea = styled(TextArea)`
  margin-top: var(--size-xs);
`;

const StyledCreatePost = styled.div``;

const CreatePost = props => {
  return (
    <StyledCreatePost>
      <StyledCard>
        <Typography variant="display-4" margin="stack-m">
          Create Post
        </Typography>

        <div className="createPost-row-input">
          <Avatar
            size="xl"
            imageSrc="https://images-na.ssl-images-amazon.com/images/M/MV5BMjIyMzgxMzc5N15BMl5BanBnXkFtZTgwNDg3NzYzMDI@._V1_UY256_CR38,0,172,256_AL_.jpg"
            margin="inline-base"
          />

          <StyledTextArea placeholder="What's on your mind?" />
        </div>

        <div className="createPost-row-buttons">
          <MenuButton variant="pill" icon="fas fa-image" iconColor="blue">
            Photo/Video
          </MenuButton>

          <MenuButton
            variant="pill"
            icon="fas fa-user-friends"
            iconColor="blue"
          >
            Tag Friends
          </MenuButton>

          <MenuButton variant="pill" icon="fas fa-grin" iconColor="orange">
            Feeling/Activity
          </MenuButton>

          <MenuButton
            variant="pill"
            icon="fas fa-ellipsis-h"
            iconColor="grey"
            iconOnly
          />
        </div>
      </StyledCard>
    </StyledCreatePost>
  );
};

export default CreatePost;
