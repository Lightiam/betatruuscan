const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('working');
    console.log("working");
});

app.listen(process.env.PORT||3000,()=>{console.log("hua chalu hua");});