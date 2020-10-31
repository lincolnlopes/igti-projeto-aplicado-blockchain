import jwt from "jsonwebtoken";
import User from "../models/User";

class TokenController {
  async store(req, res) {
    const { email = "", password = "" } = await req.body;
    if (!email || !password) {
      return res.status(401).json({ erros: ["Invalid credentials!"] });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ erros: ["User does not exist"] });
    }
    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({ erros: ["Invalid password!"] });
    }
    const { id, fullname } = user;
    const token = jwt.sign({ id, fullname, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
    return res.json({ token });
  }
  async show(req, res) {
    const { userId: id, userFullname: fullname, userEmail: email } = req;
    return res.json({ id, fullname, email });
  }
}
export default new TokenController();
