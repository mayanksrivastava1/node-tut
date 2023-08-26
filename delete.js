const dbConnect = require('./mongodb')

const deleteData = async ()=>{
    let data = await dbConnect();

    let result = await data.deleteOne(
        { name:'max pro 5'}
    )
    if(result.acknowledged){
        console.log('data is deleted')
    }
    
}
deleteData()