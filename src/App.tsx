import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import './App.scss';

const defaultStyles = {width: "100%", height: "100%", border: "none"};

// height: 100%; width: 100%; border: none
function parseStyleFromString(styleString: string) {
  try {
    const ops = styleString.split(';');
    return ops.reduce((prev: Record<string, string>, current) => {
      const [key, value] = current.split(':');
      console.log(prev, current, key, value);
      prev[key.trim()] = value.trim();
      return prev;
    }, {});
  } catch(e) {
    console.warn("style conversion unsuccessful. bailing and returning default styles");
    return defaultStyles;
  }
}

function App() {
  const [url, setUrl] = useState("");
  const [permissions, setPermissions] = useState("gyroscope; accelerometer; microphone; camera; xr; vr;");
  const [style, setStyle] = useState<Record<string, string>>(defaultStyles);

  useEffect(() => {
    const searchParams = new URL(window.location.href).searchParams;
    const url = searchParams.get("url") || "";
    const permissions = searchParams.get("permissions") || "";
    const style = searchParams.get("style") || "";

    setUrl(url);
    setPermissions(permissions);
    setStyle(parseStyleFromString(style));
  }, []);

  return (
    <div className={'html_root'}>
      <iframe src={url} allow={permissions} style={style}/>
    </div>
  );
}

export default App;
