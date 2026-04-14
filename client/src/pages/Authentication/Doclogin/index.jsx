import "./doclogin.css";
import Button from "../../../components/button";
import FormItem from "../../../components/Formitems";
import { useState } from "react";
import axios from "../../../utils/axios";
import { useNavigate } from "react-router-dom";

const Doclogin = () => {
  const navigate = useNavigate();

  const [cred, setCred] = useState({ username: "", password: "" });

  const onchange = (e) => {
    const { name, value } = e.target;
    setCred({ ...cred, [name]: value });
  };

  const onLogin = async () => {
    const response = await axios.post(
      "http://localhost:4000/doctor/login",
      cred
    );
    localStorage.setItem("token", response.data.token); //to set time for login in browser
    // console.log(response);  ..... //inspect console
    navigate("/doctor/home"); //to move nxt page
  };

  return (
    <div className="doctor-login">
      <div className="login-form">
        <h1>Doctor</h1>
        <FormItem name="username" label="Username" onChange={onchange} />
        <FormItem
          name="password"
          label="Password"
          type="password"
          onChange={onchange}
        />
        <Button Onclick={onLogin} className="login-btn">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Doclogin;
