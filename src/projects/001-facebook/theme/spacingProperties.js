import { css } from "styled-components";

const spacingProperties = ({ theme: { size }, margin, padding }) => css`
margin: ${(margin === "stack-base" && `0 0 ${size.base} 0`) ||
  (margin === "stack-xxs" && `0 0 ${size.xxs} 0`) ||
  (margin === "stack-xs" && `0 0 ${size.xs} 0`) ||
  (margin === "stack-s" && `0 0 ${size.s} 0`) ||
  (margin === "stack-m" && `0 0 ${size.m} 0`) ||
  (margin === "stack-l" && `0 0 ${size.l} 0`) ||
  (margin === "stack-xl" && `0 0 ${size.xl} 0`) ||
  (margin === "inline-base" && `0 ${size.base} 0 0`) ||
  (margin === "inline-xxs" && `0 ${size.xxs} 0 0`) ||
  (margin === "inline-xs" && `0 ${size.xs} 0 0`) ||
  (margin === "inline-s" && `0 ${size.s} 0 0`) ||
  (margin === "inline-m" && `0 ${size.m} 0 0`) ||
  (margin === "inline-l" && `0 ${size.l} 0 0`) ||
  (margin === "inline-xl" && `0 ${size.xl} 0 0`) ||
  (margin === "wrap-base" && `0 ${size.base} ${size.base} 0`) ||
  (margin === "wrap-xxs" && `0 ${size.xxs} ${size.xxs} 0`) ||
  (margin === "wrap-xs" && `0 ${size.xs} ${size.xs} 0`) ||
  (margin === "wrap-s" && `0 ${size.s} ${size.s} 0`) ||
  (margin === "wrap-m" && `0 ${size.m} ${size.m} 0`) ||
  (margin === "wrap-l" && `0 ${size.l} ${size.l} 0`) ||
  (margin === "wrap-xl" && `0 ${size.xl} ${size.xl} 0`)};

padding: ${(padding === "inset-base" &&
  `${size.base} ${size.base} ${size.base} ${size.base}`) ||
  (padding === "inset-xxs" &&
    `${size.xxs} ${size.xxs} ${size.xxs} ${size.xxs}`) ||
  (padding === "inset-xs" && `${size.xs} ${size.xs} ${size.xs} ${size.xs}`) ||
  (padding === "inset-s" && `${size.s} ${size.s} ${size.s} ${size.s}`) ||
  (padding === "inset-m" && `${size.m} ${size.m} ${size.m} ${size.m}`) ||
  (padding === "inset-l" && `${size.l} ${size.l} ${size.l} ${size.l}`) ||
  (padding === "inset-xl" && `${size.xl} ${size.xl} ${size.xl} ${size.xl}`) ||
  (padding === "squish-base" &&
    `${size.baseHalf} ${size.base} ${size.baseHalf} ${size.base}`) ||
  (padding === "squish-xl" && `${size.l} ${size.xl} ${size.l} ${size.xl}`) ||
  (padding === "squish-l" && `${size.m} ${size.l} ${size.m} ${size.l}`) ||
  (padding === "squish-m" && `${size.s} ${size.m} ${size.s} ${size.m}`) ||
  (padding === "squish-s" && `${size.xs} ${size.s} ${size.xs} ${size.s}`) ||
  (padding === "stretch-base" &&
    `${size.base} ${size.baseHalf} ${size.base} ${size.baseHalf}`) ||
  (padding === "stretch-xl" && `${size.xl} ${size.l} ${size.xl} ${size.l}`) ||
  (padding === "stretch-l" && `${size.l} ${size.m} ${size.l} ${size.m}`) ||
  (padding === "stretch-m" && `${size.m} ${size.s} ${size.m} ${size.s}`) ||
  (padding === "stretch-s" && `${size.s} ${size.xs} ${size.s} ${size.xs}`)};
`;

export default spacingProperties;