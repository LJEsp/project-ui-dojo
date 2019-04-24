import React from "react";
import styled from "styled-components";

import {
  Card,
  Typography,
  Avatar,
  TextArea,
  ButtonIcon,
  MenuButton
} from "../elements";
import { PostUser, PostCommentForm } from "../blocks";

const StyledTextArea = styled(TextArea)`
  margin-top: var(--size-xs);
`;

const StyledCard = styled(Card)`
  padding: var(--size-base);
  box-shadow: ${p => p.theme.shadow[0]};

  .post-header {
    margin-bottom: var(--size-s);
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .post-buttons {
    display: flex;
    margin-bottom: var(--size-base);
    padding-bottom: var(--size-s);
    border-bottom: 1px solid ${p => p.theme.color.grey.light};
  }

  .post-ellipsis {
    color: ${p => p.theme.color.dark};
  }
`;

const StyledPost = styled.div``;

const Post = props => {
  const { authorImage, authorName, content } = props;

  return (
    <StyledPost>
      <StyledCard>
        <div className="post-header">
          <PostUser authorImage={authorImage} authorName={authorName} />

          <ButtonIcon icon="fas fa-ellipsis-h" alt="Post options" className="post-ellipsis" />
        </div>

        <Typography variant="body" margin="stack-s">
          {content}
        </Typography>

        <div className="post-buttons">
          <MenuButton icon="far fa-thumbs-up" center>
            Like
          </MenuButton>
          <MenuButton icon="far fa-comment-alt" center>
            Comment
          </MenuButton>
          <MenuButton icon="far fa-share-square" center>
            Share
          </MenuButton>
        </div>

        <PostCommentForm />
      </StyledCard>
    </StyledPost>
  );
};

export default Post;
