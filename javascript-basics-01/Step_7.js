let u=prompt("Enter your shoes size");
let o=prompt("Enter your Birth year");
document.getElementById("shoe_size").value=u;
document.getElementById("year").value=o;

let validate=document.getElementById("validate");
validate.onclick=op
function op(){
    var z=document.getElementById("shoe_size").value*2;//Multiplies the shoe size by 2
    var a =z+5;   //Adds 5 
    var b =a*50;    //Multiplies by 50
    var c=b-document.getElementById("year").value; //Subtracts the birth year
    var d=c+1776;//Adds 1766
    alert("Result is  "+d);
}

