import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const user = useSelector((state) => state.user);
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col md:flex-row justify-center items-center ">
      {user.ime === "" && <Navigate to="/login" replace />}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

// user.ime === ""  ? login :
//  return <Navigate to="/login" state={{ from: location }} replace />;

export default App;
