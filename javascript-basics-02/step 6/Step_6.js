let images=[...document.querySelectorAll('img')];
images.forEach((image,i) => {
    image.addEventListener('mouseover', function(){
        this.src="images/image" + (i+1) + "_2.jpg"
    })
    image.addEventListener('mouseout', function(){
        this.src="images/image" + (i+1) + ".jpg"
    })
});