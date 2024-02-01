
// const d = new Date();
// d.format();
// var utcString = d.toUTCString();
// console.log(utcString)
// const b = d.subtract(2, 'hours')
// document.getElementById("demo").innerHTML = d;
// console.log(d)

// --------------------------------------------------------
// const moment = require('moment');

// let momentA = moment();
// console.log(momentA.toString());


// if(time){
//     let utc = time.subtract({hours:5, minutes:30,seconds:30})
//     utc = moment().format('hh:mm:ss');
//     document.getElementById('demo1').value = utc;
//     console.log(utc);
// }



// --------------------------------------------------------
// Accessing the times in UTC and IST by using JavaScript..

// const date = new Date();
// // console.log(date)
// var utc = date.toUTCString();
// document.getElementById('demo').innerHTML = utc;
// console.log("The present UTC time is: "+ utc)

// var ist = date.toString();
// document.getElementById('demo1').innerHTML = ist;
// console.log("The present UTC time is: "+ ist);

// --------------------------------------------------------
// Practice

// var d = new Date();
// var utc = d.toUTCString();
// var ist = d.toISOString();

// console.log(d, utc, ist)
// console.log(ist)

// --------------------------------------------------------

// let result1 = document.getElementById("result1");
// let result2 = document.getElementById("result2");

// // creating new date
// let date = new Date();
// let utcString = date.toUTCString();
// result1.innerHTML = utcString;
// utcString = date.toISOString();
// result2.innerHTML = utcString;

// --------------------------------------------------------

// document.getElementById("date").innerHTML = d;

// var a = moment('2016-01-01'); 
// var b = a.add(2, 'week'); 
// a.format();
// console.log(a);
// "2016-01-08T00:00:00-06:00"


// var todayDate = moment().format('YYYY-MM-DD');
// document.getElementById('todayDate').value = todayDate;
// console.log(todayDate);

// var time = moment().format("HH:mm");
// document.getElementById('time').value = time;
// console.log(time)

// -----------------------------------------------------------------------------
// Accessing the time by using moment.js

// var utc = moment().utc().format('hh:mm:ss');
// document.getElementById('utc').value = utc;
// console.log(utc)

// var btn = document.querySelector('.sub');
// btn.addEventListener('click', function(e){
//     var ist = moment().format('hh:mm:ss');
//     document.getElementById('ist').value = ist;
//     console.log(ist)

// })

// var timeZone = moment.tz.timeZone();
// console.log(timeZone)

// -----------------------------------------------------------------------------


// // var utcTime = "2024-02-01T10:32:26.229Z";
// var utcTime = moment().utc().format('YYYY-MM-DD HH:mm:ss');

// // Display the UTC time
// document.getElementById("utcTime").innerText = "UTC Time: " + utcTime;

// // Convert UTC time to local time
// var localTime = moment.utc(utcTime).local().format("YYYY-MM-DD HH:mm:ss");
// document.getElementById("localTime").innerText = "Local Time: " + localTime;

// // Convert UTC time to New York time (Eastern Time)
// var nyTime = moment.utc(utcTime).tz("America/New_York").format("YYYY-MM-DD HH:mm:ss");
// document.getElementById("nyTime").innerText = "New York Time: " + nyTime;

// // Convert UTC time to Tokyo time
// var tokyoTime = moment.utc(utcTime).tz("Asia/Tokyo").format("YYYY-MM-DD HH:mm:ss");
// document.getElementById("tokyoTime").innerText = "Tokyo Time: " + tokyoTime;

// // Convert UTC time to Saudia time
// var saudiTime = moment.utc(utcTime).tz("Asia/Riyadh").format("YYYY-MM-DD HH:mm:ss");
// document.getElementById("saudiTime").innerText = "Saudi Time: " + saudiTime;

// -----------------------------------------------------------------------------

// var utcTime = "2024-02-01T10:32:26.229Z";
var btn = document.querySelector('.sub');

var utcTime = moment().utc().format('YYYY-MM-DD HH:mm:ss');

// Display the UTC time
document.getElementById("utcTime").value = utcTime;

btn.addEventListener('click', function (e) {
    
    var localTime = moment.utc(utcTime).local().format("HH:mm:ss");
    document.getElementById("localTime").value = localTime;

    
    var saudiTime = moment.utc(utcTime).tz("Asia/Riyadh").format("HH:mm:ss");
    document.getElementById("saudiTime").value = saudiTime;

    
    var nyTime = moment.utc(utcTime).tz("America/New_York").format("HH:mm:ss");
    document.getElementById("nyTime").value = nyTime;

    
    var tokyoTime = moment.utc(utcTime).tz("Asia/Tokyo").format("HH:mm:ss");
    document.getElementById("tokyoTime").value = tokyoTime;

})








// Convert UTC time to local time


// Convert UTC time to Saudia time

// Convert UTC time to New York time (Eastern Time)

// Convert UTC time to Tokyo time
