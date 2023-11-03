

// ====== NavBar MEnu =============

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const imgBtn = document.getElementById("imgBtn");
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("hidden");
  


  if (navLinks.classList.contains('hidden')) {
    
    imgBtn.setAttribute('src' , "../images/icons_svg/Bars3.svg");
  }else {
    imgBtn.setAttribute('src' , "../images/icons_svg/XMark.svg");
  }
});
// ========= End Nav bar Script ============
//===================bag====================
const shoppingBag = document.getElementById("shopping-bag");
const bagButton = document.getElementById("bag-button");

// Function to show the shopping bag
function showShoppingBag() {
    shoppingBag.style.left = "0";
}

// Function to hide the shopping bag
function hideShoppingBag() {
    shoppingBag.style.left = "-100%";
}

// Toggle the shopping bag when the button is clicked
bagButton.addEventListener("click", function () {
    if (shoppingBag.style.left === "0px") {
        hideShoppingBag();
    } else {
        showShoppingBag();
    }
});
// =================end bag======================