const jwt= require("jsonwebtoken")
let user={email:"nagaraj@dilabs.in",password:"12345"}
let payload={id:user.email};
let secretkey="HEDFSOFA";
let token=jwt.sign(payload,secretkey,{expiresIn:60*60});
let new_payload=jwt.verify(token,secretkey)
console.log(token);
console.log(new_payload);
