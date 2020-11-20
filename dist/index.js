import __SNOWPACK_ENV__ from '../static/snowpack/env.js';
import.meta.env = __SNOWPACK_ENV__;

import React from "../web_modules/react.js";
import ReactDOM from "../web_modules/react-dom.js";
import App2 from "./App.js";
import "./index.css.proxy.js";
ReactDOM.render(/* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(App2, null)), document.getElementById("root"));
if (import.meta.hot) {
  import.meta.hot.accept();
}
