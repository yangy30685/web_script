/****************************************************************
* @author: Dryang
* @web: https://yangspot.com
* @date: 2018-09-
****************************************************************/

document.write("<hr>")

function factorial(num) {
    if(num <= 1) {
        return 1;
    } else {
        return num*factorial(num-1);
    }
}

document.write("Factorial of 4 = ",factorial(4), "<br>");

function openAlert(mess) {
    alert(mess);
}

