document.getElementById('hide').setAttribute('onclick' , 'styles(this)');
document.getElementById('show').setAttribute('onclick' , 'styles(this)');


function styles(e){
    if (e.id==='show'){
        document.getElementById('texte').style.display='block'
    }
    else if(e.id==='hide'){
        document.getElementById('texte').style.display='none'
}
}


