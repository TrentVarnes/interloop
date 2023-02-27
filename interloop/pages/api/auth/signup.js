import { client, db } from '../../../database/connect';
import { hash } from 'bcryptjs';
import connectMongo from '../../../database/connect';
import Users from '@/model/Schema';

export default async function handler(req, res) {
  await connectMongo();
  if (req.method === 'POST') {
    if (!req.body)
      return res.status(404).json({ error: "don't have form data" });
    const { username, email, password } = req.body;

    // Check for duplicate users
    const checkExisting = await Users.findOne({ email });
    if (checkExisting) {
      return res
        .status(422)
        .json({ status: false, message: 'User already exists' });
    } else {
      // Hash password
      await Users.create(
        { username, email, password: await hash(password, 12) },
        function (err, data) {
          if (err) return res.json({ err });
          res.status(201).json({ status: true, user: data });
        }
      );
    }
  } else {
    res.status(500).json({ message: 'Only POST requests' });
  }
}
