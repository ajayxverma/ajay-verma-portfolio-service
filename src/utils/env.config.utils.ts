import dotenv from 'dotenv';

dotenv.config();

export const envConfig = {
  port: process.env.PORT || 3000,
  mailUser: process.env.MAIL_USER,
  mailPass: process.env.MAIL_PASS,
};
