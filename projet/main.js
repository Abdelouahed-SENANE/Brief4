

// ====== NavBar MEnu =============

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const imgBtn = document.getElementById("imgBtn");
console.log(imgBtn);
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("hidden");
  


  if (navLinks.classList.contains('hidden')) {
    
    imgBtn.setAttribute('src' , "../projet/icons_svg/Bars3.svg");
  }else {
    imgBtn.setAttribute('src' , "../projet/icons_svg/XMark.svg");
  }
});
// ========= End Nav bar Script ============
