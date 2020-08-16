import Meeting from '../models/Meeting';

class MeetingController {
  async index(req, res) {
    try {
      const meetings = await Meeting.findAll();
      return res.json(meetings);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const meeting = await Meeting.findByPk(id);
      if (!meeting) return res.status(400).json({ message: 'Meeting not found!' });
      return res.json(meeting);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  async store(req, res) {
    try {
      const newMeeting = await Meeting.create(req.body);
      return res.json(newMeeting);
    } catch (e) {
      return res.status(400).json({ e });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ message: 'Id parameter was not informed!' });
      const meeting = await Meeting.findByPk(id);
      if (!meeting) return res.status(400).json({ message: 'Meeting not found!' });
      await meeting.destroy();
      return res.json(meeting);
    } catch (error) {
      return res.status(400).json({ erros: error.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ message: 'Id parameter was not informed!' });
      const meeting = await Meeting.findByPk(id);
      if (!meeting) return res.status(400).json({ message: 'Meeting not found!' });
      const newMeeting = await meeting.update(req.body);
      return res.json(newMeeting);
    } catch (error) {
      return res.status(400).json({ erros: error.errors.map((err) => err.message) });
    }
  }
}
export default new MeetingController();
