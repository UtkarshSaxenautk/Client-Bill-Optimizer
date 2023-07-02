import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { useState } from "react";
import SignIn from "./components/Login";
import SignUp from "./components/Signup";
import ShowAppliances from "./components/ShowAppliance";
import Type from "./components/Types";
import { JwtContext } from "./JwtContext";

//import ShowAppliances from "./components/ShowAppliances";


const App = () => {
  const [jwt, setJwt] = useState('');
  return (
    
      
        <BrowserRouter>
          <JwtContext.Provider value={{ jwt, setJwt }}>
          <Routes>
            {/* <Route path="/details/:id" element={<Details />} /> */}
            <Route path="/" element={<Home />} />
            <Route path={"/selectappliances"} element={<ShowAppliances />} />
            <Route path={"/type"} element={<Type />} />
            <Route path={"/show"} element={<ShowAppliances />} />
            <Route path={"/login"} element={<SignIn />} />
            <Route path={"/signup"} element={<SignUp />} />
          </Routes>
          </JwtContext.Provider>
        </BrowserRouter>
  );
};

export default App;

