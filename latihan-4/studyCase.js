function slideShow(){
    const getBurger = document.querySelector(".burger");
    const getLink = document.querySelector("nav .linkNav");
    const getAllLink = document.querySelectorAll("nav .linkNav li");
    const getBody = document.querySelector("body");

    console.log(getBody);
    getBurger.addEventListener("click", function(){
        // console.log(this)
        getLink.classList.toggle("slideFade");

        getAllLink.forEach((link, index) =>{
            if(getLink.classList.contains("slideFade")){
                console.log("ada");
                link.style.animation = `allLinkFade 1s  forwards ${index / (7 + 0.9)}s`;
                getBody.classList.add("warna");

            }else{
                console.log("HILANG");
                getBody.classList.remove("warna");
                link.style.animation = `deleteFade 0.80s ease-out ${index / 5}s`;
            }
        })

    });

}

slideShow();





