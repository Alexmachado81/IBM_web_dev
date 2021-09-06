function compute()
{
    var p = document.getElementById("principal").value;

    if(p == "" || p <= 0)
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }
    var r = document.getElementById("rate").value;
    var y = document.getElementById("years").value;
    var y1 = now.getFullYear();
    var final = calculo(p,r,y,y1);
    document.getElementById("result").innerHTML = final;
    }

}

function calculo(p,r,y,y1)   {
   var lucro = p*y*r /100;
   var atual = y1+y;
   var resultado = "If you deposit "+ p 
            "at an interest rate of " + y
            "you will receive an amount of " + lucro
            "in the year " + atual;
return resultado
    
}
        
function updateTextInput(val) {
    document.getElementById('textInput').value=val; 
  }
        
