const http=require("http")
server=http.createServer((req,resp)=>{

    Response.end("HTTP")
})
.listen(5000,(err)=>{
if(err) throw err
console.log("Server running on HTTP")
})