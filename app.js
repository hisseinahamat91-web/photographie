const header = document.querySelector("header")
const hero = document.querySelector(".hero")

document.addEventListener("scroll",()=>{
    if(window.scrollY > hero.clientHeight){
        header.classList.add("bg-marron")
    }else{
        header.classList.remove('bg-marron')
    }
})