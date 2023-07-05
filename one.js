const Jwt= require("jsonwebtoken")
let user={email:"nagaraj@dilabs.in",password:"12345"}
let payload={id:user.email}
let secretkey="HEDFSOFA";
let token=Jwt.sign(payload,secretkey,{expiresIn:60*60});
console.log(token)