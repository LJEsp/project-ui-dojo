import React from "react";
import styled from "styled-components";

import { Avatar, TextArea, ButtonIcon } from "../elements";

const StyledPostCommentForm = styled.div`
  display: flex;
  position: relative;

  .postCommentForm-right {
    flex-grow: 1;
  }

  .postCommentForm-buttons {
    color: ${p => p.theme.color.primary.main};
    position: absolute;
    right: var(--size-base);

    top: 50%;
    transform: translateY(-50%);

    & > *:not(:last-child) {
      margin-right: var(--size-s);
    }
  }
`;

const PostCommentForm = props => {
  return (
    <StyledPostCommentForm>
      <Avatar
        size="l"
        margin="inline-m"
        imageSrc="https://images-na.ssl-images-amazon.com/images/M/MV5BMjIyMzgxMzc5N15BMl5BanBnXkFtZTgwNDg3NzYzMDI@._V1_UY256_CR38,0,172,256_AL_.jpg"
      />

      <div className="postCommentForm-right">
        <TextArea placeholder="Write a Comment" />
      </div>

      <div className="postCommentForm-buttons">
        <ButtonIcon icon="fas fa-smile fa-lg" alt="Add emoji" />
        <ButtonIcon icon="fas fa-camera fa-lg" alt="Attach a photo or video" />
        <ButtonIcon icon="fas fa-sticky-note fa-lg" alt="Post a sticker" />
      </div>
    </StyledPostCommentForm>
  );
};

export default PostCommentForm;
