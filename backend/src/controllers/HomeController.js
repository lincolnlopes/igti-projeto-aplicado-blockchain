import User from '../models/User';

class HomeController {
  index(req, res) {
    res.json({ tudoCerto: true });
  }

  async testUser(req, res) {
    const newUser = await User.create({
      fullname: 'Lincoln Lopes', email: 'lincolnlopes@msn.com', enrollment: '1', quota: 1,
    });
    res.json(newUser);
  }
}
export default new HomeController();
