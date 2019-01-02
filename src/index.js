import React from "react";
import { render } from "react-dom";
import CanvasNest from "canvas-nest.js";
import "gridlex";
import "typeface-balthazar";
import "typeface-nova-square";

import "./index.css";
import * as serviceWorker from "./serviceWorker";

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
  render(<App />, el);
}
