const api = 'https://corona.askbhunte.com/api/v1/data/nepal';
async function getdata() {
    const repsond = await fetch(api);
    const data = await repsond.json();
    document.getElementById("totalcase").innerHTML = data.tested_positive;
    document.getElementById("death").innerHTML = data.deaths;
    document.getElementById("isolation").innerHTML = data.in_isolation;
    document.getElementById("recover").innerHTML = data.recovered;
    document.getElementById("active").innerHTML = data.tested_positive - data.recovered;
}
getdata();

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
        h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}
startTime();

function todaydate() {
    var date = new Date();
    var month = date.getMonth();
    var day = date.getDay();
    var tday = date.getDate();
    var monthname = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dayday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday"];
    document.getElementById("month").innerHTML = monthname[month] + " : " + tday + " : " + dayday[day];





}
todaydate();