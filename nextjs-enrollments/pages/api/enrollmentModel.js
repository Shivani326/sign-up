// pages/api/enrollmentModel.js
import mongoose from 'mongoose';

const enrollmentSchema = new mongoose.Schema({
  userID: { type: String, required: true },
  companyName: { type: String, required: true },
  challengeIds: [{ type: Number }],
});

export default mongoose.models.Enrollment || mongoose.model('Enrollment', enrollmentSchema);
