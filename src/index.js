import "typeface-balthazar";
import "typeface-nova-square";
import React from "react";
import { createRoot } from "react-dom/client";
import CanvasNest from "canvas-nest.js";
import { Provider } from "alfa";

import "./index.css";
import * as serviceWorker from "./serviceWorker";
import * as actions from "./actions";
import App from "./App";

window.__env = process.env;
const el = document.getElementById("root");
const root = createRoot(el);

render(App);
new CanvasNest(el, {
  color: "0,0,0",
  count: 80,
});

serviceWorker.unregister();

if (module.hot) module.hot.accept(() => render(App));

function render(Component) {
  root.render(
    <Provider data={{ ...actions }}>
      <Component />
    </Provider>
  );
}
