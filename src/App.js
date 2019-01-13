import React, { Component } from "react";
import { hot } from "react-hot-loader/root";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import ContactForm from "./pages/ContactForm";
import { Main } from "~c";

class App extends Component {
  render() {
    return (
      <>
        <Main>
          <ContactForm />
        </Main>
        <ToastContainer />
      </>
    );
  }
}

export default hot(App);
