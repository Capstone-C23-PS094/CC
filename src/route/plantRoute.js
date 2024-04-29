import express from 'express'
import { plantValidate } from '../validation/plantSchema.js'
import { validate } from '../middleware/validate.js'
import auth from '../middleware/authentication.js'


import {
    getPlant,
    postPlant,
    getPlantById,
    updatePlant,
    deletePlant
} from '../controller/plantController.js'

const router = express.Router()


// GET plant
router.get('/plants', auth, getPlant)

// GET plant BY ID
router.get('/plant/:plant_id', auth, getPlantById)

// POST plant
router.post('/plant', auth, validate(plantValidate), postPlant)

//UPDATE plant
router.put('/plant/:plant_id', auth, validate(plantValidate), updatePlant)

//DELETE plant
router.delete('/plant/: plant_id', auth,validate(plantValidate), deletePlant)


export default router;