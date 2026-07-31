const translations = {
  en: {
    navHome: "Home",
    navAbout: "About",
    navEducation: "Education",
    navSkills: "Stack",
    navExperience: "Experience",
    navProjects: "Projects",
    navHobby: "Hobby",
    navContact: "Contact",

    homeText1: "Hi! My name is",
    homeText3: "I could be <span>your employee!</span>",

    aboutTitle: "About Me",
    aboutHeadline: "Fullstack developer <span>with roots in the lab</span>",
    aboutParagraph:
      "I came into IT from research laboratories, where precision and analytical thinking were the foundation of everyday work - today I apply those habits to code. For over a year and a half I've worked professionally as a Junior Fullstack Developer, building and maintaining web applications: from requirements analysis, through implementation (PHP, JavaScript, PostgreSQL), to deployment and further development. Outside of work I build my own production projects, but not only that - because I learn best from things that actually work.",
    aboutBirthdate: "Date of birth: February 1, 1999",
    aboutDownloadCV: "Download CV",

    eduTitle: "Education",
    eduAnsProgram: "Institute of Applied Computer Science, extramural studies",
    eduAnsDates: "10.2023 - present",
    eduAnsAlt:
      'A long-standing interest in computer science led me to deepen my knowledge in this field. My goal is <b class="extra">professional growth</b> in the job market, where I can pursue this passion, <b class="extra">develop myself and achieve satisfaction</b> from the tasks I perform. I expect to gain valuable experience and knowledge that will allow me to further develop my skills and contribute to professional success.',

    eduUgName: "University of Gdańsk",
    eduUgProgram: "Faculty of Biology, full-time studies",
    eduUgDegree: "Degree obtained: Master's",
    eduUgAlt:
      'My master\'s thesis, <b class="extra">"Analysis of the origin and dispersal patterns of male grey wolves recolonizing western Poland"</b>, was closely based on laboratory work, thanks to which - besides broad biological knowledge - I mastered the basics of laboratory equipment operation. The work involved finding wolf droppings samples in the field, then isolating DNA and performing PCR, which allowed further analysis of Y-chromosome markers.',

    eduLoName: "4th General Secondary School in Elbląg",
    eduLoProfile: "math-geography-IT profile",
    eduLoAlt:
      'During my time at secondary school, besides gaining a solid foundation of knowledge, I honed my ability to manage time effectively. This acquired skill, combined with dedication to learning, resulted in receiving the <b class="extra">Prime Minister\'s scholarship for outstanding academic achievement</b> upon graduation.',

    skillsTitle: "Tech Stack",
    skillLangs: "Languages",
    skillDb: "Databases",
    skillDevops: "DevOps &amp; Tools",
    skillIntegrations: "Integrations",

    skillsCardTitle: "Additional Competencies",
    skillLabel1: "Software Development Life Cycle (SDLC)",
    skillInfo1:
      "I understand the successive stages of application development: from requirements analysis and design, through implementation and testing, to deployment and system maintenance - and I work in line with this process every day.",
    skillLabel2: "Collaboration with end users",
    skillInfo2:
      "I have experience gathering requirements, providing technical support, and analyzing user reports, which helps me design solutions that are actually tailored to users' needs.",
    skillLabel3: "Technical documentation",
    skillInfo3:
      "I prepare architecture documentation, database structure docs, and user manuals - keeping them clear and readable, which makes onboarding new people to the project easier.",
    skillLabel4: "Analytical thinking from the lab",
    skillInfo4:
      "Several years of work in research laboratories (including operating a JEOL JEM-2100 TEM microscope and a liquid chromatograph, and working to the PN-EN ISO/IEC 17025 standard) taught me thoroughness and how to draw conclusions from data - which today translates into debugging and testing.",

    expTitle: "My Experience",
    exp1City: "Warsaw",
    exp1Date: "November 2024 - July 2026",
    exp1Desc:
      "Junior Fullstack Developer - development and maintenance of web applications (PHP, JavaScript, PostgreSQL), work with an in-house survey scripting engine, involvement in the full development lifecycle.",

    exp2Date: "March 2024 - October 2024",
    exp2Desc:
      "Internship: participation in sanitary inspections, maintaining post-inspection documentation, contact with inspected entities.",

    exp3Date: "June 2023 - January 2024",
    exp3Desc:
      "R&D Specialist: planning laboratory research, operating a liquid chromatograph, developing technical documentation and new prototypes.",

    exp4Date: "September 2021 - May 2023",
    exp4Desc:
      "Lab technician / TEM technician: operating the JEOL JEM-2100 electron microscope, quality control of testing, working in line with ISO/IEC 17025.",

    exp5Date: "April - August 2021",
    exp5Desc: "Internship at a horse stable",

    exp6Date: "August 2019",
    exp6Desc: "Work in sorting, packing, and at the mangle of an industrial laundry",

    exp7Date: "July 2019",
    exp7Desc: "Supervising machine operation and packing work at a can factory",

    exp8Date: "June 2019",
    exp8Desc:
      "Cleaning guesthouses and holiday cottages in the Lake District, through the Riverside Recruitment agency in Carlisle",

    exp9Date: "May 2018",
    exp9Desc: "Canteen work - kitchen assistant",

    projectsTitle: "Projects",
    projectsIntro:
      "Selected personal projects - designed, coded, and deployed by me from scratch.",
    projSayvMeDesc:
      "A web app for budget and savings management - used by me daily. The dashboard automatically calculates a daily budget based on transactions, plus an expense-splitting module, a trip planner, a fuel-cost calculator, user authentication, and data visualization (drag-and-drop, QR code generation).",
    projCounterDesc:
      "An admin panel integrated with a supplier's API, automating daily price and stock synchronization - with error handling, change history, a user role system, and data import/export. Includes stock-level analysis (filtering, CSV/Excel export) and a product search. Deployed with automated CI/CD.",
    projJagielskaDesc:
      "A responsive landing page for a photographer - portfolio and service offering (weddings, christenings, family sessions, pets). Includes a photo gallery and a cart/login architecture (Supabase + Stripe) prepared for future expansion, currently disabled. Currently runs as a presentational MVP, deployed on Vercel.",
    projJavnaGraDesc:
      "My own take on the iconic Flappy Bird game, written in Java - game logic, collisions, and the scoring system implemented from scratch. Graphics generated with AI assistance and edited in GIMP.",
    projCalViDesc:
      "A simple desktop app for planning your day - calendar, tasks, notes, and weather in one place. Month, week, and day views, a daily checklist, freeform notes, and a window lock to guard against accidental changes. Data is stored locally in a JSON file, weather comes from the free Open-Meteo API.",
    projScreens: "Screenshots",
    previewWord: "preview",

    hobbyTitle: "Hobbies &amp; Interests",
    hobbyDescTitle: "What do I do in my free time?",
    hobbyDescPara:
      "I'm someone who wants to keep growing and learning new things, not only professionally.",
    learnMore: "Learn more",

    hobbyProgramming: "Programming",
    hobbyCrafts: "Handicrafts",
    hobbyHorseRiding: "Horse riding",
    hobbyKickbox: "Kickboxing",
    hobbyRollerblading: "Rollerblading",
    hobbyVolleyball: "Volleyball",
    hobbyCamping: "Camping",
    hobbyMotorcycles: "Motorcycles",

    viewRepo: "View repo",

    hobbyEwallet2Title: "E-wallet 2.0",
    hobbyEwallet2Desc:
      "A CRUD web app for managing finances. Lets you enter your paycheck, from which it subtracts mandatory expenses and sets a daily budget that updates every day. On the app's home page you enter daily transactions affecting the daily budget, and the mandatory-expenses tab shows the remaining amount owed on monthly bills. A 100% original project, entirely my own work.",

    hobbyHandmadeDesc:
      "A CRUD web app for categorizing handicraft work for logged-in users (password salting, hashing, session handling). After adding tagging, search, and nested categories, the app evolved into a 'journal'-type tool. The project's goal was practical use of basic PHP knowledge and applying Bootstrap, plus learning to work with Git, since the project started as a two-person effort.",

    hobbyDbTitle: "Database",
    hobbyDbDesc:
      'An application written in C as a credit project for "Fundamentals of Programming," for which I received the highest grade. The program allows creating, browsing, and editing a database of wolf sample records, containing four records by default. The project demonstrates basic C programming skills such as file operations, loops, and memory management.',

    hobbyDogHotelTitle: "Dog Hotel",
    hobbyDogHotelDesc:
      'A static website created for a small business, serving as an ad for the "Pet Paradise" dog hotel. The project aimed to sharpen HTML, CSS, and JavaScript skills, with particular focus on the site\'s aesthetics and functionality. It includes CSS and interactive JavaScript elements that enrich the user experience.',

    hobbyEwalletDesc:
      "The first version of the E-wallet app, inspired by online courses but built with my own logic and solutions. The project was made to learn JavaScript and isn't integrated with any database. It focuses on the practical use of JavaScript in the context of a finance management app.",

    hobbyMagic8ballDesc:
      'The "Magic 8ball" app, inspired by online courses, uses HTML, CSS, and JavaScript to create an interactive version of the popular fortune-telling toy. It lets you ask questions and get random answers, enriching the user experience with an attractive interface and simple animation. The project aimed to practically apply frontend development skills and a creative approach to web app design.',

    hobbyCrochet: "Crochet",
    hobbyMacrame: "Macrame",

    hobbyRollerbladeModal: "Rollerblading",
    hobbyMotoTripsModal: "Motorcycle trips",

    contactTitle: "Contact",
    contactHeadline: "Get in touch with me!",
    contactPara:
      "Let's arrange a convenient time and date to meet.",
    contactLabelName: "Name",
    contactLabelAddress: "Address",
    contactAddressValue: "Poland, Elbląg",
    contactLabelPhone: "Phone",
    contactLabelEmail: "Email",
    contactFormHeadline: "Write to me",
    contactSendBtn: "Send",
    contactPlaceholderName: "Name",
    contactPlaceholderEmail: "Email",
    contactPlaceholderSubject: "Subject",
    contactPlaceholderMessage: "Message...",

    contactMsgSuccess: "Message sent :)",
    contactMsgError: "An error occurred. Please try again later.",
  },
};

let currentLang = "pl";

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    var key = el.getAttribute("data-i18n");
    if (el.dataset.plHtml === undefined) {
      el.dataset.plHtml = el.innerHTML;
    }
    if (lang === "en" && translations.en[key] !== undefined) {
      el.innerHTML = translations.en[key];
    } else {
      el.innerHTML = el.dataset.plHtml;
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
    var key = el.getAttribute("data-i18n-placeholder");
    if (el.dataset.plPlaceholder === undefined) {
      el.dataset.plPlaceholder = el.placeholder;
    }
    if (lang === "en" && translations.en[key] !== undefined) {
      el.placeholder = translations.en[key];
    } else {
      el.placeholder = el.dataset.plPlaceholder;
    }
  });

  document.querySelectorAll(".lang-option").forEach(function (a) {
    a.classList.toggle("active", a.getAttribute("data-lang") === lang);
  });
}

document.querySelectorAll(".lang-option").forEach(function (a) {
  a.addEventListener("click", function (e) {
    e.preventDefault();
    applyLanguage(this.getAttribute("data-lang"));
  });
});

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
        autoplay: false
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
            contactMessage.textContent = currentLang === "en"
                ? translations.en.contactMsgSuccess
                : "Wiadomość została wysłana :)";

            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000);

            contactForm.reset();
        })
        .catch((error) => {
            console.error('Błąd przy wysyłaniu emaila:', error);
            contactMessage.textContent = currentLang === "en"
                ? translations.en.contactMsgError
                : "Wystąpił błąd. Spróbuj ponownie później.";
        });
}

  
  contactForm.addEventListener('submit', sendEmail);
  
  contactForm.addEventListener('submit', sendEmail)