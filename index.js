const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    console.log("working");
});

app.listen(porcess.env.PORT||3000,()=>{console.log("hua chalu hua");});