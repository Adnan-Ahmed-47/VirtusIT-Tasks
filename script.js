let form = document.querySelector(".form")
let subBtn = document.querySelector(".sub");
let resBtn = document.querySelector(".res");

let userInfo = JSON.parse(localStorage.getItem("arr1")) || []
subBtn.addEventListener('click', (event) =>{
    event.preventDefault()
    // console.log("submit")
    let name = document.querySelector("#name");
    let email = document.querySelector("#email")
    let pass = document.querySelector("#pass")
    // console.log(name.value)
    // console.log(email.value)
    // console.log(pass.value)
    
    let obj = {}
    obj.n1 = name.value;
    obj.email = email.value;
    obj.pass1 = pass.value; 

    // console.log(obj)
    userInfo.push(obj)
    // console.log(userInfo)    

    localStorage.setItem('arr1', JSON.stringify(userInfo))
    name.value = "";
    email.value = "";
    pass.value = "";
} )