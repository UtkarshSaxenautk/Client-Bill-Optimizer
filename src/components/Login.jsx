/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { validate } from "react-email-validator";
import { Cookies } from "react-cookie";
import "./Login.css";
import { JwtContext } from "../JwtContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loginbg from '../assets/images/login.png'
const SignIn = () => {
    
  const navigate = useNavigate();
  const { jwt, setJwt } = useContext(JwtContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const cookies = new Cookies();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate(email)) {
      toast("invalid email");
      return;
    }
    if (password.length <= 5) {
      toast("password must be more than 5 characters");
      return;
    }
    const data = {
      email: email,
      password: password,
    };
    //console.log(jwt, " initially ");
    try {
      const response = await axios.post(
        "https://server-bill-optimizer.vercel.app/auth/login",
        data
      );
      console.log(response.data); // handle successful sign-up response here

      setJwt(response.data);

      // Store JWT in cookie
      const expirationTime = new Date(); // Set your desired expiration time here
      expirationTime.setMinutes(expirationTime.getMinutes + 2400); // Example: expires in 30 minutes

      // Set the cookie with the expiration time
        console.log(response.data.jwt)
      cookies.set("jwt", response.data.jwt, { path: "/", expires: expirationTime });
      console.log("Sign-in successful", response);
      navigate("/selectappliances");

      // Handle successful sign-in response here
    } catch (error) {
      console.log(error);
      if (error.code == "ERR_BAD_REQUEST") {
        toast("invalid passworrd or email");
      } else {
        toast("internal error try after sometime");
      }
      return;
    }
  };

  useEffect(() => {
    // Check if JWT exists in cookie on page load
    const jwt = cookies.get("jwt");
    if (jwt) {
      console.log("User already signed in");
      // Handle already signed-in user here
    }
  }, []);

  return (
    <>
      <section style={{
        backgroundImage: `url(${loginbg})`
      }} >
        <form onSubmit={handleSubmit} className="login">
          <h2>Sign In</h2>
          <div className="inputBox">
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>
          <div className="inputBox">
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
          </div>
          <div className="inputBox justify-center bg-white text-center h-7">
            <button type="submit">Sign In</button>
          </div>

          <div className="text-center text-2xl">
            <a href="#">
              {" "}
              <button
                onClick={() => {
                  navigate("/signup");
                }}
              >
                {" "}
                Sign Up
              </button>
            </a>
          </div>
        </form>
        <ToastContainer />
      </section>
    </>
  );
};

export default SignIn;
