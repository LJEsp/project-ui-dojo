import React from "react";
import styled, { css } from "styled-components";

import spacingProperties from "../../theme/spacingProperties";

const configs = css`
  ${p =>
    p.small &&
    css`
      font-size: 14px;
    `}

  ${p =>
    p.inline &&
    css`
      display: inline;
    `}
`;

const variants = css`
  ${p =>
    (p.variant === "menu" &&
      css`
        font-size: ${p => p.theme.font.scale.small};
        font-weight: 600;
        color: ${p => p.theme.color.grey.medium};
      `) ||
    (p.variant === "display-4" &&
      css`
        font-size: ${p => p.theme.font.scale.display4};
        font-weight: 600;
        color: ${p => p.theme.color.grey.medium};
      `) ||
    (p.variant === "body" &&
      css`
        font-size: ${p => p.theme.font.scale.body};
        color: ${p => p.theme.color.dark};
        line-height: ${p => p.theme.font.lineHeight};
      `) ||
    (p.variant === "user" &&
      css`
        font-size: ${p => p.theme.font.scale.base};
        color: ${p => p.theme.color.primary.main};
        font-weight: 600;
      `) ||
    (p.variant === "subtle" &&
      css`
        font-size: ${p => p.theme.font.scale.small};
        color: ${p => p.theme.color.dark};
      `)}
`;

const StyledTypography = styled.span`
  ${spacingProperties};

  font-size: ${p => p.theme.font.scale.base};
  display: block;

  ${variants};

  ${configs};
`;

const Typography = props => {
  return <StyledTypography {...props}>{props.children}</StyledTypography>;
};

export default Typography;
