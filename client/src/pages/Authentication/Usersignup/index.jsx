import "./usersignup.css";
import Button from "../../../components/button";
import FormItem from "../../../components/Formitems";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Usersign = () => {
  const navigate = useNavigate();
  const [cred, setCred] = useState({
    confirmpassword: "",
    username: "",
    password: "",
  });

  const onFileUpload = async (e) => {
    console.log(e.target.files[0]);
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    const response = await axios.post(
      "http://localhost:4000/upload/image",
      formData
    );
    setCred({ ...cred, image: response.data.url });
  };

  const onchange = (e) => {
    const { name, value } = e.target;
    setCred({ ...cred, [name]: value });
  };
  const onsign = async () => {
    const response = await axios.post(
      "http://localhost:4000/user/signup",
      cred
    );
    localStorage.setItem("token", response.data.token); //to set time for login in browser
    console.log(response); //inspect console
    navigate("/user/login"); //to move nxt page
  };

  return (
    <div className="user-sign">
      <div className="sign-form">
        <h1>User</h1>
        <FormItem name="name" label="Name" onChange={onchange} />
        <FormItem
          type="file"
          name="image"
          label="Image"
          onChange={onFileUpload}
        />
        <FormItem name="username" label="Username" onChange={onchange} />
        <FormItem
          name="password"
          label="Password"
          type="password"
          onChange={onchange}
        />
        <FormItem
          name="confirm password"
          label="confirm Password"
          type="password"
          onChange={onchange}
        />
        <Button Onclick={onsign} className="sign-btn">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Usersign;
