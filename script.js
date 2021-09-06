function compute()
{
let p = document.getElementById("principal").value;

    if(p == "" || p <= 0)
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }
let r = document.getElementById("rate").value;
let y = document.getElementById("years").value;
let y1 = now.getFullYear();
let atual = y1+y;
let final = (p*y*r) /100;
document.getElementById("result").innerHTML = "If you deposit " + p;
document.getElementById("result").innerHTML = "at an interest rate of " + r;
document.getElementById("result").innerHTML = "you will receive an amount of " + final;      
document.getElementById("result").innerHTML = "in the year " + atual;   
}
        
