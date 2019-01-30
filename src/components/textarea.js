import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

const TextArea = styled.textarea`
  border-radius: 0.3em;
  font-family: Balthazar;
  font-size: 1.5em;
  transition: box-shadow 0.3s;
  resize: none;
  height: 10em;

  &:focus {
    box-shadow: 0 0 1em rgba(0, 0, 255, 0.5);
    outline: none;
  }

  ${breakpoint("tablet")`
    height: 7em;
  `};
`;

export default TextArea;
