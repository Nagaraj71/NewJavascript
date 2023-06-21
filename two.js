let employees=[{id:101,name:"narasimha",salary:"50000"},{id:102,name:"nagaraj",salary:"20000"}];
let creatEmployee=(employee)=>{
    setTimeout(()=>{
        employee.push(employee)
    },2000)
}
let getEmployee=()=>{
    setTimeout(()=>{
        let employeeRows="";
        employees.forEach((employee)=>{
           employeeRows += '<tr><td>${employee.id}</td>
           <td>${employee.name}</td>
           <td>${employee.salary}</td>
           </tr>'
        });
   document.querySelector("#table-body").innerHTML=employeeRows},1000)
    }