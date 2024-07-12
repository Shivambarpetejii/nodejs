const express = require('express');
const dbConection = require('./mongodb');
const { Long } = require('mongodb');

const app = express();
app.use(express.json());

app.get('/', async(req,resp)=>{

    let data = await dbConection();
    data = await data.find().toArray();
    // console.log(data);
    resp.send(data);

})
app.post('/',async(req, resp)=>{
    
    let data = await dbConection();
    let result = await data.insertOne(req.body);
    
    
    resp.send(result);
})

app.put('/',async (req,resp)=>{

   const data = await dbConection();
   let result = data.updateOne(
    {name:'book2'},{$set:req.body}
   )
    resp.send(req.body);

})

app.listen(5500);
