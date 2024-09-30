// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="relative w-[1920px] h-[1080px]">
        <Header />
        <div className="absolute inset-74 w-full h-[956px] bg-black bg-opacity-80">
          <div className="mx-[40px] mt-[40px] h-[56px] w-auto border-b border-white">
            取引価格
          </div>
        </div>
        <div className="bg-main w-[1920px] h-[956px]"></div>
        <Footer />
      </div>

      {/* <div className="bg-main bg-cover bg-center min-h-screen"></div> */}
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
