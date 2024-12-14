const tabsBox = document.querySelector(".tab-box");
arrowIcons = document.querySelectorAll(".icon i");

let isDragging = false;

const handleIcon = () => {
    let scrolVal = tabsBox.scrollLeft;
    arrowIcons[0].parentElement.style.display = scrolVal > 0 ? "flex" :  "none";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () =>{
        tabsBox.scrollLeft += icon.id === "left" ? -350 : 350;
        setTimeout(() => handleIcon(), 50);
    }); 
});

const dragging = (e) => {
    if(!isDragging) return;
    tabsBox.classList.add("dragging");
    tabsBox.scrollLeft -= e.movementX;
}

const dragStop = () =>{
    isDragging = false;
    tabsBox.classList.remove("dragging");
}

tabsBox.addEventListener("mousedown", ()=> isDragging = true);
tabsBox.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);