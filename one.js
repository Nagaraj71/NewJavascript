const http=require('http')
const server=http.createServer((req,res)=>{
        Response.end("HTTP")
})
server.listen(2000,(err)=>{
        if(err) throw err
console.log("Server Running on Http")
})