import express from 'express'
import { diseaseValidate } from '../validation/diseaseSchema.js'
import { validate } from '../middleware/validate.js'
import auth from '../middleware/authentication.js'

// memanggil controller about
import {
    getDisease, getDiseaseById,
    postDisease, updateDisease, deleteDisease
} from '../controller/diseaseController.js'

const router = express.Router()


// GET DATA
router.get('/diseases', auth, getDisease)

// GET DATA BY ID
router.get('/disease/:disease_id', auth, getDiseaseById)

// POST DATA
router.post('/disease', auth, validate(diseaseValidate), postDisease)

//UPDATE DATA
router.put('/disease', auth, validate(diseaseValidate), updateDisease)

router.delete('/disease', auth, validate(diseaseValidate), deleteDisease)


export default router 