import React from "react";
import styled from "styled-components";

import { Card, Typography } from "../elements";
import { StoryItem } from "../blocks";

const StyledCard = styled(Card)`
  padding: var(--size-base);
  box-shadow: ${p => p.theme.shadow[0]};

  .stories-list {
    & > *:not(:last-child) {
      margin-bottom: var(--size-m);
    }
  }
`;

const StyledStories = styled.div``;

const Stories = props => {
  return (
    <StyledStories>
      <StyledCard>
        <Typography variant="display-4" margin="stack-m">
          Stories
        </Typography>

        <div className="stories-list">
          <StoryItem
            name="Joe Manganiello"
            imageSrc="https://images-na.ssl-images-amazon.com/images/M/MV5BMjI3NTkyMDYyOF5BMl5BanBnXkFtZTgwNjkyNzc4OTE@._V1_UY256_CR10,0,172,256_AL_.jpg"
          />

          <StoryItem
            name="Jessica Barden"
            imageSrc="https://images-na.ssl-images-amazon.com/images/M/MV5BMjQ2NjU3MzcyM15BMl5BanBnXkFtZTgwNzY1MzU2NDM@._V1_UY256_CR27,0,172,256_AL_.jpg"
          />

          <StoryItem
            name="Anne Hathaway"
            imageSrc="https://images-na.ssl-images-amazon.com/images/M/MV5BNjQ5MTAxMDc5OF5BMl5BanBnXkFtZTcwOTI0OTE4OA@@._V1_UY256_CR1,0,172,256_AL_.jpg"
          />

          <StoryItem
            name="Jessica Rothe"
            imageSrc="https://images-na.ssl-images-amazon.com/images/M/MV5BMTU4MDg2NTQ0Ml5BMl5BanBnXkFtZTgwMjk3NDc4OTE@._V1_UY256_CR107,0,172,256_AL_.jpg"
          />

          <StoryItem
            name="Caitlin McHugh"
            imageSrc="https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNzIwMjg1MV5BMl5BanBnXkFtZTgwMDc2OTMxOTE@._V1_UY256_CR14,0,172,256_AL_.jpg"
          />
        </div>
      </StyledCard>
    </StyledStories>
  );
};

export default Stories;
