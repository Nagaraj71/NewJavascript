const bcrypt= require("bcryptjs")
let user={name:"nagaraj",email:"nagaraj@dilabs.in",password:"1234"}
let salt =bcrypt.genSaltSync(10);
let new_password= bcrypt.hashSync(user.password,salt)
let new_user={...user,password:new_password}
console.log(new_user);
