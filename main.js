// ====== NavBar MEnu =============

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const imgBtn = document.getElementById("imgBtn");
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("hidden");

    if (navLinks.classList.contains("hidden")) {
        imgBtn.setAttribute("src", "../images/icons_svg/Bars3.svg");
    } else {
        imgBtn.setAttribute("src", "../images/icons_svg/XMark.svg");
    }
});
// ========= End Nav bar Script ============
// ============== Display Table in Categories ================

const displayList = document.getElementById("listDisplay");
const displayTable = document.getElementById("iconTable");
const layoutTable = document.getElementById("tableBook");
const layoutList = document.getElementById("listBook");


function layoutDisp() {
  displayList.addEventListener('click' , () => {
    layoutTable.classList.add('hidden')
    layoutList.classList.remove('hidden')
    displayList.classList.add('text-secondary');
    displayTable.classList.remove('text-secondary');
  })
  displayTable.addEventListener('click' , () => {
    layoutTable.classList.remove('hidden')
    layoutList.classList.add('hidden')
    displayList.classList.remove('text-secondary');
    displayTable.classList.add('text-secondary');

  })

}
layoutDisp()
