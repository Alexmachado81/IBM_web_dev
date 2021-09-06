function compute()
{
   var p = document.getElementById("principal").value;
   var r = document.getElementById("rate").value;
   var y = document.getElementById("years").value;
   var y1 = now.getFullYear();
   var final = calculo(p,r,y,y1);
   document.getElementById("result").innerHTML = + final;
}

function calculo(p,r,y,y1)   {
   var lucro = p*y*r;
   var atual = y1+y;
   var resultado = "If you deposit "+ p
            "at an interest rate of " + y
            "you will receive an amount of " + lucro
            "in the year " + atual;
return resultado
    
}
        
