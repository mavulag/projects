import Topbar from "./components/Topbar/Topbar";
import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Settings from "./pages/Settings/Settings";
import Single from "./pages/Single/Single";
import Write from "./pages/Write/Write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const currentUser = true

  const registerElement = currentUser ? <Homepage /> : <Register />
  const loginElement = currentUser ? <Homepage /> : <Login />
  const writeElement = currentUser ? <Write /> : <Login />
  const settingsElement = currentUser ? <Settings /> : <Login />

  return (
    <Router>
      <div>
        <Topbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/posts" element={<Homepage />} />
          <Route path="/register" element={registerElement} />
          <Route path="/login" element={loginElement} />
          <Route path="/post/:id" element={<Single />} />
          <Route path="/write" element={writeElement} />
          <Route path="/settings" element={settingsElement} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
