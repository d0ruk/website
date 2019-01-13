import React, { Component } from "react";
import styled from "styled-components";
import { subscribe } from "alfa";

import { Button, H1, Input, TextArea } from "~c";
import { isEmail } from "~/util";

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

class ContactForm extends Component {
  componentDidMount() {
    this.nameInput.focus();
  }

  render() {
    const {
      name = "",
      mail = "",
      subject = "",
      body = "",
      sendMail,
    } = this.props;

    return (
      <Wrapper>
        <H1>from</H1>
        <Input
          value={name}
          name="name"
          placeholder="name"
          onChange={this.onChange}
          ref={c => (this.nameInput = c)}
        />
        <Input
          value={mail}
          name="mail"
          placeholder="email"
          onChange={this.onChange}
        />
        <H1>message</H1>
        <Input
          value={subject}
          placeholder="subject"
          name="subject"
          onChange={this.onChange}
        />
        <TextArea
          value={body}
          placeholder="body"
          name="body"
          onChange={this.onChange}
          cols="80"
          rows="10"
        />
        <Button onClick={sendMail} disabled={!this.isValid()}>
          Send
        </Button>
      </Wrapper>
    );
  }

  onChange = evt => this.props.set(evt.target.name, evt.target.value);

  isValid = () => {
    const { body, mail, name, subject } = this.props;

    return (
      body &&
      isEmail(mail) &&
      (name.length && name.length > 3 && name.length < 42) &&
      (subject.length && subject.length > 5)
    );
  };
}

export default subscribe(
  ContactForm,
  ["set", "name", "mail", "subject", "body", "sendMail"],
  ["name", "mail", "subject", "body"]
);
