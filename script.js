//Selecting Elements
var input=document.getElementById("input")
var button=document.getElementById("button")
var guess=document.getElementById("guessing")
var press=document.getElementById("press")
var noofguess=3
// Generate Random Number From 1 to 5
var randomnumber=Math.floor(Math.random()*10)+1
if(randomnumber>5)
{
    randomnumber=randomnumber-5
}
//Event Handler Function
    function result(){
    
        
    
    if(input.value==randomnumber)
        {
         alert("Congratulations !,Your Guessing is Right")
         press.textContent="You are Right"
         

        }
    else{
        noofguess=noofguess-1
        if(noofguess==0){
        alert("You Lost, Generated Random Number is:"+randomnumber)
        }
        press.textContent="You are Wrong"
        guess.textContent="Available Guesses"+noofguess

    }
   
}