import "./App.css";
import Navbar from "./components/common/Navbar";
import Sidebar from "./components/common/Sidebar";
import Dashboard from "./components/pages/Dashboard-page/Dashboard";

function App() {
  return (
    <div className="app-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main-content">
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
