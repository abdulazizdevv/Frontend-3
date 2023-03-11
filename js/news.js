

const elnewBg = document.querySelector(".news_page_bg")
const elCardBg = document.querySelector(".news_aside_cards")
const mainBg =document.querySelector(".main_bg")
elCardBg.addEventListener("click",(evt)=>{
evt.preventDefault()
if(evt.target.matches(".news_card-bg1")){
 
    mainBg.classList.add("news_card-bg1")
}else{
    mainBg.classList.remove("news_card-bg1") 
}
if(evt.target.matches(".news_card-bg2")){
 
    mainBg.classList.add("news_card-bg2")
}else{
    mainBg.classList.remove("news_card-bg2") 
}
if(evt.target.matches(".news_card-bg3")){
 
    mainBg.classList.add("news_card-bg3")
}else{
    mainBg.classList.remove("news_card-bg3") 
}
if(evt.target.matches(".news_card-bg4")){
 
    mainBg.classList.add("news_card-bg4")
}else{
    mainBg.classList.remove("news_card-bg4") 
}
})

