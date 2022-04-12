// import logo from "./logo.svg";
// import "./App.css";
import NavigationBar from "./components/nav-bar";
import AppLayout from "./components/layout";
import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";
import Login from "./pages/login/login";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/profile/:username' element={<Profile />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
