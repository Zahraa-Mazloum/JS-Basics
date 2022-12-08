let i = document.querySelector('#name');
let d = document.createElement("div");
i.addEventListener("change" ,changes);
function changes(){
d.innerText = i.value;
document.body.appendChild(d);}