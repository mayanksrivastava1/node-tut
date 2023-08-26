const dbConnect = require('./mongodb')

const updateData = async ()=>{
    let data = await dbConnect();

    let result = await data.updateOne(
        { name:'max pro 5'}, {$set:{name:'max pro 8'}}
    )
    if(result.acknowledged){
        console.log('Data is Updated')
    }
    
}
updateData()