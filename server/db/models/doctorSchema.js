import { Schema, model } from "mongoose";

const doctorSchema = Schema(
  {
    department: {
      type: Schema.Types.ObjectId,
      ref: "Department",
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,

      // select: false, //for not to show password in response
    },
    specialization: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const Doctor = model("Doctor", doctorSchema);

export default Doctor;
