import { useState } from "react";
import axios from "axios";
import './Login.css'
import {  useNavigate } from "react-router-dom";
import {validate} from 'react-email-validator'
 import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  import signup from '../assets/images/signup.png'

const SignUp = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
      email: "",
      username:"",
      password: "",
      confirmPassword: "",
      phone_number: "",
    
  });

  const validateNameString = (str) => {
  if (str == null || str === '') {
    return false;
  }
      return true;
};

  const { email ,username ,password, confirmPassword , phone_number } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate(email)) {
      toast("Email is not valid");
      return 
    } 
    if (password.length <= 5) {
      toast("password must be of length greater than 5")
      return 
    }
    if (!validateNameString(phone_number)) {
      toast("name must only contain any special character or letter")
      return;
    }
    if (password !== confirmPassword) {
      toast("Passwords do not match");
      return;
    }
      const data = {
        "email" : email,
          "user_name": username,
    
    "password":password,
    "phone_number":phone_number,
   
    }
    

    try {
    const response = await axios.post("https://server-bill-optimizer.vercel.app/auth/register", data);
      console.log(response.data); // handle successful sign-up response here
      navigate('/login')
    } catch (error) {
      toast(error)
    console.log(error.response.data); // handle sign-up error response here
  }
  };

  return (
          <>
    

<section className="text-xs pt-4 pb-4" style={{
        backgroundImage: `url(${signup})`
      }} >
	
	<form onSubmit={handleSubmit} className="login">
		<h2>Sign Up</h2>
		<div className="inputBox ">
			<input type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
          required/>
                  </div>
        <div className="inputBox ">
		<input type="text"
          name="username"
          value={username}
          onChange={handleChange}
          placeholder="UserName"
          required/>
		</div>
		<div className="inputBox">
			<input type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
          required/>
        </div>
        <div className="inputBox">
		<input type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          placeholder="ConfirmPassword"
          required/>
                  </div>
                  <div className="inputBox">
		<input type="text"
          name="phone_number"
          value={phone_number}
          onChange={handleChange}
          placeholder="Phone Number"
          required/>
		</div>
		<div className="inputBox justify-center bg-white text-center h-7">
			<button type="submit">Create</button>
		</div>
		<div className="text-center text-2xl">
			<a  href="#"> <button onClick={()=> {navigate('/login')}}> Sign In</button></a>
		</div>
	</form>
	<ToastContainer />
</section>

                </>
  );
};

export default SignUp;