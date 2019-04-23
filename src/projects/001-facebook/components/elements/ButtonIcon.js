import React from "react";
import styled, { css } from "styled-components";

import spacingProperties from "../../theme/spacingProperties";

const StyledButtonIcon = styled.button`
  ${spacingProperties};

  &:hover {
    color: ${p => p.theme.color.primary.light};
  }
`;

const ButtonIcon = props => {
  return (
    <StyledButtonIcon {...props}>
      <i className={props.icon} />

      <span id="hidden">{props.alt}</span>
    </StyledButtonIcon>
  );
};

export default ButtonIcon;
