import "./appodetail.css";
import Navbar from "../../../components/Navbar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../../../utils/axios";
import FormItem from "../../../components/Formitems";
import { Select } from "antd";
import Button from "../../../components/button";
import { useNavigate } from "react-router-dom";

const AppointmentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [appointment, setAppointment] = useState({});
  const [pharmacy, setPharmacy] = useState([]);
  const [prescription, setPrescription] = useState({
    message: "",
    medication: [],
  });

  const getAppointment = async () => {
    const response = await axios.get(`/appointment/appointment/${id}`);
    // console.log(response);
    setAppointment(response.data);
  };

  const getMedicines = async () => {
    const response = await axios.get(`/pharmacy`);

    const medicineData = response.data.map((item) => {
      return { label: item.name, value: item._id };
    });
    // console.log(response);
    console.log(medicineData);
    // setPharmacy(response.data);
    setPharmacy(medicineData);
  };

  useEffect(() => {
    getAppointment();
    getMedicines();
  }, []);

  const onMessageChange = (e) => {
    setPrescription({ ...prescription, message: e.target.value });
  };
  const onMedicationChange = (e) => {
    setPrescription({ ...prescription, medication: e });

    // console.log(e);
  };

  const addPrescription = async () => {
    const data = {
      ...prescription,
      doctor: appointment.doctor._id,
      user: appointment.user._id,
      appointment: appointment._id,
    };
    // console.log(data);
    const response = await axios.post("/prescripton/doctor", data);
    navigate("/doctor/home");
    console.log(response);
  };
  console.log(prescription);

  return (
    <div className="appointmentDetails">
      <Navbar />
      <div className="details-container">
        <div className="patient">
          {/* appointment.user this is for useeffect work */}
          <h1>{appointment.user && appointment.user.name}</h1>
          <p>{appointment.user && appointment.user.username}</p>
          <img src={appointment.user.image} alt="" />
        </div>
        <div className="prescription">
          <div className="prescription-form">
            <h2>Add prescription</h2>
            <FormItem
              label="Message"
              element="textarea"
              onChange={onMessageChange}
            />
            <label>Add medicine</label>
            {/* //pasted from antd site  */}
            <Select
              onChange={onMedicationChange}
              mode="multiple"
              style={{ width: "100%" }}
              placeholder="please select"
              options={pharmacy}
            />
            {/* ///////// */}
            <div className="add-prescription">
              <Button Onclick={addPrescription}>Add</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetails;
