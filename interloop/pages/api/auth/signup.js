import { MongoClient } from 'mongodb';
import Users from '@/model/Schema';
import { hash } from 'bcryptjs';

export default async function handler(req, res) {
  const client = await MongoClient.connect(
    'mongodb+srv://TrentVarnes:interloop@cluster0.fl5nx35.mongodb.net/?retryWrites=true&w=majority'
  );
  const users = client.db().collection('users');

  if (req.method === 'POST') {
    if (!req.body)
      return res.status(404).json({ error: "Don't have the  form data" });
    const { username, email, password } = req.body;

    //check for duplicate users
    const checkexisting = await users.findOne({ email });
    if (checkexisting)
      return res.status(422).json({ message: 'User already exists' });
    else {
      // hash password
      Users.create(
        { username, email, password: await hash(password, 12) },
        function (err, data) {
          if (err) return res.status(404).json({ err });
          res.status(201).json({ status: true, user: data });
        }
      );
    }
  } else {
    res.status(500).json({ message: 'HTTP method not valid use POST' });
  }
}
