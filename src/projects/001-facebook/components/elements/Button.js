import React from "react";
import styled, { css } from "styled-components";

import spacingProperties from "../../theme/spacingProperties";

const configs = css``;

const StyledButton = styled.button`
  ${spacingProperties};

  min-height: var(--size-button);
  min-width: ${p => p.theme.increment(3)};
  border-radius: var(--size-s);
  padding: var(--size-s) var(--size-m);

  display: inline-flex;
  align-items: center;

  &:hover {
    background-color: ${p => p.theme.color.primary.dark};
  }

  ${configs};
`;

const Button = props => {
  return (
    <StyledButton {...props}>
      {props.icon && <i className={props.icon} />}

      {props.children}
    </StyledButton>
  );
};

export default Button;
