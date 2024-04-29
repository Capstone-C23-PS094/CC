import dbPool from "../config/connection.js"

// GET DATA
const getDiseaseModel = () => {
    const SQLQuery = "SELECT * FROM disease"

    return dbPool.execute(SQLQuery)
}

// GET DATA BY ID
const getDiseaseModelById = (disease_id) => {
    const SQLQuery = "SELECT * FROM disease WHERE disease_id=?";
    const values = [disease_id];

    return dbPool.execute(SQLQuery, values)
}

// POST DATA
const postDiseaseModel = (body, disease_id) => {
    const SQLQuery = "INSERT INTO disease (disease_id, name, `desc`, solution) VALUES (?, ?, ?, ?)";
    const values = [disease_id, body.name, body.desc, body.solution];

console.log(SQLQuery)
    return dbPool.execute(SQLQuery, values)
}

// UPDATE DATA
const updateDataDiseaseModel = (disease_id) => {
    const SQLQuery = 'UPDATE disease SET name=?, `desc`=?, solution=? WHERE disease_id=?'
    const values = [body.name, body.desc, body.solution, disease_id]

    return dbPool.execute(SQLQuery, values)
}

// DELETE DATA
const deleteDataDiseaseModel = (disease_id) => {
    const SQLQuery = 'DELETE FROM disease_id=?'
    const values = [disease_id]

    return dbPool.execute(SQLQuery, values)
}


export {
    getDiseaseModel,
    getDiseaseModelById,
    postDiseaseModel,
    updateDataDiseaseModel,
    deleteDataDiseaseModel
}