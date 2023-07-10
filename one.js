var express=require("express")
var app=express();
app.get("./",(req,res)=>{
    response.end("Server Running")
})
app.listen(3000,(err)=>{

    if(err) throw err;
    console.log("Server Running on Express:3000")
})