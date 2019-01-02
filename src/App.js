import React, { Component, createContext } from "react";
import styled from "styled-components";
import { hot } from "react-hot-loader/root";

import ContactForm from "./pages/ContactForm";
import { isEmail } from "./util";

export const AppContext = createContext({});

const MAIN = styled.main`
  display: flex;
  height: auto;
  justify-content: center;
  margin: 0 auto;
  min-height: 100%;
  padding: 0 auto;
`;

class App extends Component {
  state = {
    name: "",
    mail: "",
    subj: "",
    body: "",
  };

  render() {
    return (
      <AppContext.Provider
        className="grid"
        value={{
          isValid: this.isValid(),
          onSubmit: this.onSubmit,
          onName: ({ target: { value } }) => this.setState({ name: value }),
          onEmail: ({ target: { value } }) => this.setState({ mail: value }),
          onSubject: ({ target: { value } }) => this.setState({ subj: value }),
          onBody: ({ target: { value } }) => this.setState({ body: value }),
        }}
      >
        <MAIN>
          <ContactForm />
        </MAIN>
      </AppContext.Provider>
    );
  }

  isValid = () => {
    const { body, mail, name, subj } = this.state;

    return (
      body &&
      isEmail(mail) &&
      (name.length && name.length > 3 && name.length < 42) &&
      (subj.length && subj.length > 5)
    );
  };

  onSubmit = () => {
    console.log("submitting: %O", this.state);
  };
}

export default hot(App);
