import "./userhome.css";
import axios from "../../../utils/axios";
import { useState, useEffect } from "react";
import Navbar from "../../../components/Navbar";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [department, setDepartment] = useState([]);
  const getDoctorDepartments = async () => {
    const response = await axios.get("/department");
    setDepartment(response.data);
  };
  useEffect(() => {
    getDoctorDepartments();
  }, []);

  const onCardClick = (id) => {
    navigate(`/user/doctor/${id}`);
  };
  console.log(department);
  return (
    <div className="home">
      <Navbar />
      <h1 className="heading-user">User home page</h1>
      <div className="departments">
        {department.map((item) => {
          return (
            <div
              className="department-card"
              onClick={() => onCardClick(item._id)}
            >
              <p>{item.name}</p>
              <img src={item.image} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
