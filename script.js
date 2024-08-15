

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

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlidesBounds: true,
    spaceBetween: 10,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },     breakpoints: {
        780: {
          slidesPerView: 2,
        },
        1103: {
          slidesPerView: 3,
        },
        // 1304: {
        //   slidesPerView: 4,
        // },
      },  
        autoplay: {
        delay: 2000,
        disableOnInteraction: false, 
        pauseOnMouseEnter: true
      }
  });


  var swiper = new Swiper(".hobby-swiper", {
    loop: true,
    pagination: {
      el: ".hobby-pagination",
      clickable: true,
    },  
     navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
     },   
  });


  $('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  });

  const hobbyModals = document.querySelectorAll('.hobby-modal');
  const learnMoreBtns = document.querySelectorAll('.learn-more-btn');
  const modalCloseBtns = document.querySelectorAll('.modal-close-btn');


  var modal = function(modalClick){
    hobbyModals[modalClick].classList.add('active');
  }

  learnMoreBtns.forEach((learnMoreBtn, i) => {
    learnMoreBtn.addEventListener('click', () => {
        modal(i);
    });
  });

  modalCloseBtns.forEach((modalCloseBtns)=>{
    modalCloseBtns.addEventListener('click', () => {
        hobbyModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
  });

  const contactForm = document.getElementById('contact-form');
  const contactMessage = document.getElementById('contact-message');
  
  const sendEmail = (e) => {
    e.preventDefault();

    console.log("Wysyłanie formularza...");
    
    emailjs.sendForm('service_t6dkk8n', 'template_yumcvn7', contactForm, 'N7FPUGi7WwKRxNh80')
        .then(() => {
            console.log("Wiadomość została wysłana.");
            contactMessage.textContent = "Wiadomość została wysłana :)";
            
            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000);
            
            contactForm.reset();
        })
        .catch((error) => {
            console.error('Błąd przy wysyłaniu emaila:', error);
            contactMessage.textContent = "Wystąpił błąd. Spróbuj ponownie później.";
        });
}

  
  contactForm.addEventListener('submit', sendEmail);
  
  contactForm.addEventListener('submit', sendEmail)