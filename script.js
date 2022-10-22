



window.addEventListener("scroll", function() {
    if(this.scrollY > 0) {

        // impossible de les faire apparaître un à un :'(
        document.querySelector(".reveal").style.opacity = "1";
        document.querySelector(".reveal2").style.opacity = "1";
        document.querySelector(".reveal3").style.opacity = "1";
        document.querySelector(".reveal4").style.opacity = "1";
        document.querySelector(".reveal5").style.opacity = "1";
        document.querySelector(".reveal6").style.opacity = "1";
        console.log('coucou')
        }
})