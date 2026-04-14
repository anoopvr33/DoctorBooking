// import { getRole } from "../../../utils";
import "./home.css";
import axios from "../../../utils/axios";
import { getId } from "../../../utils";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/Navbar";

const Homedoc = () => {
  // const token = localStorage.getItem("token"); //for get token from browser for route security
  // getRole();
  const navigate = useNavigate();

  const [appointments, setAppointment] = useState([]);
  const getAppointment = async () => {
    const response = await axios.get(
      `http://localhost:4000/appointment/doctor/${getId()}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    setAppointment(response.data);
    console.log(response);
  };
  useEffect(() => {
    getAppointment();
  }, []);

  const onAppointmentClick = (id) => {
    navigate(`/doctor/appointment/${id}`);
  };

  return (
    <div className="doctor-home">
      <Navbar />
      <div className="container"></div>
      <h1>Doctor home</h1>
      <div className="appointment-container">
        {appointments.map((item) => {
          return (
            <div
              className="appointment"
              onClick={() => onAppointmentClick(item._id)}
            >
              <p>USER:{item.user.name}</p>
              <p>USER:{item.slot.startTime}</p>
            </div>
          );
        })}
        {/* <h1>{token}</h1> */}
      </div>
    </div>
  );
};

export default Homedoc;
