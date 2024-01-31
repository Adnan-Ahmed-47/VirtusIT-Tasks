
const d = new Date();
// d.format();
// var utcString = d.toUTCString();
// console.log(utcString)
// const b = d.subtract(2, 'hours')
document.getElementById("demo").innerHTML = d;
console.log(d)


// const d = new Date();

var utcString = d.toUTCString();
console.log(utcString)

document.getElementById("demo").innerHTML = d;
console.log(d)

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