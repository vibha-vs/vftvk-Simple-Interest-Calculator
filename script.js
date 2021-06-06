//These actions take place on clicking Compute Interest button
function compute()
{
    //The value of Principal, Rate of Interest and No. of Years is stored in these variables respectively
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    //No.of Years entered is converted into an actual year in the future
    var year = new Date().getFullYear()+parseInt(years);
    //Make sure that the Principal entered is a positive number
    if(document.getElementById("principal").value<=0)
    {
        //Dispaly pop-up alert message if the condition is true
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    else
    {
    var amount = principal * years * rate /100;
    //Display the following on computing the result 
    document.getElementById("result").innerHTML="If you deposit <span class='text-highlight'>"+principal+"</span>,\<br\>at an interest rate of <span class='text-highlight'>"+rate+"%"+"</span>\<br\>You will receive an amount of <span class='text-highlight'>"+amount+"</span>,\<br\>in the year <span class='text-highlight'>"+year+"</span>\<br\>"
    }
}
//Dynamically update the value of the slider
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}