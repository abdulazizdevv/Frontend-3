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

