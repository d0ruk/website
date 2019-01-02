import React from "react";
import { render } from "react-dom";
import CanvasNest from "canvas-nest.js";
import "gridlex";
import "typeface-balthazar";
import "typeface-nova-square";

import "./index.css";
import * as serviceWorker from "./serviceWorker";

const el = document.getElementById("root");
new CanvasNest(el, {
  color: "255,0,0",
  count: 80
});

renderApp();
serviceWorker.unregister();

module.hot.accept(renderApp);

function renderApp() {
  const App = require("./App").default;
  render(<App />, el);
}
