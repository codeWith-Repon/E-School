let nav = document.querySelector(".navigation-wrap")

window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("on-scroll")
    }
    else{
        nav.classList.remove("on-scroll")
    }
}