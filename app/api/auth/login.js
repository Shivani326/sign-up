// pages/api/auth/login.js
import Company from '@/models/company';
import { connectToDB } from '@/utils/db';

export async function POST(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      const company = await Company.findOne({ email });
      if (!company) {
        return res.status(404).json({ error: 'Company with this email not found' });
      }

      if (company.password !== password) {
        return res.status(401).json({ error: 'Invalid password' });
      }

      // Password is correct, handle successful login
      res.status(200).json({ message: 'Login successful', company });
    } catch (error) {
      res.status(500).json({ error: 'Unable to process login request' });
    }
  } else {
    res.status(405).end();
  }
}

export default connectToDB(POST);


