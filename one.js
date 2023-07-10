const bcrypt=require("bcryptjs");
let user={
    name:"nagaraj", email:"nagaraj@dilabs.in",password:"12345"
}
let salt=bcrypt.genSaltSync(10);
let new_password= bcrypt.hashSync(user.password,salt);
let new_user={...user,password:new_password};

console.log(new_user);

let result=bcrypt.compareSync("12345",new_password)
if(result){
    console.log("Login Successfully")
}else{
    console.log("Login Failed")
}


