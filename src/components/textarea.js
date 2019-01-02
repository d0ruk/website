import styled from "styled-components";

const TextArea = styled.textarea.attrs({ cols: "40", rows: "10" })`
  border-radius: 0.3em;
  font-family: Balthazar;
  font-size: 1.5em;
  transition: box-shadow 0.3s;

  &:focus {
    box-shadow: 0 0 1em rgba(0, 0, 255, 0.5);
    outline: none;
  }
`;

export default TextArea;
