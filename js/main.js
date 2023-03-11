const elTap = document.querySelector(".taps");
const elTapActive = document.querySelector(".tap1");
const elAll = document.querySelector(".js-all");
const elWeb = document.querySelector(".js-web");
const elDesign = document.querySelector(".js-design");
const elSmm = document.querySelector(".js-smm");
const elPhone = document.querySelector(".js-phone");
const elList = document.querySelector(".project");

function renderCards(cards) {
  window.localStorage.setItem("cars", JSON.stringify(cards));

  let res = "";
  for (i of cards) {
    res += `<div class="project-card card${i.id} ">
    <div class="project-card-top">${i.name}</div>
    <div class="card${i.id}-hover"></div>
</div>`;
  }

  elList.innerHTML = res;

  return res;
}


  let filterCards = cards.filter((el) => el.name);
  renderCards(filterCards);
elTap.addEventListener("click", (evt) => {
  evt.preventDefault();
  if (evt.target.matches(".js-all")) {
    let filterCards = cards.filter((el) => el.name);
    renderCards(filterCards);
    console.log(filterCards);
    elAll.classList.add("tap1");
    console.log(elAll);
  } else {
    elAll.classList.remove("tap1");
  }
  if (evt.target.matches(".js-phone")) {
    let filterCards = cards.filter((el) => el.name == "Mobil ilova");
    console.log(filterCards);
    renderCards(filterCards);
    elPhone.classList.add("tap1");
  } else {
    elPhone.classList.remove("tap1");
  }
  if (evt.target.matches(".js-web")) {
    elWeb.classList.add("tap1");
    let filterCards = cards.filter((el) => el.name == "Veb sayt");
    renderCards(filterCards);
  } else {
    elWeb.classList.remove("tap1");
  }
  if (evt.target.matches(".js-design")) {
    elDesign.classList.add("tap1");
    let filterCards = cards.filter((el) => el.name == "veb dizayn");
    renderCards(filterCards);
  } else {
    elDesign.classList.remove("tap1");
  }
  if (evt.target.matches(".js-smm")) {
    elSmm.classList.add("tap1");
    let filterCards = cards.filter((el) => el.name == "SMM");
    renderCards(filterCards);
  } else {
    elSmm.classList.remove("tap1");
  }
});


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

