import jwt from 'jsonwebtoken';
import os from 'os';

os.hostname();
import { v4 as uuidv4 } from 'uuid';
// import Fingerprint from 'express-fingerprint';

export default (req, res, next) => {
  const { authorization } = req.headers;
  // const ua = req.headers['user-agent'];
  // eslint-disable-next-line no-undef

  const apiToken = req.connection;
  const apiToken2 = req.headers['x-forwarded-for'];

  console.log(apiToken);
  console.log(apiToken2);
  // const finger = Fingerprint({ parameters: [Fingerprint.] });
  if (!authorization) {
    return res.status(401).json({ errors: ['Login required!'] });
  }

  const [, token] = authorization.split(' ');
  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    // const uuid = uuidv4();
    const { id, email } = dados;
    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (error) {
    return res.status(401).json({ errors: ['Invalid or expired token!'] });
  }
};
