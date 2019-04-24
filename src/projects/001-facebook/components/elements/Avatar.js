import React from "react";
import styled, { css } from "styled-components";

import spacingProperties from "../../theme/spacingProperties";

const configs = css`
  ${p =>
    (p.size === "l" &&
      css`
        width: var(--size-l);
        height: var(--size-l);
      `) ||
    (p.size === "xl" &&
      css`
        width: ${p => p.theme.increment(2)};
        height: ${p => p.theme.increment(2)};
      `)}
`;

const StyledAvatar = styled.div`
  ${spacingProperties};

  width: var(--size-base);
  height: var(--size-base);

  border-radius: 1000rem;
  overflow: hidden;

  ${configs};

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const Avatar = props => {
  const { imageSrc } = props;

  return (
    <StyledAvatar {...props}>
      <img src={imageSrc} alt="" />
    </StyledAvatar>
  );
};

export default Avatar;
