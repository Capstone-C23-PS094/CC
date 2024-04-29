import express from 'express'
import { predictionPlant } from '../controller/predictionController.js'
import upload from '../validation/uploadSchema.js'
import handleMulterError from '../middleware/multer.js'
import auth from '../middleware/authentication.js'

const router = express.Router()
// corn
router.post('/prediction/corn', auth, upload.single('file'), handleMulterError, (req, res) => {
    predictionPlant(req, res, "corn")
})
// potato
router.post('/prediction/potato', auth, upload.single('file'), handleMulterError, (req, res) => {
    predictionPlant(req, res, "potato")
})
// rise
router.post('/prediction/rise', auth, upload.single('file'), handleMulterError, (req, res) => {
    predictionPlant(req, res, "rise")
})

export default router 