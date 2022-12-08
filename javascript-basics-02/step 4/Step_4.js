let r=document.querySelector('button');
r.onclick=()=>{
    if(confirm("Are you sure ?")==true){
        document.querySelectorAll("input").forEach(z => {z.value=""})
    }
}
