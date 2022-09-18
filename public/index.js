"use strict";
const highlight = document.querySelector(".highlight");
const btcDiv = document.querySelector(".btc-div");
const ethDiv = document.querySelector(".eth-div");
const ltcDiv = document.querySelector(".ltc-div");
const startBtcDiv = document.querySelector(".btc-start-div");
const startEthDiv = document.querySelector(".eth-start-div");
const startLtcDiv = document.querySelector(".ltc-start-div");
const closeBtn = document.querySelector(".close");
const navMenuBtn = document.querySelector(".nav-menu-btn")
const navMenu = document.querySelector(".nav-menu");



navMenuBtn.addEventListener("click", function(e) {
    navMenu.classList.replace("-left-full", "left-0")
})
closeBtn.addEventListener("click", function(e) {
    navMenu.classList.replace("left-0", "-left-full")
})
highlight.addEventListener("click", function(e) {

    console.log(e.target)
    if(e.target.classList.contains("btc")) {
        ltcDiv.classList.remove("bg-[#2B076E]", "text-main-text")
        ltcDiv.classList.add("bg-main-text","text-black")
        ethDiv.classList.remove("bg-[#2B076E]", "text-main-text")
        ethDiv.classList.add("bg-main-text","text-black")
        btcDiv.classList.add("bg-[#2B076E]", "text-main-text", "duration-500")
        btcDiv.classList.remove("text-black")
        startBtcDiv.classList.remove("border-2", "border-gray-400", "rounded-full", "p-4")
        startBtcDiv.classList.add("bg-sky", "py-4", "px-6", "rounded-3xl")
        startBtcDiv.firstElementChild.classList.remove("hidden")
        startBtcDiv.lastElementChild.classList.replace("text-sky", "text-main-text")
        startLtcDiv.firstElementChild.classList.add("hidden")
        startLtcDiv.classList.remove("bg-sky", "py-4", "px-6", "rounded-3xl", "border-2", "border-gray-400")
        startLtcDiv.classList.add("border-2", "border-gray-400", "rounded-full", "p-4")
        startLtcDiv.lastElementChild.classList.replace("text-white", "text-sky")
        startLtcDiv.classList.add("border-2", "border-gray-100")
        startEthDiv.firstElementChild.classList.add("hidden")
        startEthDiv.classList.remove("bg-sky", "py-4", "px-6", "rounded-3xl", "border-2", "border-gray-400")
        startEthDiv.classList.add("border-2", "border-gray-400", "rounded-full", "p-4")
        startEthDiv.lastElementChild.classList.replace("text-white", "text-sky")
        startEthDiv.classList.add("border-2", "border-gray-100")





        
       

    }
    if(e.target.classList.contains("eth")) {
        btcDiv.classList.remove("bg-[#2B076E]", "text-main-text")
        ltcDiv.classList.remove("bg-[#2B076E]", "text-main-text")
        btcDiv.classList.add("bg-main-text","text-black")
        ltcDiv.classList.add("bg-main-text","text-black")
        ethDiv.classList.add("bg-[#2B076E]", "text-main-text", "duration-500")
        ethDiv.classList.remove("text-black")
        startEthDiv.classList.add("bg-sky", "py-4", "px-6", "rounded-3xl")
        startEthDiv.firstElementChild.classList.remove("hidden")
        startEthDiv.classList.remove("border-2", "border-gray-400")
        startEthDiv.lastElementChild.classList.replace("text-sky", "text-white")
        startLtcDiv.firstElementChild.classList.add("hidden")
        startLtcDiv.classList.remove("bg-sky", "py-4", "px-6", "rounded-3xl", "border-2", "border-gray-400")
        startLtcDiv.classList.add("border-2", "border-gray-400", "rounded-full", "p-4")
        startLtcDiv.lastElementChild.classList.replace("text-white", "text-sky")
        startLtcDiv.classList.add("border-2", "border-gray-100")
        startBtcDiv.classList.remove("bg-sky", "py-4", "px-6", "rounded-3xl", "border-2", "border-gray-400")
        startBtcDiv.firstElementChild.classList.add("hidden")
        startBtcDiv.lastElementChild.classList.replace("text-main-text", "text-sky")
        startBtcDiv.lastElementChild.classList.remove("text-main-text")
        startBtcDiv.classList.add("border-2", "border-gray-400", "rounded-full", "p-4")










    }
    if(e.target.classList.contains("ltc")) {
        btcDiv.classList.remove("bg-[#2B076E]", "text-main-text")
        btcDiv.classList.add("bg-main-text","text-black")
        ethDiv.classList.remove("bg-[#2B076E]", "text-main-text")
        ethDiv.classList.add("bg-main-text","text-black")
        ltcDiv.classList.add("bg-[#2B076E]", "text-main-text", "duration-500")
        ltcDiv.classList.remove("text-black")
        startLtcDiv.classList.add("bg-sky", "py-4", "px-6", "rounded-3xl")
        startLtcDiv.firstElementChild.classList.remove("hidden")
        startLtcDiv.lastElementChild.classList.replace("text-sky", "text-white")
        startLtcDiv.classList.remove("border-2", "border-gray-400")
        startEthDiv.firstElementChild.classList.add("hidden")
        startEthDiv.classList.remove("bg-sky", "py-4", "px-6", "rounded-3xl")
        startEthDiv.classList.add("border-2", "border-gray-400", "rounded-full", "p-4")
        startEthDiv.lastElementChild.classList.replace("text-white", "text-sky")
        startEthDiv.classList.add("border-2", "border-gray-100")
        startBtcDiv.classList.remove("bg-sky", "py-4", "px-6", "rounded-3xl", "border-2", "border-gray-400")
        startBtcDiv.firstElementChild.classList.add("hidden")
        startBtcDiv.lastElementChild.classList.replace("text-main-text", "text-sky")
        startBtcDiv.lastElementChild.classList.remove("text-main-text")
        startBtcDiv.classList.add("border-2", "border-gray-400", "rounded-full", "p-4")






        
    }
})


