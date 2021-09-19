function datesVal(){
    var dateIn = document.getElementById("check-in").value;
    var dateOut = document.getElementById("check-out").value;
    if(dateIn<dateOut)
    {
        alert("Successful!");
        return true;
    }
    else
    {
        alert("dates are wrong! Please select the correct dates.")
        return false;
    }
}
