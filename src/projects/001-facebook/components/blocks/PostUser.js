import React from "react";
import styled from "styled-components";

import { Card, Typography, Avatar, TextArea, MenuButton } from "../elements";

const StyledPostUser = styled.div`
  display: flex;
  align-items: center;

  .postUser-right {
    display: flex
    flex-flow: column nowrap;
  }
`;

const PostUser = props => {
  const { authorImage, authorName } = props;

  return (
    <StyledPostUser>
      <Avatar size="xl" margin="inline-m" imageSrc={authorImage} />

      <div className="postUser-right">
        <Typography variant="user" margin="stack-xs">
          {authorName}
        </Typography>

        <Typography variant="subtle">1 hr</Typography>
      </div>
    </StyledPostUser>
  );
};

export default PostUser;
