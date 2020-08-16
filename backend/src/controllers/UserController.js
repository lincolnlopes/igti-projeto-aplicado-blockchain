import User from '../models/User';

class UserController {
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (error) {
      return res.status(400).json({ erros: error.errors.map((err) => err.message) });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (!user) return res.status(400).json({ message: 'User not found!' });
      return res.json(user);
    } catch (error) {
      return res.status(400).json({ erros: error.errors.map((err) => err.message) });
    }
  }

  async store(req, res) {
    try {
      const newUser = await User.create(req.body);
      return res.json(newUser);
    } catch (e) {
      return res.status(400).json({ erros: e.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ message: 'Id parameter was not informed!' });
      const user = await User.findByPk(id);
      if (!user) return res.status(400).json({ message: 'User not found!' });
      await user.destroy();
      return res.json(user);
    } catch (error) {
      return res.status(400).json({ erros: error.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ message: 'Id parameter was not informed!' });
      const user = await User.findByPk(id);
      if (!user) return res.status(400).json({ message: 'User not found!' });
      const newUser = await user.update(req.body);
      return res.json(newUser);
    } catch (error) {
      return res.status(400).json({ erros: error.errors.map((err) => err.message) });
    }
  }
}
export default new UserController();
