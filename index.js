const express = require('express')
const app = express()
const DataRoute = require('./Routes/GetData.routes')
const UserRoute = require('./Routes/User.routes')
const ConnectToDataBase = require('./config/ConnectToDataBase');
const port = 8080
app.use(express.json())
app.use('/data', DataRoute)
app.use('/user', UserRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port,async () => {
  await ConnectToDataBase();
  console.log(`Example app listening on port ${port}`)
})