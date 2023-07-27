
import Company from '@/models/company';
import { connectToDB } from '@/utils/db';

export async function POST(req, res) {
  if (req.method === 'POST') {
    const { name, email, password } = req.body;

    try {
      const existingCompany = await Company.findOne({ email });
      if (existingCompany) {
        return res.status(409).json({ error: 'Company with this email already exists' });
      }

      const newCompany = new Company({
        name,
        email,
        password,
      });

      await newCompany.save();

      res.status(201).json({ message: 'Company created successfully', company: newCompany });
    } catch (error) {
      res.status(500).json({ error: 'Unable to create company' });
    }
  } else {
    res.status(405).end();
  }
}

export default connectToDB(POST);

