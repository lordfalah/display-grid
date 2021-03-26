function slideShow(){
    const getBurger = document.querySelector(".burger");
    const getLink = document.querySelector("nav .linkNav");
    const getAllLink = document.querySelectorAll("nav .linkNav li");
    // console.log(getAllLink);
    getBurger.addEventListener("click", function(){
        // console.log(this)
        getLink.classList.toggle("slideFade");

        if(getLink.classList.contains("slideFade")){
            console.log("MUNCUL");
            getAllLink.forEach((link, index) =>{
                link.style.animation = `allLinkFade 0.90s ease ${index / (5 + 0.2)}s`;
                // console.log(index / 5)
            })
        
        }else{
            console.log("ENDDD");
        }
    });

}

slideShow();





