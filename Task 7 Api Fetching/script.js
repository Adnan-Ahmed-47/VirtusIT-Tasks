// let btn = document.getElementById('btn');

// btn.addEventListener('click', function () {

//     let display = document.querySelector('tbody')
//     // fetch('https://dummyjson.com/users')
//         fetch('https://dummy.restapiexample.com/api/v1/employees')

//         .then((data1) => {
//             // console.log(data)
//             return data1.json();
//         })
//         .then((actData) => {
//             // console.log(actData)
//             // return actData
//             let dataa = actData.data;
//             let myData = dataa.map((item) => {
//                 let obj = {}
//                 obj.id = item.id;
//                 obj.employee_name = item.employee_name;
//                 obj.employee_salary = item.employee_salary;
//                 obj.employee_age = item.employee_age;
//                 return obj
//             })
//             // console.log(myData)
//             return myData;
//         })
//         .then((dispData) => {
//             let table = dispData.map((item) => {
//                 let row = ` <tr onclick="showPopup(${item.id})">    
//                 <td>${item.id}</td>
//                 <td>${item.employee_name}</td>
//                 <td>${item.employee_salary}</td>
//                 <td>${item.employee_age}</td>
//                 </tr> 
//                  `

//                 // row.onclick = function(){
//                 //     var cell = this.getElementsByTagName("td")[0];
//                 //     var id = cell.innerHTML;
//                 //     alert("id:" + id);
//                 // };
//                 return row
//             })

//             return table
//         })

//         .then((dat) => {
//             display.innerHTML = dat.join('');
//             console.log(dat)
//         })
// })

// function showPopup(id) {
//     // console.log(id)
//     fetch(`https://dummy.restapiexample.com/api/v1/employee/${id}`)
//         .then((dataaa) => {
//             console.log(dataaa.data)
//             // let a= dataaa.data;
//             let obj1= {};
//             obj.id = item.id;
//                 obj.employee_name = item.employee_name;
//                 obj.employee_salary = item.employee_salary;
//                 obj.employee_age = item.employee_age;
//                 return obj1;
//         })
//         .then((sinData)=>{
//             console.log(sinData)
//         })
// }


// -------------------------------------------------------------------------------

// btn = document.getElementById('btn');
let table = document.querySelector('tbody');
let detailsCont = document.querySelector('.Details-container');

var z = btn.addEventListener('click', function () {
    fetch('https://dummyjson.com/users')
        .then((d1) => {
            return d1.json();
        })
        .then((res) => {
            console.log(res.users)
            let users = res.users;
            let user = users.map((item, index) => {
                var row = ` <tr onclick="showPopup(${item.id})">    
                            <td>${item.id}</td>
                            <td>${item.firstName}</td>
                            <td>${item.lastName}</td>
                            <td>${item.age}</td>
                            </tr>`
                return row
            })
            return user
        })
        .then((res1) => {
            table.innerHTML = res1.join('');
        })
})

function showPopup(id) {
    fetch(`https://dummyjson.com/user/${id}`)
        .then((f1) => {
            return f1.json()
        })
        .then((f2) => {
            let elem = `<div id="popUp">
        <h3>Employee Details</h3>
        <div class="details">
            <h4>Emp id: &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp ${f2.id} </h4>
            <h4>First Name:  &nbsp &nbsp${f2.firstName} </h4>
            <h4>Last Name:  &nbsp &nbsp${f2.lastName} </h4>
            <h4>Emp age:  &nbsp &nbsp &nbsp &nbsp${f2.age} </h4>
        </div>

        <button id="close" onclick="closePopUp()">X</button>

    </div>`
    detailsCont.style.display = 'block';
    // detailsCont.classList.add("blur");
            detailsCont.innerHTML = elem;
        })
}

function closePopUp() {
    detailsCont.style.display = 'none';
    // detailsCont.classList.remove("blur");
}













// btn.addEventListener('click',function(e){
//     async function ApiCall() {
//         let data1 = await fetch('https://dummy.restapiexample.com/api/v1/employees')
//         // let data1 = await fetch('https://dummyjson.com/users')
//         // console.log(data1);
//         let actData = await data1.json();
//         console.log(actData.data);
//     }
//     ApiCall();
//     // console.log(e)
// })


