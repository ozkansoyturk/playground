import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1 className="PageTitle">PLayground</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
