import { Request, Response } from 'express';
import { sendMailReseaver, sendMailSender } from '../service/contact.service';

export const contactMeMail = async (req: Request, res: Response) => {
  const { name, email, message } = req.body;
  console.log('name', name, 'sender', email, 'message', message);
  try {
    if (!name || !email || !message) {
      return res.status(400).json({
        message: 'bad request',
      });
    }
    await sendMailReseaver({ name, sender: email, message });
    await sendMailSender({ name, sender: email, message });
    return res.json({
      success: true,
      message: 'Email sent successfully',
    });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: 'Error sending email' });
  }
};
