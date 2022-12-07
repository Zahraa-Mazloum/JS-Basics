let a=prompt("Enter your age");
document.getElementById("age").value=a;
let valide=document.getElementById("validate");

 valide.onclick=check
 function check(){
 if (a>18){
    alert("You are over 18");
}
else{
    alert("You are under 18");
}}