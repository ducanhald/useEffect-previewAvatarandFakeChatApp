import { useState } from "react";
// import PreviewAvatar from "./PreviewAvatar";
import Content from "./Content";
function App() {
  const [state, setState] = useState(false);
  const handle = () => {
    setState(!state);
  };
  return (
    <div style={{ padding: 20 }}>
      {/* {state && <PreviewAvatar />} */}
      {state && <Content />}
      <button onClick={handle}>show</button>
    </div>
  );
}

export default App;
