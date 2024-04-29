import dbPool from '../config/connection.js'

const getStoreModel = () => {
    const SQLQuery = 'SELECT * FROM store'

    return dbPool.execute(SQLQuery)
}

const getStoreModelById = (store_id) => {
    const SQLQuery = 'SELECT * FROM store WHERE store_id=?'

    const values = [store_id]

    return dbPool.execute(SQLQuery, values)
}

const postStoreModel = (body, store_id, dates) => {
    const SQLQuery = 'INSERT INTO store (store_id, name, address, contact, onlineShop, created_at, updated_at) VALUES(?,?,?,?,?,?,?)'

    const values = [store_id, body.name, body.address,body.contact, body.onlineShop, dates, dates]

    return dbPool.execute(SQLQuery, values)
}

const updateStoreModel = (body, store_id) => {
    const SQLQuery = 'UPDATE store SET name=?, address=?, contact=?, onlineShop=?, updated_at=? WHERE store_id=?'

    const values = [store_id,body.name, body.address, body.contact, body.onlineShop, dates]

    return dbPool.execute(SQLQuery, values)
}

const deleteStoreModel = (store_id) => {
    const SQLQuery = 'DELETE FROM store_id=?'
    const values = [store_id]

    return dbPool.execute(SQLQuery, values)
}


export {
    getStoreModel,
    getStoreModelById,
    postStoreModel,
    updateStoreModel,
    deleteStoreModel
}