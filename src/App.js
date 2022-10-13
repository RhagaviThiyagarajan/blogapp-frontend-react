import "./App.css";
import Write from "./pages/write/Write";
import TopBar from "./components/TopBar/TopBar.jsx";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import { ContextProvider } from "./context/Context";

function App() {
  const {user}=useContext(Context);
  return (
<ContextProvider>
    <BrowserRouter>
        <TopBar />
      <Routes>
  

        <Route exact path="/" element={<Home />}></Route>

        <Route path="/login" element={user? <Home/> :<Login />}></Route>

        <Route path="/write" element={user ? <Write />:<Register/>}></Route>

        <Route path="/settings" element={user?<Settings />:<Register/>}></Route>

        <Route path="/register" element={user? <Home/>: <Register />}></Route>
     
      
      <Route path="/post/:postId" element={<Single />}></Route>
      </Routes>
    </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
