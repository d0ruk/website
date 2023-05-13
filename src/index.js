import "@fontsource/balthazar";
import "@fontsource/nova-square";
import React from "react";
import { createRoot } from "react-dom/client";
import ReactCanvasNest from "react-canvas-nest";

import "./index.css";
import * as serviceWorker from "./serviceWorker";
import App from "./App";

window.__env = process.env;
const el = document.getElementById("root");
const root = createRoot(el);

serviceWorker.unregister();
render(App);

if (module.hot) module.hot.accept(() => render(App));

function render(Component) {
  root.render(
    <>
      <ReactCanvasNest
        className="canvasNest"
        config={{
          pointColor: "255,255,255",
          lineColor: "0,0,0",
          count: 100,
          opacity: 1,
        }}
      />
      <Component />
    </>,
  );
}
