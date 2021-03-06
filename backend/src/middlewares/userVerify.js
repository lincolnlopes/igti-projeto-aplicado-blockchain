import jwt from "jsonwebtoken";

export default (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ errors: ["User not authenticad!"] });
  }

  const [, token] = authorization.split(" ");
  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, fullname, email } = dados;
    req.userId = id;
    req.userFullname = fullname;
    req.userEmail = email;
    return next();
  } catch (error) {
    return res.status(401).json({ errors: ["Invalid or expired token!"] });
  }
};
