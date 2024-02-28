const balanceHtml = document.getElementById("balance");
const depositHtml = document.getElementById("deposit-btn");
const withdrawHtml = document.getElementById("withdraw-btn");
const inputHtml = document.getElementById("money-input");
const userNamehtml = document.getElementById("userName")
const txt1 = document.getElementById('user');
const btn1 = document.getElementById('btn1');
const out1 = document.getElementById('output1');
const pHtml = document.getElementById('null')

function fun1(){
    out1.innerHTML = "hello" + txt1.value + "!";
}

btn1.addEventListener('click', fun1);

let balance = 0;

depositHtml.addEventListener('click' , function(){
    const value = Number(inputHtml.value);
    if (confirm("Are you sure you want to deposit money to your card?") == true){
        alert = "Money transfered";
    } else {
        alert("Money didn't transfered")
    }
     
/* alert-ით არ გამოაქ (fix უნდა)*/

    balance = balance + value;
    
    balanceHtml.textContent = 'Your balance: ' + balance;

    inputHtml.value = '';
})

withdrawHtml.addEventListener('click' , function(){
    const value = Number(inputHtml.value);

    if (confirm("Are you sure you want to withdraw money to your card?") == true){
        alert = "Money transfered";
    } if (confirm == false) {
        alert("Money didn't transfered")
        inputHtml.value = '';
    }

/* alert-ით არ გამოაქ (fix უნდა),,,,,
cancel-ის შემთხვევაშ  გამოაქ alert-ი მაგრამ deposit აკეთებს(fix) */

    if (balance >= value){
        balance = balance - value;
    } else {
        alert('there is not enough money on your credit card.')
    } 
    
        

    balance = balance - value;
    
    balanceHtml.textContent = 'Your balance: ' + balance;

    inputHtml.value = '';
})
