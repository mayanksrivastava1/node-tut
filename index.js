const express = require('express')
const path = require('path')

const app = express()
const publicPath = path.join(__dirname,'public')

// app.use(express.static(publicPath))

app.set('view engine','ejs');

app.get('',(req,res)=>{
    res.sendFile(`${publicPath}/Home.html`)
})

// Template engine
app.get('/profile',(req,res)=>{
    const user={
        name:'mayank',
        room:'003',
        skills:['php','js', 'c++']
    }
    res.render('profile',{user})
})

//
app.get('*',(req,res)=>{
    res.sendFile(`${publicPath}/Erroe404.html`)
})

app.listen(5000)

