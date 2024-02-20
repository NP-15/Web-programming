document.getElementById("triangle-form").onsubmit = function() {calcarea()};
document.getElementById("leap-year-check").onsubmit = function() {leap_check()};
document.getElementById("display-date").onsubmit = function() {date_check()};

function calcarea() {
    var side1 = document.getElementById("side1").value;
    var side2 = document.getElementById("side2").value;
    var side3 = document.getElementById("side3").value;

    var s = (Number(side1) + Number(side2) + Number(side3))/2;
    var area = Math.sqrt(s * (s - Number(side1)) * (s - Number(side2)) * (s - Number(side3)));

    alert("The area of the triangle is: " + area);
}

function leap_check() {
    var year = Number(document.getElementById("year-input").value);

    if (year % 4 === 0) {
        alert(year + " is a leap year.");
    }

    else {
        alert(year + " is not a leap year.")
    }
}

function date_check() {
    var today = new Date();
    var day = today.getDay();

    var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    alert("Today is " + today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear() + " (" + daylist[day] + ")");
}