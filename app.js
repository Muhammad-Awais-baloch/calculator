function sum(num1, num2) {
    console.log(num1 + num2)
}



function greetUser() {

    var input = document.getElementById("userName")

    console.log(input.value)

    alert("hello" + input.value)
}




function setNumber(num) {
    var input = document.getElementById("number")
    input.value += num
}


function ans() {
    var inputValue = document.getElementById("number")
    var output = eval(inputValue.value)
    inputValue.value = output
}

function allclr(){
    var Allclear = document.getElementById("number");
    Allclear.value="";

}

function clear(){
    var clr = document.getElementById("number");
    clr.value = clr.value.slice(0 ,-1);

}