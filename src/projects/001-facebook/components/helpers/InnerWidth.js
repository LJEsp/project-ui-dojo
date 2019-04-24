import styled from "styled-components";

const InnerWidth = styled.div`
  width: 70%;

  @media (max-width: ${p => p.theme.breakpoint.desktopL}) {
    width: 100%;
    padding: 0 var(--size-base);
  }
`;

export default InnerWidth;
