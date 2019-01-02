import styled from "styled-components";

const Button = styled.button`
  background-color: rgba(0, 0, 255, 0.8);
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  font-family: Nova Square;
  font-size: 2em;
  outline: none;
  transition: background-color 0.7s ease-in-out;

  &:hover {
    background-color: rgba(0, 255, 0, 0.5);
  }

  &:disabled {
    background-color: rgba(0, 0, 0, 0.5);
    cursor: not-allowed;
  }
`;

export default Button;
