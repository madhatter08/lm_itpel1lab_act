function salarySystem() {
    var employee_name = document.getElementById("employee_name").value;
    var employee_id = document.getElementById("employee_id").value;
    var hours_work = document.getElementById("hours_work").value;
    var rate_per_hour = document.getElementById("rate_per_hour").value;

    const TAX1=0.12;
    const TAX2=0.10;
    const TAX3=0.05;
    //equations for gross pay and tax range
    gross_pay = rate_per_hour * hours_work;
    var net_pay;
    var _12tax = gross_pay * TAX1;
    var _10tax = gross_pay * TAX2;
    var _5tax = gross_pay * TAX3;

    document.write(
        "-----------SALARY SYSTEM-----------" + "<br />" +
        "Employee ID No.         : " + employee_id + "<br />" +
        "Employee name           : " + employee_name + "<br />" +
        "Number of hours worked  : " + hours_work + " hours" + "<br />" +
        "Rate per hour           : P" + rate_per_hour + "<br />" +
        "-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --" + "<br />" +
        "Gross pay          : P" + gross_pay + "<br />"
    );

    if (hours_work == 0 || rate_per_hour == 0) {
        alert("You did not input anything!");
    } else if(gross_pay > 25000){
        net_pay = gross_pay - _12tax; //with 12% VAT
        document.write("Tax rate                : 12%");
    } else if (gross_pay >= 15000 && gross_pay <= 25000){
        net_pay = gross_pay - _10tax; //with 10% VAT
        document.write("Tax rate                : 10%");
    } else if (gross_pay < 15000){
        net_pay = gross_pay - _5tax; //with 5% VAT
        document.write("Tax rate                : 5%");
    } else {
        document.write("Tax rate                : Invalid input")
    }

    document.write("<br />" + "Net pay            : P" + net_pay);
}