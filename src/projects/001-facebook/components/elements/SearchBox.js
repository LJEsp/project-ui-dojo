import React from "react";
import styled from "styled-components";

import spacingProperties from "../../theme/spacingProperties";
import Icon from "./Icon";

const Wrapper = styled.div`
  ${spacingProperties};

  width: 100%;
  display: inline-block;
  position: relative;

  .searchBox-icon {
    position: absolute;
    right: var(--size-s);
    top: 50%;
    transform: translateY(-50%);
    color: ${p => p.theme.color.primary.main};
  }
`;

const StyledSearchBox = styled.input.attrs(() => ({
  type: "text"
}))`
  width: 100%;
  height: var(--size-l);
  background-color: ${p => p.theme.color.light};

  color: ${p => p.theme.color.dark};
  padding: 0 var(--size-s);
  border-radius: var(--size-xs);
`;

const SearchBox = props => {
  return (
    <Wrapper {...props}>
      <StyledSearchBox {...props} />

      <div className="searchBox-icon">
        <Icon icon="fas fa-search" />
      </div>
    </Wrapper>
  );
};

export default SearchBox;
