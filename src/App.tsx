// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Title from "./components/Title";
import Content from "./components/Content";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="relative w-[1920px] h-[1080px]">
        <Header />
        <div className="absolute inset-74 w-full h-[956px] bg-black bg-opacity-80">
          <Title />
          <Content />
        </div>
        <div className="bg-main w-[1920px] h-[956px]"></div>
        <Footer />
      </div>
    </>
  );
}

export default App;
