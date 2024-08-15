const tabsBTNs = document.querySelectorAll(".tabs__btn")
const tabsItem = document.querySelectorAll(".tabs__item")
console.log(tabsItem);

function hideTabs(){
    tabsItem.forEach(tab=>{
        tab.classList.add("hide")
    })
    tabsBTNs.forEach(btn=>{
        btn.classList.remove("active")
    })
}
function showTab(index){
    tabsItem[index].classList.remove("hide")
    tabsBTNs[index].classList.add("active")
}
hideTabs()
showTab(0)
tabsBTNs.forEach((btn, index)=>{
    btn.addEventListener("click", ()=>{
        hideTabs();
        showTab(index);
    })
})