// pages/api/enrollments.js
import { connectDB } from './db';
import Enrollment from './enrollmentModel';

connectDB();

export default async (req, res) => {
  if (req.method === 'POST') {
    const { userID, companyName, challengeIds } = req.body;
    const enrollment = new Enrollment({ userID, companyName, challengeIds });
    try {
      await enrollment.save();
      res.status(201).json({ message: 'Enrolled successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  } else if (req.method === 'GET') {
    const { userID } = req.query;
    try {
      const enrollments = await Enrollment.find({ userID });
      res.json(enrollments);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};
