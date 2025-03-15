"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactMeMail = void 0;
const contact_service_1 = require("../service/contact.service");
const contactMeMail = async (req, res) => {
    const { name, email, message } = req.body;
    console.log('name', name, 'sender', email, 'message', message);
    try {
        if (!name || !email || !message) {
            return res.status(400).json({
                message: 'bad request',
            });
        }
        await (0, contact_service_1.sendMailReseaver)({ name, sender: email, message });
        await (0, contact_service_1.sendMailSender)({ name, sender: email, message });
        return res.json({
            success: true,
            message: 'Email sent successfully',
        });
    }
    catch (error) {
        console.log(error);
        return res.json({ success: false, message: 'Error sending email' });
    }
};
exports.contactMeMail = contactMeMail;
//# sourceMappingURL=contact.controler.js.map