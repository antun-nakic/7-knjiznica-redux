import PrivateRoutes from "./features/auth/PrivateRoutes";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Login from "./components/login/Login";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className='min-h-screen bg-slate-900 flex flex-col md:flex-row justify-center items-center '>
      <Routes>
        <Route path='/' element={<PrivateRoutes />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

// user.ime === ""  ? login :
//  return <Navigate to="/login" state={{ from: location }} replace />;

export default App;
