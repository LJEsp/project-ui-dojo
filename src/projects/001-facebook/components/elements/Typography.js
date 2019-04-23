import React from "react";
import styled from "styled-components";

const StyledTypography = styled.span``;

const Typography = props => {
  return <StyledTypography>{props.children}</StyledTypography>;
};

export default Typography;
