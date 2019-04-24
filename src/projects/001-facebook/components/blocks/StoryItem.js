import React from "react";
import styled from "styled-components";

import { Typography, Avatar, TextArea } from "../elements";

const StyledStoryItem = styled.div`
  display: flex;
  align-items: center;

  & > * {
    flex-shrink: 0;
  }

  .storyItem-right {
    flex-shrink: 1;
  }
`;

const StoryItem = props => {
  const { name, imageSrc } = props;

  return (
    <StyledStoryItem>
      <Avatar size="xl" margin="inline-s" imageSrc={imageSrc} />

      <div className="storyItem-right">
        <Typography variant="user" margin="stack-xs" small>
          {name}
        </Typography>
        <Typography variant="subtle">22 hours ago</Typography>
      </div>
    </StyledStoryItem>
  );
};

export default StoryItem;
