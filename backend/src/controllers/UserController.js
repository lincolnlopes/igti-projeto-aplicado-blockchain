import User from '../models/User';

class UserController {
  index(req, res) {
    res.json({ tudoCerto: true });
  }

  async store(req, res) {
    try {
      const newUser = await User.create(req.body);
      console.log(newUser);
      res.json(newUser);
    } catch (e) {
      res.status(400).json({ errors: e.errors });
    }
  }
}
export default new UserController();
