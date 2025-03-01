import { useState } from "react";
import "./index.css";
import { MUISButton } from '@patlux/muis-core'

export function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="app">
      <MUISButton variant="contained" onClick={() => setCount(prev => prev + 1)}>Click me: {count}</MUISButton>
    </div>
  );
}

export default App;
