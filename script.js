//These actions take place on clicking Compute Interest button
function compute()
{
    //The value of Principal, Rate of Interest and No. of Years is stored in these variables respectively
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var days = document.getElementById("days").value;
    //Make sure that the Principal entered is a positive number
    if(document.getElementById("principal").value<=0)
    {
        //Dispaly pop-up alert message if the condition is true
        alert("Please enter a valid Amount");
        document.getElementById("principal").focus();
    }
    else if((document.getElementById("rate").value<=0)||(document.getElementById("rate").value>25))
    {
        //Display pop-up alert message if the condition is true
        alert("Please enter a valid Rate of Interest (<25%)");
        document.getElementById("rate").focus();
    }
    else if(document.getElementById("days").value<=0)
    {
        //Display pop-up alert message if the condition is true
        alert("Please enter a valid Time Period");
        document.getElementById("days").focus();
    }
    else
    {
    var amount = (principal * days * rate /36500);
    //Display the following on computing the result 
    document.getElementById("result").innerHTML="If the Principal is <span class='text-highlight'>"+"₹"+principal+"</span>\<br\>At an Interest Rate of <span class='text-highlight'>"+rate+"%"+"</span>\<br\>For <span class='text-highlight'>"+days+" days"+"</span>\<br\>The Simple Interest will be <span class='text-highlight'>"+"₹"+amount.toFixed(2)+"</span>\<br\>"
    }
}

