let time = document.querySelector('input[type = time]');
let desc = document.querySelector('input[placeholder = desc]');
let button = document.querySelector('#btn');
let table = document.querySelector('tbody');


let timeVal
let descVal

time.addEventListener('keyup', function(e){
    timeVal = e.target.value
    // console.log(timeVal)
})

desc.addEventListener('keyup', function(item){
    descVal = item.target.value
    // console.log(descVal)
})

// chekd.addEventListener('click', function(item){
//     checkStat = item.target.value
// })


window.onload = function(){
    let arr = JSON.parse(localStorage.getItem("data"))||[];

    displayItems(arr)
}

button.addEventListener('click', function(e){
    let arr = JSON.parse(localStorage.getItem("data"))||[];
    // console.log(arr) 

    let stData = {timeVal, descVal}
    // console.log(stData)
    arr.push(stData)
    console.log(arr)

    // let b = JSON.stringify(arr)
    // localStorage.setItem("data", b)
    localStorage.setItem("data",JSON.stringify(arr))

    displayItems(arr)
})

function displayItems(arr1){
    let display = arr1.map((e)=> {
        let items = `<tr>
                        <td>${e.timeVal}</td>
                        <td>${e.descVal}</td>
                        <td><input class= "chk" type="checkbox">Completed</td>
                        <td><button class= "del"> Delete </button></td>
                    </tr>`
            
        return items
    })
    console.log(display)
    table.innerHTML = display.join("");


    // DELETION OPERATION
    let ArrOfbtn = document.querySelectorAll('.del')//Because of querySelectorAll it gets NodeList
    // console.log(ArrOfbtn); //Nodelist of btns

    //using forEach
    ArrOfbtn.forEach((btn,index)=>{
        btn.addEventListener("click",function(e){
            arr1.splice(index,1);
            localStorage.setItem("data",JSON.stringify(arr1))
            displayItems(arr1)
            // arr1.splice(index,1)
            // localStorage.setItem()
        })
    }) 

//     let chekd = document.querySelectorAll('input[type="checkbox"]:checked');
//     // console.log(chekd)

//     chekd.addEventListener('click', function(e){
//         // let checkStat = e.target.value;
//         arr1.push(e)
//         localStorage.setItem('data',JSON.stringify(arr1));
//         displayItems(arr1);
//         if(chekd){
//             return true;
//         }
        
//     })
   
}