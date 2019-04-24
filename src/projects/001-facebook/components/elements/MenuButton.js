import React from "react";
import styled, { css } from "styled-components";

import colorProperties from "../../theme/colorProperties";
import { Icon, Avatar } from "../elements";

const configs = css`
  ${p =>
    p.iconOnly &&
    css`
      .menuButton-graphic {
        margin-right: 0;
      }
    `}

  ${p =>
    p.center &&
    css`
      justify-content: center;
    `}
`;

const variants = css`
  ${p =>
    p.variant === "pill" &&
    css`
      width: unset;
      padding: var(--size-s) var(--size-m);
      border-radius: 1000rem;
      background-color: ${p => p.theme.color.light};
      font-weight: 600;
      color: ${p => p.theme.color.dark};

      &:hover {
        background-color: ${p => p.theme.color.grey.light};
      }
    `}
`;

const StyledMenuButton = styled.button.attrs(({ iconColor }) => ({
  color: iconColor
}))`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: var(--size-s) var(--size-xs);
  font-size: ${p => p.theme.font.scale.small};
  border-radius: var(--size-xs);
  text-align: left;
  color: ${p => p.theme.color.dark};

  &:hover {
    background-color: ${p => p.theme.color.grey.light};
  }

  span {
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .menuButton-graphic {
    ${colorProperties};

    flex-shrink: 0;
    margin-right: var(--size-s);
    width: var(--size-l);
    text-align: center;

    display: flex;
    justify-content: center;
  }

  ${variants};
  ${configs};
`;

const MenuButton = props => {
  const { variant, imageSrc } = props;

  let graphic = <Icon icon={`${props.icon} fa-lg`} />;
  switch (variant) {
    case "profile":
      graphic = <Avatar imageSrc={imageSrc} />;
      break;
    case "icon":
      graphic = <Icon icon={`${props.icon} fa-lg`} />;
      break;
    default:
      graphic = <Icon icon={`${props.icon} fa-lg`} />;
  }

  return (
    <StyledMenuButton {...props}>
      <div className="menuButton-graphic">{graphic}</div>

      <span>{props.children}</span>
    </StyledMenuButton>
  );
};

export default MenuButton;
