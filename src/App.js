import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="w-[85%] mx-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
