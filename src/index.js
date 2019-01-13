import React from "react";
import { render } from "react-dom";
import CanvasNest from "canvas-nest.js";
import "typeface-balthazar";
import "typeface-nova-square";
import { Provider } from "alfa";

import "./index.css";
import * as serviceWorker from "./serviceWorker";
import * as actions from "./actions";
window.__env = process.env;

const el = document.getElementById("root");
renderApp();
new CanvasNest(el, {
  color: "0,0,0",
  count: 80,
});

serviceWorker.unregister();

if (module.hot) module.hot.accept(renderApp);

function renderApp() {
  const App = require("./App").default;
  render(
    <Provider data={{ ...actions }}>
      <App />
    </Provider>,
    el
  );
}
