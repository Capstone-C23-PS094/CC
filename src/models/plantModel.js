import dbPool from "../config/connection.js"


// GET DATA
const getPlantModel = () => {
    const SQLQuery = "SELECT * FROM plant"

    return dbPool.execute(SQLQuery)
}

// GET DATA BY ID
const getPlantModelById = (plant_id) => {
    const SQLQuery = "SELECT * From plant WHERE plant_id=?";
    const values = [plant_id];

    return dbPool.execute(SQLQuery, values)
}

// POST DATA
const postPlantModel = (body, plant_id) => { 
    const SQLQuery = "INSERT INTO plant (plant_id, name, `desc`) VALUES (?, ?, ?)";
    const values = [plant_id, body.name, body.desc]; 

    console.log(SQLQuery)
    return dbPool.execute(SQLQuery, values)
}

const updatePlantModel = (body, plant_id) => { 
    const SQLQuery = "UPDATE plant SET name=?, `desc`=? WHERE plant_id=?"
    const values = [plant_id, body.name, body.desc]; 

    console.log(SQLQuery)
    return dbPool.execute(SQLQuery, values)
}

const deletePlantModel = (plant_id) => {
    const SQLQuery = "DELETE FROM plant_id=?"
    const values = [plant_id]

    return dbPool.execute(SQLQuery, values)
}

export {
    getPlantModel,
    getPlantModelById,
    postPlantModel,
    updatePlantModel,
    deletePlantModel
}