var express =require("express");
var app=express();
app.get("./",(req,resp)=>{
    resp.end("Root Request")

})
app.listen(6000,(err)=>{
    if(err) throw err;
    console.log("Server running on port:6000")

})