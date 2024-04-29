import { nanoid } from 'nanoid'
import {
    getStoreModel,
    getStoreModelById,
    postStoreModel,
    updateStoreModel,
    deleteStoreModel
} from '../models/storeModel.js'

//GET DATA
const getStore = async (req, res) => {
    try {
        const [data] = await getStoreModel()
        res.json({
            code: 200,
            status: 'OK',
            message: 'Berhasil mengambil data store',
            data: data.map(item => ({store_id: item.store_id, ...item}))
        })
    } catch (error) {
        res.status(500).json({
            code : 500,
            status: 'INTERNAL SERVER ERROR',
            message: error,
            data: null
        })
    }
}

const getStoreById = async(req, res) => {
    try {
        const [data] = await getStoreModelById()
        if(data.length === 0) {
            res.status(404).json({
                code : 404,
                status: 'NOT FOUND',
                message: 'Data store tidak ditemukan',
                data: null
            })
        } else{

            res.json({
                code: 200,
                status: 'OK',
                message: 'Berhasil mengambil data store',
                data: data.map(item => ({store_id: item.store_id, ...item}))
            })
        }
    } catch (error) {
        res.status(500).json({
            code : 500,
            status: 'INTERNAL SERVER ERROR',
            message: error,
            data: null
        })
    }
}

const postStore = async(req, res) => {
    const {body} = req
    const store_id = nanoid(16)

    try {
        const [data] = await postStoreModel(body, store_id)
        res.json({
            code: 200,
            status: 'OK',
            message: 'Berhasil menambahkan data store',
            data: {store_id, ...req.body}
        })
    } catch (error) {
        res.status(500).json({
            code : 500,
            status: 'INTERNAL SERVER ERROR',
            message: error,
            data: null
        })
    }
}

const updateStore = async(req, res) => {
    const {body} = req.body
    const store_id = nanoid(16)

    try {
        const [data] = await updateStoreModel(body, store_id)
        if(data.affectedRows === 0) {
            res.status(404).json({
                code: 404,
                status: 'NOT FOUND',
                message: 'Data not found',
                data: null
            })
        } else {
            res.json({
                code: 200,
                status: 'OK',
                message: 'Berhasil memperbarui data store',
                data: {store_id, ...req.body}
            })
        }
    } catch (error) {
        res.status(500).json({
            code : 500,
            status: 'INTERNAL SERVER ERROR',
            message: error,
            data: null
        })
    }
}

const deleteStore= async (req, res) => {
    const {body} = req
    const store_id = nanoid(16)

    try {
        const [data] = await deleteStoreModel(body, store_id)
        if(data.affectedRows === 0) {
            res.status(404).json({
                code: 404,
                status: 'NOT FOUND',
                message: 'Data not found',
                data: null
            })
        } else {
            res.json({
                code: 200,
                status: 'OK',
                message: 'Berhasil menghapus data store',
                data: {store_id, ...req.body}
            })
        }
    } catch (error) {
        res.status(500).json({
            code : 500,
            status: 'INTERNAL SERVER ERROR',
            message: error,
            data: null
        })
    }
}

export {
    getStore,
    getStoreById,
    postStore,
    updateStore,
    deleteStore
}