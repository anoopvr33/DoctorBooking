//for path customise..simplify declaration
import axios from "axios";

const customAxios = axios.create({
  baseUrl: "http://localhost:4000/",
  //for simplify..not applied by me,,later
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default customAxios;
