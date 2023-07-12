let Jwt=require("jsonwebtoken");
let user={email:"nagaraj@dilabs.in",password:"123456"};
let payload={id:user.email}
let secretkey="HDEFSOFA";
let token=Jwt.sign(payload,secretkey,{expiresIn:60*60})
Jwt.verify(token,secretkey,(err,new_payload)=>{
    if(err) throw err;
    console.log("Verified")
})
