import dbPool from '../config/connection.js';

//cek email
const checkedEmailRegistered = async(email) => {
  const SQLQuery = 'SELECT * FROM user WHERE email = ?';
  const  [rows] = await dbPool.execute(SQLQuery, [email]);

  return rows.length > 0 ;
}

//register
const registrationAuthModel =  (body, user_id, dates,  hashedPassword) => {
  const SQLQuery = 'INSERT INTO user (user_id, name, email, password, created_at, updated_at) VALUES (?,?,?,?,?,?)';
  const values = [user_id, body.name, body.email,hashedPassword, dates,dates];

  return dbPool.execute(SQLQuery, values)
}

//login
const loginAuthModel = (body) => {
  const SQLQuery = 'SELECT * FROM user WHERE email=?'
  const values = [body.email]

  return dbPool.execute(SQLQuery,values)
}

//logout
const logoutAuthModel =(token) => {
  const SQLQuery = 'INSERT INTO blacklist (token) VALUES (?)'
  const values = [token]

  return dbPool.execute(SQLQuery, values)
}

//check token
const logoutCheck =  (token) => {
  const SQLQuery = 'SELECT * FROM blacklist WHERE token = ?'
  const values = [token]

  return dbPool.execute(SQLQuery, values)
}

export {
  checkedEmailRegistered,
  registrationAuthModel,
  loginAuthModel,
  logoutAuthModel,
  logoutCheck
}