import React from "react";
import styled from "styled-components";
import { AppContext } from "../App";

import { Button, H1, Input, TextArea } from "~c";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  > * {
    margin: 0.3em 0;
    padding: 0.5em;
  }

  button {
    align-self: flex-end;
  }
`;

const ContactForm = () => (
  <AppContext.Consumer>
    {({
      body,
      name,
      mail,
      subj,
      onName,
      onEmail,
      onSubject,
      onBody,
      onSubmit,
      isValid,
    }) => (
      <Wrapper>
        <H1>from</H1>
        <Input value={name} placeholder="name" onChange={onName} />
        <Input value={mail} placeholder="email" onChange={onEmail} />
        <H1>message</H1>
        <Input value={subj} placeholder="subject" onChange={onSubject} />
        <TextArea
          value={body}
          placeholder="body"
          cols="80"
          rows="10"
          onChange={onBody}
        />
        <Button onClick={onSubmit} disabled={!isValid}>
          Send
        </Button>
      </Wrapper>
    )}
  </AppContext.Consumer>
);

export default ContactForm;
