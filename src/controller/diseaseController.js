import e from "express"
import {
    getDiseaseModel, getDiseaseModelById,
    postDiseaseModel,
    updateDataDiseaseModel,
    deleteDataDiseaseModel
} from "../models/diseaseModel.js"
import { nanoid } from "nanoid"

// GET ALL DATA 
const getDisease = async (req, res) => {
    try {
        const [data] = await getDiseaseModel()
        res.json({
            code: 200,
            status: 'OK',
            message: 'Sukses mengambil data penyakit',
            data: data,
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            status: 'INTERNAL SERVER ERROR',
            message: error,
            data: null,
        })
    }
}

// GET DATA BY ID
const getDiseaseById = async (req, res) => {
    const { disease_id } = req.params
    try {
        const [data] = await getDiseaseModelById(disease_id)
        if (data.length === 0) {
            res.status(404).json({
                code: 404,
                status: 'NOT FOUND',
                message: 'Data penyakit tidak ditemukan',
                data: null,
            });
        } else {
            res.json({
                code: 200,
                status: 'OK',
                message: 'Berhasil mengambil data penyakit',
                data: {
                    disease_id: data[0].disease_id, 
                    ...data[0]
                },
            });
        }
    } catch (error) {
        res.status(500).json({
            code: 500,
            status: 'INTERNAL SERVER ERROR',
            message: error,
            data: null,
        })
    }
}

// POST DATA
const postDisease = async (req, res) => {
    const { body } = req
    const disease_id = nanoid(16);
    try {
        const [data] = await postDiseaseModel(body, disease_id)
        res.json({
            code: 200,
            status: "OK",
            message: 'Data penyakit berhasil ditambahkan',
            data: {
                disease_id: disease_id, 
                ...req.body
            },
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            status: 'INTERNAL SERVER ERROR',
            message: error,
            data: req.body,
        })
    }
}

// UPDATE DATA
const updateDisease = async (req, res) => {
    const { body } = req
    const disease_id = nanoid(16);
    try {
        const [data] = await updateDataDiseaseModel(body, disease_id)
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
                status: "OK",
                message: 'Data penyakit berhasil diperbarui',
                data: {
                    disease_id: disease_id, 
                    ...req.body
                },
            })
        }
       
    } catch (error) {
        res.status(500).json({
            code: 500,
            status: 'INTERNAL SERVER ERROR',
            message: error,
            data: req.body,
        })
    }
}

// DELETE DATA
const deleteDisease = async (req, res) => {
    const { body } = req
    const disease_id = nanoid(16);
    try {
        const [data] = await deleteDataDiseaseModel(body, disease_id)
        if(affectedRows === 0) {
            res.status(404).json({
                code: 404,
                status: 'NOT FOUND',
                message: 'Data not found',
                data: null
            })
        } else {
            res.json({
                code: 200,
                status: "OK",
                message: 'Data penyakit berhasil dihapus',
                data: {
                    disease_id: disease_id, 
                    ...req.body
                },
            })
        }
       
    } catch (error) {
        res.status(500).json({
            code: 500,
            status: 'INTERNAL SERVER ERROR',
            message: error,
            data: req.body,
        })
    }
}

export {
    getDisease,
    getDiseaseById,
    postDisease,
    updateDisease,
    deleteDisease
}