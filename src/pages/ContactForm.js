import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

import { Button, H1, Input, TextArea } from "~c";
import { isEmail } from "~/util";
import { useStore } from "~/state";

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

  ${breakpoint("mobile")`
    > * {
      margin: 0.1em 0;
    }
  `};

  ${breakpoint("tablet")`
    > * {
      margin: 0.2em 0;
    }
  `};
`;

const ContactForm = () => {
  const inputRef = useRef();
  const { name, mail, subject, body } = useStore(
    ({ contactForm }) => contactForm,
  );
  const setContactForm = useStore(({ setContactForm }) => setContactForm);
  const submitContactForm = useStore(
    ({ submitContactForm }) => submitContactForm,
  );

  useEffect(
    () => {
      inputRef.current?.focus?.();
    },
    [inputRef],
  );

  const onChange = evt => setContactForm(evt.target.name, evt.target.value);
  const isValid = () => {
    return (
      body &&
      isEmail(mail) &&
      (name.length && name.length > 3 && name.length < 42) &&
      (subject.length && subject.length > 5)
    );
  };

  return (
    <Wrapper>
      <H1>from</H1>
      <Input
        value={name}
        name="name"
        placeholder="name"
        onChange={onChange}
        ref={inputRef}
      />
      <Input value={mail} name="mail" placeholder="email" onChange={onChange} />
      <H1>message</H1>
      <Input
        value={subject}
        placeholder="subject"
        name="subject"
        onChange={onChange}
      />
      <TextArea
        value={body}
        placeholder="body"
        name="body"
        onChange={onChange}
      />
      <Button onClick={submitContactForm} disabled={!isValid()}>
        Send
      </Button>
    </Wrapper>
  );
};

export default ContactForm;
