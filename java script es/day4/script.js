function changeStrToNum(str){
    return parseFloat(str);
}

function input(){
    let num1 = prompt("enter 1st number")
    let num2 = prompt("enter 2nd number")
    let num3 = prompt("enter 3th number")
}

num1 = changeStrToNum(num1);
num2 = changeStrToNum(num2);
num3 = changeStrToNum(num3);

if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    console.log("invalid number")
    return;
}

let result = num1 + num2 + num3;

console.log("the sum of nums is" + result)

input()
