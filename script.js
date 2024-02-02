

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var navbar = document.querySelector('.navbar');
        if (window.scrollY > 20) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    });
});

const LObutton = document.getElementById("IVlo")
const IVloAlt = document.getElementById("IVloAlt")

LObutton.onclick = function(){
    if (LObutton.style.display = "block"){
    LObutton.style.display = "none"
    IVloAlt.style.display = "block" 
    }
    
 IVloAlt.onclick = function(){
    if (IVloAlt.style.display = "block"){
        LObutton.style.display = "block"
        IVloAlt.style.display = "none" 
    }}   
}

// const Ug = document.getElementById("Ug")
// const UgAlt = document.getElementById("UgAlt")

Ug.onclick = function(){
    if (Ug.style.display = "block"){
        Ug.style.display = "none"
        UgAlt.style.display = "block" 
    }
    
    UgAlt.onclick = function(){
    if (UgAlt.style.display = "block"){
        Ug.style.display = "block"
        UgAlt.style.display = "none" 
    }}   
}

Ans.onclick = function(){
    if (Ans.style.display = "block"){
        Ans.style.display = "none"
        AnsAlt.style.display = "block" 
    }
    
    AnsAlt.onclick = function(){
    if (AnsAlt.style.display = "block"){
        Ans.style.display = "block"
        AnsAlt.style.display = "none" 
    }}   
}

const accordion = document.getElementsByClassName("skill-box")

for (i = 0; i<accordion.length; i++){
    accordion[i].addEventListener("click", function(){
        this.classList.toggle("active")
    })
}