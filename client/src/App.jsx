import "./App.css";
import { Routes, Route } from "react-router-dom";
import Doclogin from "./pages/Authentication/Doclogin";
import Docsignup from "./pages/Authentication/Docsignup";
import Homedoc from "./pages/Doctor/Home";
import Userlogin from "./pages/Authentication/UserLogin";
import Usersign from "./pages/Authentication/Usersignup";
import ProtectedRoute from "./components/ProtectedRoute";
import AppointmentDetails from "./pages/Doctor/AppointmentDetails";
import DoctorProfilePage from "./pages/User/DocProfilepage";
import UserHome from "./pages/User/Home";
import DoctorList from "./pages/User/DoctorList";
import Homeeee from "./pages/Home";
import MyAppointment from "./pages/User/MyAppointment";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Homeeee />} />
        <Route path="/doctor/login" element={<Doclogin />}></Route>
        <Route path="/doctor/signup" element={<Docsignup />}></Route>
        <Route
          path="/doctor/appointment/:id"
          element={<AppointmentDetails />}
        />
        {/* / / 
        //
        /// */}
        <Route element={<ProtectedRoute roles={["DOCTOR"]} />}>
          <Route path="/doctor/home" element={<Homedoc />} />
          {/* <Route
            path="/doctor/appointment/:id"
            element={<AppointmentDetails />}
          /> */}
        </Route>
        <Route element={<ProtectedRoute roles={["USER"]} />}>
          <Route path="/user/home" element={<UserHome />} />
          <Route path="/user/doctor/:id" element={<DoctorList />} />
          <Route
            path="/user/doctor-profile/:id"
            element={<DoctorProfilePage />}
          />
        </Route>
        {/* / / jk;
        /
        / */}
        <Route path="/user/login" element={<Userlogin />} />
        <Route path="/user/signup" element={<Usersign />} />
        <Route path="/user/myappointment" element={MyAppointment} />
      </Routes>
    </>
  );
};

export default App;
