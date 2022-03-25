import express from 'express'
import cors from 'cors'
import db from './config/database.js'
import Router from './routes/routes.js'

const app = express()

app.use(express.json())
app.use(cors())

try{
  await db.authenticate()
  console.log('Database connection has been eshtabilished successfully!');
}catch(err){
  console.log('Unable to connect database, error : ' + err);
}

app.use(Router)
app.listen(5000, () => { console.log('Server running at http://localhost:5000'); })