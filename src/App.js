import { useSelector } from "react-redux";

import "./App.css";

function App() {
  const user = useSelector((state) => state.user);
  return (
    <div className="App">
      <h3>
        Nekoc davno zivio je jedan covjek zvani {user.ime} i imao je {user.dob}{" "}
        godina
      </h3>
    </div>
  );
}

export default App;
