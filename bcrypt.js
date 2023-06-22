const bcrypt=require("bcryptjs")
let user ={name:"nagaraj",email:"nagaraj@dilabs.in", password:"1234"}
let salt= bcrypt.genSaltSync(10);
let new_password = bcrypt.hashSync(user.password,salt)
let new_user = {...user, new_password}

let result= bcrypt.compareSync("1234",new_password)
if(result){
    console.log("Login Successfully");
}else{
    console.log("Login Failed");
}
