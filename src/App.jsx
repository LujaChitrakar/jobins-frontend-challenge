import "./App.css";
import Navbar from "./components/common/Navbar";
import Sidebar from "./components/common/Sidebar";
import Dashboard from "./components/pages/Dashboard";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-[#f5f5f5]">
        <Navbar />
        <Dashboard />
        {/* Main content goes here */}
      </div>
    </div>
  );
}

export default App;
