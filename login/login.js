//import token
let token = require('../token/token')
//import modules
const express = require('express')
let mongodb = require('mongodb')
//import url
const url = require('../url')
//create mongo client
let mcl = mongodb.MongoClient
//create router instance
let router = express.Router()
//create rest api
router.post("/", (req, res) => {
    //connect to mongodb
    let obj = req.body
    mcl.connect(url, (err, conn) => {
        if (err)
            console.log('Error in connection')
        else {
            let db = conn.db('ecommerce')
            db.collection('users').find(obj).toArray((err, array) => {
                if (err)
                    console.log('Error:- ', err)
                else {
                    if (array.length > 0) {
                        console.log('Auth Success')
                        let myToken = token(obj, new Date().toString())
                        res.json({ 'auth': 'success', token: myToken })
                    }
                    else {
                        console.log('Auth Failed')
                        res.json({ 'auth': 'falied' })
                    }
                    conn.close()
                }
            })
        }
    })
})
//export router
module.exports = router
