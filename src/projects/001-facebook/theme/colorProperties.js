import { css } from "styled-components";

const colorProperties = ({
  theme: {
    color: { palette }
  },
  color
}) => css`
  color: ${palette[color]};
`;

export default colorProperties;
