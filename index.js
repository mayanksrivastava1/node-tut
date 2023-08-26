const dbConnect = require('./mongodb')


dbConnect().then((res)=>{
    res.find().toArray().then((data)=>{

    })
    
})

