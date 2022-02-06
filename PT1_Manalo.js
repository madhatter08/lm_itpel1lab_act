//The function ageChecker(age) will compute for the age of the user.
function ageChecker(age) {
    //define two variables and fetch the input from HTML form
    var dateI1 = document.getElementById("birthDate").value;
    var dateI2 = document.getElementById("currentDate").value;

    //define two date object variables to store the date values
    var date1 = new Date(dateI1);
    var date2 = new Date(dateI2);

    //calculate time difference
    var time_difference = date2.getTime() - date1.getTime();

    //calculate days difference by dividing total milliseconds in a day
    var result = time_difference / (1000 * 60 * 60 * 24);

    var age = result / 365;

    if ((parseInt(age)) >= 18) {
        return true;
    } else {
        return confirm("Do you have permission from your parents?");
    }

}

//The function access() will display if the user has been granted or denied of access.
function access() {
    //define two variables and fetch the input from HTML form
    var name = document.getElementById("name").value;
    var dateI1 = document.getElementById("birthDate").value;
    var dateI2 = document.getElementById("currentDate").value;
    
    //define two date object variables to store the date values
    var date1 = new Date(dateI1);
    var date2 = new Date(dateI2);
    
    //calculate time difference
    var time_difference = date2.getTime() - date1.getTime();
    
    //calculate days difference by dividing total milliseconds in a day
    var result = time_difference / (1000 * 60 * 60 * 24);
    
    var age = result / 365;
    
    if (ageChecker(age)) {
        alert("Access Granted!" + "\n"
            + "Name: " + name + "\n"
            + "Age: " + (parseInt(age)) + " year/s old");
    } else {
        alert("Access Denied!" + "\n"
        + "Name: " + name + "\n"
        + "Age: " + (parseInt(age)) + " year/s old");
    }
}