import express from 'express'
import { registerValidate } from '../validation/registerSchema.js'
import { validate } from '../middleware/validate.js'
import { loginValidate } from '../validation/loginSchema.js'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import {
    registration, login, logout, refresh
} from '../controller/authController.js'
import auth from '../middleware/authentication.js'

dotenv.config()

const router = express.Router()

// ENDPOINT API
// Auth
router.post('/login', validate(loginValidate), login)

// Registration
router.post('/register', validate(registerValidate), registration)

//Logout 
router.post('/logout', auth, logout)

// refreshtoken
router.post('/refreshtoken', auth, refresh)


export default router 