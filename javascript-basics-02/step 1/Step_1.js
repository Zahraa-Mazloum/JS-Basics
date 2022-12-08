let img = document.querySelector('img');
let start = img.src;
let hover = "images/image1_2.jpg"; 
img.onmouseover = () => { img.src = hover; }
img.onmouseout = () => { img.src = start; } 