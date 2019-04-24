import styled from "styled-components";

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  background-color: ${p => p.theme.color.white};
  border-radius: var(--size-s);
  /* border: 1px solid red; */
  /* padding: var(--size-s); */
  resize: none;
  font-size: ${p => p.theme.font.scale.body};
`;

export default TextArea;
