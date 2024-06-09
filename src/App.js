import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/home";
import SignUp from "./pages/signup/SignUp";
import Test1 from "./pages/test/test1/test1";
import Finance from "./pages/finance/finance";
import { userInputs } from "./formSource";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/finance" element={<Finance inputs={userInputs}/> } />
        <Route path="/test1" element={<Test1/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
