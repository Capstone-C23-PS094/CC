import express from 'express'
import { storeValidate } from '../validation/storeSchema.js'
import { validate } from '../middleware/validate.js'
import auth from '../middleware/authentication.js'

import {
    getStore,
    postStore,
    getStoreById,
    updateStore,
    deleteStore
} from '../controller/storeController.js'

const router = express.Router()

router.get('/stores', auth, getStore)

router.get('/store/:storeId', auth, getStoreById)

router.post('store/:store_id', auth, validate(storeValidate), postStore)

router.put('store/:store_id', auth, validate(storeValidate), updateStore)

router.delete('store/:store_id', auth, validate(storeValidate), deleteStore)



export default router;