let p=document.getElementById('password');
let c=document.getElementById('confirmation');
document.getElementsByTagName('button')[0].setAttribute('onclick', 'valid()')


function valid(){
if (p.value!=c.value){
    p.style.border='3px solid red'
    c.style.border='3px solid red'
}}
