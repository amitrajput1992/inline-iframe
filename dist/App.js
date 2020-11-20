import React, {useEffect, useState} from "../web_modules/react.js";
import "../web_modules/bootstrap/dist/css/bootstrap-reboot.min.css.proxy.js";
import "./App.css.proxy.js";
const defaultStyles = {width: "100%", height: "100%", border: "none"};
function parseStyleFromString(styleString) {
  try {
    const ops = styleString.split(";");
    return ops.reduce((prev, current) => {
      const [key, value] = current.split(":");
      console.log(prev, current, key, value);
      prev[key.trim()] = value.trim();
      return prev;
    }, {});
  } catch (e) {
    console.warn("style conversion unsuccessful. bailing and returning default styles");
    return defaultStyles;
  }
}
function App2() {
  const [url, setUrl] = useState("");
  const [permissions, setPermissions] = useState("gyroscope; accelerometer; microphone; camera; xr; vr;");
  const [style, setStyle] = useState(defaultStyles);
  useEffect(() => {
    const searchParams = new URL(window.location.href).searchParams;
    const url2 = searchParams.get("url") || "";
    const permissions2 = searchParams.get("permissions") || "";
    const style2 = searchParams.get("style") || "";
    setUrl(url2);
    setPermissions(permissions2);
    setStyle(parseStyleFromString(style2));
  }, []);
  return /* @__PURE__ */ React.createElement("div", {
    className: "html_root"
  }, /* @__PURE__ */ React.createElement("iframe", {
    src: url,
    allow: permissions,
    style
  }));
}
export default App2;
