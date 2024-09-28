import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Banner from "./components/Banner";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main1 h-[100vh] flex justify-center items-center w-[100vw]">
      <Banner />
    </div>
  );
}

export default App;
