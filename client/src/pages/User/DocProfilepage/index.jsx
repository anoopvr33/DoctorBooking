import "./docprofile.css";
import Navbar from "../../../components/Navbar";
import { useParams } from "react-router-dom";
import axios from "../../../utils/axios";
import { useState, useEffect } from "react";
import { getId } from "../../../utils";

const DoctorProfilePage = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState({});
  const [slot, setSlot] = useState([]);

  const getDoctorById = async () => {
    const response = await axios.get(`/doctor/profile/${id}`);
    setDoctor(response.data);
  };

  const getSlotByDoc = async () => {
    const response = await axios.get(`/slot/doctor/${id}`);
    setSlot(response.data);
  };

  useEffect(() => {
    getDoctorById();
    getSlotByDoc();
  }, []);

  const book = async (slotId) => {
    const data = { user: getId(), slot: slotId, doctor: id };
    await axios.post("/appointment", data);
    getSlotByDoc();
    // console.log("workinng");
  };

  console.log(doctor);

  return (
    <div className="doctor-profile">
      <Navbar />
      <h1>Take Appointments</h1>
      <div className="container">
        <div className="doctor-details">
          <div className="doctor">
            <img src={doctor.image} alt="" />
            <h2>{doctor.name}</h2>
            <p>{doctor.specialization}</p>
          </div>
          <div className="take-appointment">
            <div className="slots">
              {slot.map((item) => {
                return (
                  <div
                    className="slot-card"
                    style={{ backgroundColor: availability ? "" : "green" }}
                  >
                    <p>{`${item.startTime}-${item.endTime}`}</p>
                    <button
                      style={{
                        cursor: availability ? "pointer" : "not-allowed",
                      }}
                      onClick={availability ? () => book(item._id) : () => {}}
                    >
                      {item.availability ? `Take Appointment` : `Booked`}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DoctorProfilePage;
