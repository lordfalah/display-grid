
function mySlide(){
    const getBurger = document.querySelector(".burger");
    const getNavLink = document.querySelector(".link");
    const getAllLink = document.querySelectorAll(".link li");


    // Slide Nav
    getBurger.addEventListener("click", function(){
        getNavLink.classList.toggle("burger-active");
        // console.log(getAllLink);
        getAllLink.forEach((link, index) =>{
            if(getNavLink.classList.contains("burger-active")){
                console.log("ada ini")
                link.style.animation = `linkFade 0.80s ease forwards ${index / 7 + 0.2}s`;
                // console.log(index / 5);                
            
            }else{
                console.log("HAPUS");
                link.style.animation = `hideFade 0.60s ease alternate ${index / 5}s`;
                console.log(index / 5);
            }

            

        })
    })
}

mySlide();






