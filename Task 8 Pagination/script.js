btn = document.getElementById('btn');
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
            // let user = users.map((item, index) => {
            //     var row = `<tr onclick="showPopup(${item.id})">    
            //                 <td>${item.id}</td>
            //                 <td>${item.firstName}</td>
            //                 <td>${item.lastName}</td>
            //                 <td>${item.age}</td>
            //                 </tr>`

            //     return row
            // })
            // return user  

            const pagTable = $('#employeeTable').DataTable({
                data: users,
                columns: [
                    { data: 'id' },
                    { data: 'firstName' },
                    { data: 'lastName' },
                    { data: 'age' },
                ],
                paging: true, // Enable pagination
                lengthMenu: [5, 10, 25], // Define page length options
                pageLength: 10, // Set default page length
                // displayStart: 0 // display the first page
            });
            table.page('first').draw('page');
            return pagTable;
        })

        .then((res1) => {
            table.innerHTML = res1.join('');
        });
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

// -------------------------------------------------------------------
// PAGINATION

// let pgbtn1 = document.getElementById('btnNum1');
// let pgbtn2 = document.getElementById('btnNum2');
// let pgbtn3 = document.getElementById('btnNum3');

// pgbtn1.addEventListener('click', function () {
//     btnCol1();
//     fetch('https://dummyjson.com/users')
//         .then((d3) => {
//             return d3.json();
//         })
//         .then((res1) => {
//             console.log(res1.users)
//             let users = res1.users;

//             let arr = [];
//             for (let i = 0; i < 10; i++) {
//                 console.log(users[i]);
//                 var row = ` <tr onclick="showPopup(${users[i].id})">
//                         <td>${users[i].id}</td>
//                         <td>${users[i].firstName}</td>
//                         <td>${users[i].lastName}</td>
//                         <td>${users[i].age}</td>
//                         </tr>`
//                 arr.push(row);
//             }
//             console.log(arr);
//             return arr;
//         })
//         .then((res2) => {
//             table.innerHTML = res2.join('');
//         })
// })


// pgbtn2.addEventListener('click', function () {
//     btnCol2();
//     fetch('https://dummyjson.com/users')
//         .then((d3) => {
//             return d3.json();
//         })
//         .then((res1) => {
//             console.log(res1.users)
//             let users = res1.users;

//             let arr = []
//             for (let i = 10; i < 20; i++) {
//                 console.log(users[i]);
//                 var row = ` <tr onclick="showPopup(${users[i].id})">
//                         <td>${users[i].id}</td>
//                         <td>${users[i].firstName}</td>
//                         <td>${users[i].lastName}</td>
//                         <td>${users[i].age}</td>
//                         </tr>`
//                 arr.push(row);
//             }
//             console.log(arr);
//             return arr;
//         })
//         .then((res2) => {
//             table.innerHTML = res2.join('');
//         })
// })


// pgbtn3.addEventListener('click', function () {
//     btnCol3();
//     fetch('https://dummyjson.com/users')
//         .then((d3) => {
//             return d3.json();
//         })
//         .then((res1) => {
//             console.log(res1.users)
//             let users = res1.users;

//             let arr = []
//             for (let i = 20; i < 30; i++) {
//                 console.log(users[i]);
//                 var row = ` <tr onclick="showPopup(${users[i].id})">
//                         <td>${users[i].id}</td>
//                         <td>${users[i].firstName}</td>
//                         <td>${users[i].lastName}</td>
//                         <td>${users[i].age}</td>
//                         </tr>`
//                 arr.push(row);
//             }
//             console.log(arr);
//             return arr;
//         })
//         .then((res2) => {
//             table.innerHTML = res2.join('');
//         })
// })


// function btnCol1() {
//     if (pgbtn1) {
//         pgbtn1.style.backgroundColor = "blue";
//         pgbtn1.style.color = "white";
//         pgbtn2.style.backgroundColor = "";
//         pgbtn2.style.color = "";
//         pgbtn3.style.backgroundColor = "";
//         pgbtn3.style.color = "";
//     }
// }
// function btnCol2() {
//     if (pgbtn2) {
//         pgbtn1.style.backgroundColor = "";
//         pgbtn1.style.color = "";
//         pgbtn3.style.backgroundColor = "";
//         pgbtn3.style.color = "";
//         pgbtn2.style.backgroundColor = "blue";
//         pgbtn2.style.color = "white";
//     }
// }
// function btnCol3() {
//     if (pgbtn3) {
//         pgbtn1.style.backgroundColor = "";
//         pgbtn1.style.color = "";
//         pgbtn2.style.backgroundColor = "";
//         pgbtn2.style.color = "";
//         pgbtn3.style.backgroundColor = "blue";
//         pgbtn3.style.color = "white";
//     }
// }


// -------------------------------------------------------------------




