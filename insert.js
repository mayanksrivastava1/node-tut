const dbConnect = require('./mongodb')

const insert = async ()=>{

    const db = await dbConnect();
    const result = await db.insertOne(
        {
            name:'note 5',
            brand: 'vivo',
            price: '50k',
            category: 'mobile'
        }
    );

    if(result.acknowledged){
        console.log('Data is Inserted')
    }
}

insert()