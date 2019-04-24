import React from "react";
import styled from "styled-components";

import spacingProperties from "../../theme/spacingProperties";
import Icon from "./Icon";

const Wrapper = styled.div`
  ${spacingProperties};

  width: 100%;
  display: flex;
  position: relative;

  .searchBox-button {
    width: var(--size-xl);
    height: var(--size-l);
    background-color: ${p => p.theme.color.grey.light};
    color: ${p => p.theme.color.primary.main};
    border-radius: 0 var(--size-xs) var(--size-xs) 0;

    &:hover {
      background-color: ${p => p.theme.color.primary.light};
    }
  }

  /* .searchBox-icon {
    position: absolute;
    right: var(--size-s);
    top: 50%;
    transform: translateY(-50%);
    color: ${p => p.theme.color.primary.main};
  } */
`;

const StyledSearchBox = styled.input.attrs(() => ({
  type: "text"
}))`
  flex: 1;
  height: var(--size-l);
  background-color: ${p => p.theme.color.light};

  color: ${p => p.theme.color.dark};
  padding: 0 var(--size-s);
  border-radius: var(--size-xs) 0 0 var(--size-xs);
`;

const SearchBox = props => {
  return (
    <Wrapper {...props}>
      <StyledSearchBox {...props} />

      <button className="searchBox-button">
        <Icon icon="fas fa-search" />
      </button>

      {/* <div className="searchBox-icon">
        <Icon icon="fas fa-search" />
      </div> */}
    </Wrapper>
  );
};

export default SearchBox;
