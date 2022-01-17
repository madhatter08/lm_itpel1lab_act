function studentProfile() {
    var email = document.getElementById("email").value;
    var fname = document.getElementById("fname").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var studentNo = document.getElementById("studentNo").value;
    var course = document.getElementById("course").value;
    var contactNo = document.getElementById("contactNo").value;
    var address = document.getElementById("address").value;

    document.write(
        "LPU Email   : " + email + "<br/>" +
        "Name        : " + fname + "<br/>" +
        "Age         : " + age + "<br/>" +
        "Gender      : " + gender + "<br/>" +
        "Student No. : " + studentNo + "<br/>" +
        "Course      : " + course + "<br/>" +
        "Contact No. : " + contactNo + "<br/>" +
        "Address     : " + address + "<br/>"
    );
}