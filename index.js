const express= require('express');
const app =express();
const port=process.env.PORT||3000;


app.get('/mm',(req,res)=>{
    res.send('cccccc')
})

app.listen(port,()=>console.log('server is running') );