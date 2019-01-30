import "react-toastify/dist/ReactToastify.min.css";
import React, { Component } from "react";
import { hot } from "react-hot-loader/root";
import { ToastContainer } from "react-toastify";
import { Flex, Box } from "@rebass/grid";

import ContactForm from "./pages/ContactForm";
import { Main } from "~c";

class App extends Component {
  render() {
    return (
      <Main>
        <Flex alignItems="center" justifyContent="center">
          <Box
            flex="1 1 auto"
            p={["0.5rem", 0, "1rem"]}
            p={["0.5rem", 0, "1rem"]}
            width={["100vw", "80vw", "40vw"]}
          >
            <ContactForm />
          </Box>
          <ToastContainer />
        </Flex>
      </Main>
    );
  }
}

export default hot(App);
