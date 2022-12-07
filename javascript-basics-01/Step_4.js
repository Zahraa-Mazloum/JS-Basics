//Concerning step 4, use prompt to ask about the name -> put it in the input -> when clicking on validate -> alert the name 
let n =prompt("Enter your name");
document.getElementById("name").value=n;
let s =prompt("Enter your Surname");
document.getElementById("surname").value=s;
let c =prompt("Enter your city");
document.getElementById("city").value=c;
let validate=document.getElementById("validate");
validate.onclick= valid
function valid(){
    alert("Name : "  +document.getElementById("name").value
      +"\n" 
      +"Surname : "  +document.getElementById("name").value  
      +"\n" +
      "City : "  +document.getElementById("name").value );
}

