// Targetting the elements
let form = document.querySelector(".form");
let subBtn = document.querySelector(".sub");
let resBtn = document.querySelector(".res");
let table = document.querySelector('tbody');
let search = document.querySelector('input[name="search"]');
// console.log("working........")


// Global variable
let userInfo = [];
// let userInfo = JSON.parse(localStorage.getItem('arr')) || [];


// Onload function
window.onload = function () {
    userInfo = JSON.parse(localStorage.getItem('arr')) || [];
    displayItems(userInfo);
}

// Functionality for Submit Button
subBtn.addEventListener('click', (event) => {
    event.preventDefault();
    // console.log(event)

    // Targetting the form values
    let name = document.querySelector('#name');
    let email = document.querySelector('#email');
    let phNo = document.querySelector('#num');
    let selectedGender = document.querySelector('input[name="gender"]:checked');
    let selectedCourse = document.querySelector('input[name="chkbox"]:checked');

    // console.log(name.value)
    // console.log(email.value)
    // console.log(phno.value)

    // Condition for Radio Button
    if (selectedGender) {
        var gender = selectedGender.value;
    }
    // Condition for CheckBoxes
    if (selectedCourse) {
        var course = selectedCourse.value;
    }

    let obj = {
        name: name.value.toLowerCase(),
        email: email.value,
        phNo: phNo.value,
        gender: gender,
        course: course,
    };
    // obj.course = course.value;
    // console.log(obj)
    if (obj.name == "") {
        // console.log("okkkkkkkkkkk")
        alert("Kindly Enter your Details")
        // userInfo.push(obj)
        // localStorage.setItem('arr', JSON.stringify(userInfo));
    }
    else {
        userInfo.push(obj)
    }
    localStorage.setItem('arr', JSON.stringify(userInfo));
    // console.log("ok")
    console.log(userInfo)

    // Setting the items in Local Storage
    // name.value = ""
    // email.value = ""
    // phNo.value = ""
    // gender= !selectedGender
    // // gender= 'input[name= "gender"]: unchecked';
    // course = form.reset();
    form.reset();

    displayItems(userInfo);

})
// ---------------------------------------------------------------------------
// Ascending & Descending

var ascInp = document.querySelectorAll('input[name="sort"]');
ascInp.forEach((el) => {
    el.addEventListener('change', (event) => {
        let Order = event.target.value
        console.log(Order);
        if (Order == "asc") {
            let sortedArr = userInfo.sort(function (a, b) {
                if (a.name < b.name) {
                    return -1;
                }
                else if (a.name > b.name) {
                    return 1;
                }
                else {
                    return 0;
                }
            })

            console.log(userInfo)
            displayItems(sortedArr)
        }  //Descending
        else if (Order == 'dsc') {
            console.log("ok")
            let sortedArr = userInfo.sort(function (a, b) {
                if (a.name > b.name) {
                    return -1;
                }
                else if (a.name < b.name) {
                    return 1;
                }
                else {
                    return 0;
                }
            })

            console.log(userInfo)
            displayItems(sortedArr)
        }
        else {
            let unSorted = JSON.parse(localStorage.getItem('arr')) || [];

            // let unSorted=localStorage.getItem()
            displayItems(unSorted)
        }
    })

})

// --------------------------------------------------------------------------------   

// Function for displaying the array info in the browser
function displayItems(userInfo) {
    // let userInfo = JSON.parse(localStorage.getItem('arr')) || [];
    let display = userInfo.map((e) => {
        let items = `<tr>
                        <td>${e.name}</td>
                        <td>${e.email}</td>
                        <td>${e.phNo}</td>
                        <td>${e.gender}</td>
                        <td>${e.course}</td>
                        <td><button class= "del"> Delete </button></td>
                    </tr>`


        return items
    })
    console.log(display)
    table.innerHTML = display.join("");



    let delArr = document.querySelectorAll('.del');
    // console.log(delArr)

    delArr.forEach((btn, index) => {
        btn.addEventListener('click', function (e) {
            userInfo.splice(index, 1);
            localStorage.setItem("arr", JSON.stringify(userInfo))
            displayItems(userInfo)
            // console.log(e)
            // console.log("working........")

        })
    })

}



// search.addEventListener('keyup', function(e){
//     let userInp = srchInp.value.toLowerCase();
//     // console.log(userInp)
//     let fil = userInfo.filter((item)=>{
//         if(userInp == item.name){
//             console.log(userInp)
//         }
//         console.log(fil)

//     })

//     // userInfo.filter.name.toLowerCase()
// })

// Search Bar
search.addEventListener('input', (event) => {
    console.log(event.target.value)
    let a = event.target.value.toLowerCase();
    let searchInfo = userInfo.filter((item) => {
        if (item.name.includes(a) || item.phNo.includes(a) || item.email.includes(a)) {
            return true;
        }
    })
    console.log(searchInfo)
    displayItems(searchInfo)
})


