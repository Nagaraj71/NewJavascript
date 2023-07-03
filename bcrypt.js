const bcrypt=require("bcryptjs")
let user={name:"nagaraj",email:"nagaraj@dilabs.in",phone:"8618576762"}
let salt=bcrypt.genSaltSync(10);
let new_phone=bcrypt.hashSync(user.phone,salt);
let new_user={...user, phone:new_phone}



let result=bcrypt.compareSync("8618576762","new_phone");

if(result){
    console.log("Login Successfully")
}else{
    console.log("Login Failed")
}