import React from "react";
import styled from "styled-components";

import spacingProperties from "../../theme/spacingProperties";

const StyledAvatar = styled.div`
  ${spacingProperties};

  width: var(--size-base);
  height: var(--size-base);

  border-radius: 1000rem;
  overflow: hidden;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const Avatar = props => {
  return (
    <StyledAvatar {...props}>
      <img
        src="https://avatars1.githubusercontent.com/u/36854142?s=460&v=4"
        alt=""
      />
    </StyledAvatar>
  );
};

export default Avatar;
