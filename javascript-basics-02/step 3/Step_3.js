let i = document.querySelector('#name');
let d = document.querySelector('div');

i.addEventListener("change" ,changes);

function changes(){
d.innerHTML=i.value;
}