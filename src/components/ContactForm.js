import React from "react";
import styled from "styled-components";
import { AppContext } from "../App";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

   > * {
    margin: 0.3em 0;
    padding: 0.5em;
  }

  input[type="text"],
  textarea {
    border-radius: 0.3em;
    font-family: Balthazar;
    font-size: 1.5em;
    transition: box-shadow 0.3s;
  }

  input[type="text"]:focus,
  textarea:focus {
    box-shadow: 0 0 1em rgba(0, 0, 255, 0.5);
    outline: none;
  }

  button {
    align-self: flex-end;
    background-color: rgba(0, 0, 255, 0.8);
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    font-family: Nova Square;
    font-size: 2em;
    outline: none;
    transition: background-color .7s ease-in-out;
  }

  button:hover {
    background-color: rgba(0, 255, 0, 0.5);
  }

  button:disabled {
    background-color: rgba(0, 0, 0, 0.5);
    cursor: not-allowed;
  }

  h1 {
    font-family: Nova Square;
    font-size: 3em;
    font-variant: small-caps;
    margin: 0;
  }
`;

const ContactForm = () => (
  <AppContext.Consumer>
    {({ onName, onEmail, onSubject, onBody, onSubmit, isValid }) => (
      <Wrapper>
        <h1>from</h1>
        <input type="text" placeholder="name" onChange={onName} />
        <input type="text" placeholder="email" onChange={onEmail} />
        <h1>message</h1>
        <input type="text" placeholder="subject" onChange={onSubject} />
        <textarea
          className="textarea"
          placeholder="body"
          cols="80"
          rows="10"
          onChange={onBody}
        />
        <button onClick={onSubmit} disabled={!isValid}>
          Send
        </button>
      </Wrapper>
    )}
  </AppContext.Consumer>
);

export default ContactForm;
