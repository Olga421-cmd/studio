  
    const breakPoint = 760;
    let mainMenu, burgerIcon;
    window.addEventListener('load', init)
 
    function init(){
         mainMenu = document.querySelector("header nav#main-menu")
         burgerIcon = document.querySelector("header nav#burger-icon")
        if(!burgerIcon) return
        burgerIcon.addEventListener("click",()=>{
            mainMenu.classList.toggle("block")
            burgerIcon.textContent = (burgerIcon.textContent==="X") ? "☰":"X"

        })

        window.addEventListener("resize",() =>{
            if(window.innerWidth> breakPoint){
                mainMenu.classList.remove("block")
            burgerIcon.textContent = "☰"
       }
     }) 
    }

