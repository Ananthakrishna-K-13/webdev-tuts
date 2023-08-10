const connectToMongo = require('./db.js')
const express = require('express')
const cors = require('cors')


connectToMongo();   
let app = express()
const port = 5000
app.use(cors())
app.options('*',cors())
app.use(express.json())


app.use('/api/auth',require("./routes/auth"));
app.use('/api/notes',require("./routes/notes"));

app.listen(port, () => {
  console.log(`iNotebook app listening on port ${port}`)
})