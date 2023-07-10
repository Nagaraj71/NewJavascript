const http=require('http')
const server=http.createServer((req,res)=>{
    response.end("http")
})
server.listen(3000,(err)=>{
    if(err) throw err;
    console.log("Server is running on the online")
})

