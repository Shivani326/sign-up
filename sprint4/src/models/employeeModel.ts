import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: [true, "Please provide the company name"],
  },
  email: {
    type: String,
    required: [true, "Please provide an Email Id!"],
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    required: true,
  },
  profile_image: {
    type: String, //imageURL
  },
  points: {
    type: Number,
  },
  bio: {
    type: String,
  },
  interests: {
    type: String,
  },
  fitness_information: {
    type: String,
  },
  selectedChallenges: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Challenge" },
  ],
  isVerified: {
    type: Boolean,
    default: false,
  },
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const Employee =
  mongoose.models.employees || mongoose.model("employees", employeeSchema);

export default Employee;
