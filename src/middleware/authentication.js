import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { logoutCheck } from '../models/authModel.js';

dotenv.config();

const auth = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
      return res.status(401).json({ message: 'Harap autentikasi terlebih dahulu' });
    }

    const token = authHeader.split(' ')[1];
    const [check] = await logoutCheck(token);

    if (check && check.length > 0) {
      return res.status(400).json({
        code: 400,
        status: 'BAD REQUEST',
        message: 'Token Anda telah kedaluwarsa. Silakan coba lagi',
        data: null
      });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.email = decoded.email;
    next();
  } catch (err) {
    console.error('Kesalahan verifikasi token:', err);
    return res.status(403).json({ message: 'Token tidak valid atau kedaluwarsa' });
  }
};

export default auth;
