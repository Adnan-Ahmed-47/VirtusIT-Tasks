let form = document.querySelector('.form');
let subBtn = document.querySelector('#sub');

let userInfo = []
subBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    // console.log(event)

    let name = document.querySelector('#name');
    let rollNo = document.querySelector('#rno');
    let selectedGender = document.querySelector('input[name="gender"]:checked');
    let dob = document.querySelector('#dob');
    let dropdownList = document.getElementById('brnch');
    let phNo = document.querySelector('#phno');
    let agree = document.querySelector('input[name="chkbox"]:checked');
    // let selectedCourse = document.querySelector('#brnch');
    // console.log(name.value);
    // console.log(rollNo.value);
    // console.log(dob.value);
    // console.log(selectedCourse.value)

    if(selectedGender){
        var gender = selectedGender.value;
    }

    if(agree){
        var checkd = agree.value;
    }

    // if(selectedCourse){
    //     var course = selectedCourse.value;
    // }
    dropdownList.onchange = (ev) =>{
      console.log("Selected value is: " + dropdownList.value);
    }

    let obj = {
        name : name.value,
        rollNo: rollNo.value,
        gender: gender,
        dob : dob.value,
        course: dropdownList.value,
        phNo : phNo.value,
        check: checkd
    };

    // obj = ""
    console.log(obj);
    form.reset();


})