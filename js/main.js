// Header

const elBurger = document.querySelector(".header__logo-burger");
const elClose = document.querySelector(".header__close");
const elNav = document.querySelector(".header__nav");
const logo = document.querySelector(".mobile-logo");
const phone = document.querySelector(".mobile-tel");
const btn = document.querySelector(".btn2");
const icons = document.querySelectorAll("img");

elBurger.addEventListener("click" , ()=> {
    elNav.classList.add("header__nav-js")
    logo.classList.add("db")
    phone.classList.add("db")
    btn.classList.add("dn")
    icons.forEach((item)=>{
      item.classList.add("filtered")
    })
});


elClose.addEventListener("click" , ()=> {
    elNav.classList.remove("header__nav-js")
    logo.classList.remove("db")
    phone.classList.remove("db")
    btn.classList.remove("dn")
});

// Dark mode 
const body = document.querySelector("body");
const toggle = document.querySelector("#toggle");
const sunIcon = document.querySelector(".toggle .bxs-sun");
const moonIcon = document.querySelector(".toggle .bx-moon");

toggle.addEventListener("change", () => {
    
    body.classList.toggle("active");
    body.classList.toggle("dark");
    toggle.classList.toggle("filtered")
    sunIcon.className = sunIcon.className == "bx bxs-sun" ? "bx bx-sun" : "bx bxs-sun";
    moonIcon.className = moonIcon.className == "bx bxs-moon" ? "bx bx-moon" : "bx bxs-moon";
    localStorage.setItem("dark",body.classList)
    if(localStorage.getItem("dark")){
        dark = localStorage.getItem("dark")  
      //  body.classList.add(dark) || ""
    // console.log(true);
    }
});

// Mobile Dark mode

let elBtns = document.querySelector(".dark-light");

let theme = false;

elBtns.addEventListener("click", (evt) => {
  theme = !theme;
  const newBg = theme ? "dark" : "light";
  window.localStorage.setItem("theme", newBg);
  newTheme();
});

let newTheme = () => {
  if (window.localStorage.getItem("theme") == "dark") {
    document.body.classList.add("dark");
    elBtns.classList.add("btn")
  } else {
    document.body.classList.remove("dark");
    elBtns.classList.remove("btn");
  }
};


const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () =>{ 
    if (window.pageYOffset > 300) {
        toTop.classList.add("active");
    } else{
        toTop.classList.remove("active");
    }
})
