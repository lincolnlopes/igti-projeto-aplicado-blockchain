import Issue from '../models/Issue';

class IssueController {
  async index(req, res) {
    try {
      const issues = await Issue.findAll();
      return res.json(issues);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const issue = await Issue.findByPk(id);
      if (!issue) return res.status(400).json({ message: 'Meeting not found!' });
      return res.json(issue);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  async store(req, res) {
    try {
      const newIssue = await Issue.create(req.body);
      return res.json(newIssue);
    } catch (e) {
      return res.status(400).json({ e });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ message: 'Id parameter was not informed!' });
      const issue = await Issue.findByPk(id);
      if (!issue) return res.status(400).json({ message: 'Issue not found!' });
      await issue.destroy();
      return res.json(issue);
    } catch (error) {
      return res.status(400).json({ erros: error.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ message: 'Id parameter was not informed!' });
      const issue = await Issue.findByPk(id);
      if (!issue) return res.status(400).json({ message: 'Issue not found!' });
      const newIssue = await issue.update(req.body);
      return res.json(newIssue);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
}
export default new IssueController();
