import React from "react";
import styled from "styled-components";

const StyledIcon = styled.i``;

const Icon = props => {
  return <StyledIcon className={props.icon} />;
};

export default Icon;
