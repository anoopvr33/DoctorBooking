import express from "express";
import Appointment from "../../db/models/appointmentSchema.js";
import Slot from "../../db/models/slotSchema.js";
import checkToken from "../../middleware/checktoken.js";
import nodemailer from "nodemailer";
// import html from '../../views'

const router = express.Router();

//LIST APPOINTMNET BY DOCTOR
//.............................checkToken(['DOCTOR])
router.get("/appointment/:id", checkToken(["DOCTOR"]), async (req, res) => {
  const { id } = req.params;
  const appointments = await Appointment.findById(id).populate([
    "doctor",
    "user",
    "slot",
  ]);
  res.status(200).json(appointments);
});

//LIST APPOINTMNET BY DOCTOR
//.............................checkToken(['DOCTOR])
router.get("/doctor/:id", checkToken(["DOCTOR"]), async (req, res) => {
  const { id } = req.params;
  const appointments = await Appointment.find({ doctor: id }).populate([
    "doctor",
    "user",
    "slot",
  ]);
  res.status(200).json(appointments);
});

//LIST APPOINTMENT BY USER
router.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  const appointments = await Appointment.find({ user: id }).populate([
    "doctor",
    "user",
    "slot",
  ]);
  res.status(200).json(appointments);
});
//LIST APPOINTMENT BY ID
router.get("/appointment/user/:id", async (req, res) => {
  const { id } = req.params;
  const appointments = await Appointment.findById(id).populate([
    "doctor",
    "user",
    "slot",
  ]);
  res.status(200).json(appointments);
});
///pdf
//appointment id

router.get("/pdf/:id", async (req, res) => {
  const { id } = req.params;
  const appointment = await Appointment.findById(id).populate([
    "doctor",
    "user",
    "slot",
  ]);
  res.render("pdf.ejs", { appointment: appointment });
});

//TAKE APPOINTMENT BY USER
router.post("/", async (req, res) => {
  const body = { ...req.body };
  const slotId = body.slot;
  await Appointment.create(body);
  await Slot.findByIdAndUpdate(slotId, { availability: false });
  res.status(200).json({ message: "Appointment booked" });

  ///..FOR MAIL SENDING
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "stackprogram33@gmail.com",
      pass: "ycim yghb cvcf tliw",
    },
  });
  let mailOptions = {
    from: "stackprogram33@gmail.com",
    to: "anoopvr2002@gmail.com",
    subject: "Appointment confirm mail",
    text: "ur appointment has been confirmed",
  };
  transporter.sendMail(mailOptions);
  //////...........
  res.status(200).json({ message: "Appointment booked" });
});

//Status

router.post("/status/:id", async (req, res) => {
  const { id } = req.params;
  const body = { ...req.body };
  const slotId = body.slot;
  await Appointment.findByIdAndUpdate(id, body);
  res.status(200).json({ message: "Appointment booked" });
});

export default router;
