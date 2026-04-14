import "./Docsignup.css";
import Button from "../../../components/button";
import FormItem from "../../../components/Formitems";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Docsignup = () => {
  const navigate = useNavigate();
  const [cred, setCred] = useState({
    username: "",
    password: "",
    confirmpassword: "",
    specialization: "",
    name: "",
    image: "",
    deparment: "",
  });

  const [departments, setDepartments] = useState([]);

  const onchange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setCred({ ...cred, [name]: value });
  };
  const onSignup = async () => {
    const response = await axios.post(
      "http://localhost:4000/doctor/signup",
      cred
    );
    navigate("/doctor/login");
    console.log(response);
  };

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

  const fetchDepartment = async () => {
    const response = await axios.get("http://localhost:4000/department");
    const departments = response.data.map((item) => {
      return { label: item.name, value: item._id };
    });
    setDepartments(departments);
    console.log(response);
  };

  useEffect(() => {
    fetchDepartment();
  }, []);

  console.log(cred);

  return (
    <div className="doctor-sign">
      <div className="sign-form">
        <h1>Doctor</h1>
        <FormItem name="name" label="Name" onChange={onchange} />
        <FormItem name="username" label="Username" onChange={onchange} />
        <FormItem
          name="specialization"
          label="Specialization"
          onChange={onchange}
        />

        <FormItem
          type="file"
          name="image"
          label="Image"
          onChange={onFileUpload}
        />

        <FormItem
          element="select"
          name="department"
          label="Department"
          onChange={onchange}
          options={departments}
        />
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
        <Button Onclick={onSignup} className="login-btn">
          Sign up
        </Button>
      </div>
    </div>
  );
};

export default Docsignup;
