const express = require('express')
const reqFilter = require('./middleware')
const app= express()

app.get('/',reqFilter,(req,res)=>{
    res.send('Welcome to Home Page')
})

app.get('/users',(req,res)=>{
    res.send('Welcome to users Page')
})

app.get('/about',(req,res)=>{
    res.send('Welcome to about Page')
})
app.listen(5000)