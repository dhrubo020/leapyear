
var isLeapYear = function (yr) {
    if (yr % 4 == 0) {
        if (yr % 100 != 0 || yr % 400 == 0) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
var myFunction = function () {
    var yr = document.getElementById("year").value;
    console.log(yr);
    var result = "";
    if (yr > 0) {
        if (isLeapYear(yr)) {
            result = yr + " is a Leapyear";
        } else {
            result = yr + " is not a Leapyear";
        }
    } else {
        alert("Please insert a valid year!")
    }

    document.getElementById("showResult").innerHTML = result;
}

var arrayFunction = function () {
    var arr = [];
    var showArray = document.getElementById("showArray");
    showArray.innerHTML = "";
    var from = document.getElementById("from-year").value;
    var to = document.getElementById("to-year").value;
    console.log(from);

    if (from > 0 && to > 0) {
        for (var i = from; i <= to; i++) {
            if (isLeapYear(i))
                arr.push(i);
        }

        for (var i = 0; i < arr.length; i++) {
            showArray.innerHTML += arr[i] + " | ";
        }
    }else{
        alert("Please insert a valid year!")
    }


}






