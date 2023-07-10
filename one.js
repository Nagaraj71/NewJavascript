var express= require("express")
var app=express();
app.get("./",(req,res)=>{
    resp.send("Root Request")

})
app.listen(5000,(err)=>{

    if(err) throw err;
    console.log("Server Running on the Port:5000")
})