import React from "react";
import styled from "styled-components";

import { Typography, Avatar, TextArea } from "../elements";

const StyledSponsoredItem = styled.div`
  .sponsoredItem-image {
    margin-bottom: var(--size-s);
    width: 100%;
  }
`;

const SponsoredItem = props => {
  const { name, excerpt, imageSrc } = props;

  return (
    <StyledSponsoredItem>
      <img src={imageSrc} alt="" className="sponsoredItem-image" />
      <Typography variant="user" margin="stack-s">
        {name}
      </Typography>
      <Typography variant="small">{excerpt}</Typography>
    </StyledSponsoredItem>
  );
};

export default SponsoredItem;
