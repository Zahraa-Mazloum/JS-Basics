let g=document.querySelector('.green');
let r=document.querySelector('.red');
let b=document.querySelector('.blue');
let t=document.querySelector('text');
g.setAttribute('onclick', 'colors("green")');
r.setAttribute('onclick', 'colors("red")');
b.setAttribute('onclick', 'colors("blue")');

function colors(z){
    text.style.color=z;
}