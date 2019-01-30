import React from "react";
import ReactDom from "react-dom";
import CanvasNest from "canvas-nest.js";
import "typeface-balthazar";
import "typeface-nova-square";
import { Provider } from "alfa";

import "./index.css";
import * as serviceWorker from "./serviceWorker";
import * as actions from "./actions";
import App from "./App";

window.__env = process.env;
const el = document.getElementById("root");

render(App);
new CanvasNest(el, {
  color: "0,0,0",
  count: 80,
});

serviceWorker.unregister();

if (module.hot) module.hot.accept(() => render(App));

function render(Component) {
  ReactDom.render(
    <Provider data={{ ...actions }}>
      <Component />
    </Provider>,
    el
  );
}
