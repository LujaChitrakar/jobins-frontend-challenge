import "./App.css";
import Navbar from "./components/common/Navbar";
import Sidebar from "./components/common/Sidebar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        {/* Main content goes here */}
      </div>
    </div>
  );
}

export default App;
