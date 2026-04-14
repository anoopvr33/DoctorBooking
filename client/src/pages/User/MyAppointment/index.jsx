import Navbar from "../../../components/Navbar";
import { useState, useEffect } from "react";
import axios from "../../../utils/axios";
import { getId } from "../../../utils";
import { html2pdf } from "html2pdf.js";
import "./my-appoint.css";

const MyAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const getMyAppointment = async () => {
    const response = await axios.get(`/appointment/user/${getId()}`);
    setAppointments(response.data);
  };
  useEffect(() => {
    getMyAppointment();
  }, []);

  const downloadPDF = async (id) => {
    const response = await axios.get(`/appointment/pdf/${id}`);
    var opt = {
      margin: 1,
      filename: "anoop.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().from(response.data).set(opt).save();
    console.log(response.data);
  };
  return (
    <div className="my-appointments">
      <Navbar />
      <h1 className="user-appointment">My appointment</h1>
      <div className="user-appointment-container">
        {appointments.map((item) => {
          return (
            <div className="appointment-card">
              <h2>{item.doctor && item.doctor.name}</h2>
              <p>{item.doctor && item.doctor.spezialization}</p>
              <p>
                Appointment Time:&nbsp:
                {item.slot && item.slot.startTime}
              </p>
              <p onClick={() => downloadPDF(item._id)} className="pdf-download">
                Download pdf
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyAppointment;
