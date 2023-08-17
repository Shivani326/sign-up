// pages/api/db.js
import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://tapishpawar:abcd@cluster0.wh29qcp.mongodb.net/enroll';

export async function connectDB() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}
