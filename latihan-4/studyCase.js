function slideShow(){
    const getBurger = document.querySelector(".burger");
    const getLink = document.querySelector("nav .linkNav");
    const getAllLink = document.querySelectorAll("nav .linkNav li");
    const getBody = document.querySelector("body");

    
    getBurger.addEventListener("click", function(){
        // console.log(this)
        getLink.classList.toggle("slideFade");

        // Effect Burger
        getBurger.classList.toggle("try-1");
        getBurger.classList.toggle("try-2");
        getBurger.classList.toggle("try-3");

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


// All Scroll
function scrollWindow(){
    const allLink = document.querySelectorAll("nav .linkNav .pageScroll");

    window.addEventListener("scroll", function(){
        const wScroll = this.pageYOffset;
        console.log(wScroll);
        allLink.forEach(link => {
            link.addEventListener("click", function(){
                const getHref = this.getAttribute("href");
                const getParent = document.querySelector(`${getHref}`).offsetTop;
                
                link.style.animation = `scrollFade 0.80s ease 0.50s`;
    
    
            })
        })
        
    });

    
    




}

scrollWindow();

// All Scroll End
