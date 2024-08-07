import { useEffect } from "preact/hooks";
import "./app.css";
import DynamicSlider from "./DynamicSlider";

export function App() {
  useEffect(() => {});

  return (
    <div className="app">
      <DynamicSlider percentage={20} />
      <DynamicSlider percentage={40} />
    </div>
  );
}
