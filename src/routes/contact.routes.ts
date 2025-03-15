import express from 'express';
import { contactMeMail } from '../controller/contact.controler';

const contactRouter = express.Router();

const router = contactRouter.route('/v1/contact');
router.post(contactMeMail);

export default contactRouter;
