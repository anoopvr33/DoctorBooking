import express from "express";
// import checkToken from "../../middleware/checktoken.js";
import Department from "../../db/models/departmentSchema.js";
import Doctor from "../../db/models/doctorSchema.js";
import checkToken from "../../middleware/checktoken.js";

const router = express.Router();

//LIST ALL DEPARTMENTS
router.get("/", async (req, res) => {
  const departments = await Department.find();
  res.status(200).json(departments);
});

//LIST DOCTOR BY DEPARTMENT id
//........................checkToken(['USER])
router.get("/doctor/:id", checkToken(["USER"]), async (req, res) => {
  const { id } = req.params;
  const doctors = await Doctor.find({ department: id });
  res.status(200).json(doctors);
});

// router.get("/doctor/:id", async (req, res) => {
//   const { id } = req.params;
//   const doctors = await Doctor.find({ department: id });
//   res.status(200).json(doctors);
// });

//ADD DEPARTMENT
//........................checkToken(['DOCTOR])
router.post("/", async (req, res) => {
  const body = { ...req.body };
  await Department.create(body);
  res.status(200).json({ message: "Department succesfully added" });
});

export default router;
