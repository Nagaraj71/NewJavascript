const http= require("http")
const server=http.createServer((req,res)=>{
    res.end("HTTP")

})
server.listen(12000,(err)=>{
    if(err) throw err
    console.log("Server is Running on the website")
})