// TASK 1
var todayDate = moment().format('YYYY-MM-DD');
document.getElementById('todayDate').value = todayDate;
console.log(todayDate)

var last30Date = moment().add(-29, 'days').format('YYYY-MM-DD');
document.getElementById('lastmonth').value = last30Date;
console.log(last30Date)

// --------------------------------------------------------------------------------
// TASK 2
function disableFutureDate(){
    // var selectedDate = document.getElementById('vld').value;
    var DatInp=document.getElementById('vld');
    // console.log(selectedDate);

    // var momentSelectedDate = moment(selectedDate);
    var momentSelectedDate = moment(DatInp.value);
    
    // console.log(momentSelectedDate)
    var currDate = moment().format('YYYY-MM-DD');
    // console.log(currDate)

    if(momentSelectedDate.isAfter(currDate)){
        document.getElementById('vld').value = '';
        alert('Future dates are not allowed.')
    }


    // var maxDate = moment().format('YYYY-MM-DD');

    var minDate = moment().subtract(59, 'days').format('YYYY-MM-DD');

    DatInp.setAttribute('max', currDate);
    DatInp.setAttribute('min', minDate);


    // console.log(minDate)
    

    // if(currDate != selectedDate){
    //     selectedDate.value = '';
    // }
    // console.log(currDate)
}

// ---------------------------------------------------------------




// var last60Date = moment.min(moment()).format()
// document.getElementById('vld').value = last60Date;
// console.log(last60Date)



// var inp = document.querySelector('#vld');

// var currDate = moment().format('YYYY-MM-DD');
// // console.log(currDate)
// inp.value = currDate;

// if(inp.value)

// console.log(currDate)



// moment.min(moment('2016-01-01'), moment('2016-02-01')).format()

// var last60Date = moment().subtract(-60, 'days').format('YYYY-MM-DD');
// document.getElementById('vld').value = last60Date;
// console.log(last60Date)

