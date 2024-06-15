//import modules
let express = require('express')
let bodyparser = require('body-parser')
let cors = require("cors")
//create rest object
let app = express()
app.use(cors)
//set JSON as MIME type
app.use(bodyparser.json())
client encoding form data to jsonapp.use(bodyparser.urlencoded({ extended: false }))
//enable CORS -> Cross Origine Resource Sharing -> communication among various ports
app.use(cors())
//import login module
let login = require('./login/login')
let fetch = require("./fetch/fetch")
let insert = require("./Insert/insert")
let update = require("./update/update")

let remove = require("./delete/delete")

//use login module
app.use("/login", login)
app.use("/fetch", fetch)
app.use("/insert", insert)
app.use("/update", update)
app.use("/delete", remove)
//assign port no
app.listen(8080)
console.log('Server listening port no 8080')
