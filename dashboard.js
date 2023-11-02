// Dropdown Disponibilite
function showDrop() {
    const dropList = document.getElementById("dropList");
    if (dropList.classList.contains("hidden")) {
        dropList.classList.remove("hidden");
    } else {
        dropList.classList.add("hidden");
    }
}
function show(choose) {
    const fieldInput = (document.getElementById("textInput").value = choose);
    dropList.classList.add("hidden");
}
// Afficher Add Class Active to current list
const parentUl = document.querySelectorAll("#navLinks li");

parentUl.forEach((el) => {
    el.addEventListener("click", () => {
        parentUl.forEach((item) => {
            item.classList.remove("active");
        });
        el.classList.add("active");
    });
});
// Afficher Add Class Active to current list

// show Current pages
const pages = document.querySelectorAll("#pages > div");

function currentPage(pageName) {
    pages.forEach((page) => {
        page.classList.add("hidden");
    });
    const pageCorrect = document.getElementById(pageName);
    pageCorrect.classList.remove("hidden");
}
// Validation Form Add Project
const submitBtn = document.getElementById("submitBtn");
const fieldTitle = document.getElementById("fieldTitle");
const fieldPrice = document.getElementById("fieldPrice");
const fieldQuantite = document.getElementById("fieldQte");
const fieldDispo = document.getElementById("textInput");
const errorTitle = document.getElementById("errorTitle");
const errorQte = document.getElementById("qte");
const errorPrice = document.getElementById("price");
const fieldTxt = document.getElementById("textField");
const errorDesc = document.getElementById("errorDispo");
const tableBody = document.getElementById("tbody");
const txtVar = document.getElementById("textVar");


function checkDesc() {
    if (fieldDispo.value == 0) {
        errorDesc.innerText = "please select disponibilitè";
        return false;
    } else {
        errorDesc.innerText = "";
        return true;
    }
}

function validateTitles(input, message) {
    const regexTitle = /^[\w\s'’"“”.,?!-]+$/i;
    if (input.value == "" || input.value.length == 0) {
        message.innerText = "Please Enter Title";
        return false;
    } else if (!regexTitle.test(input.value)) {
        message.innerText = "Please Enter correct title";
        return false;
    } else {
        message.innerText = "";
        return true;
    }
}
function validatePrice(input, message) {
    const regexNumber = /^\d+(\.\d{1,2})?$/;
    if (input.value == "" || input.value.length == null) {
        message.innerText = "Please Enter price";
        return false;
    } else if (!regexNumber.test(input.value)) {
        message.innerText = "Please Enter correct price";
        return false;
    } else {
        message.innerText = "";
        return true;
    }
}

function validateQuntite(input, message) {
    if (input.value == "" || input.value.length == null) {
        message.innerText = "Please Enter Quantitè";
        return false;
    } else {
        message.innerText = "";
        return true;
    }
}
function validateQuntite(input, message) {
    if (input.value == "" || input.value.length == null) {
        message.innerText = "Please Enter Quantitè";
        return false;
    } else {
        message.innerText = "";
        return true;
    }
}

function ValidateDesc() {
    if (fieldTxt.value == "" || fieldTxt.value.length == null) {
        fieldTxt.classList.add("border-2");
        fieldTxt.classList.add("border-red-500");
        return false;
    } else {
        fieldTxt.classList.remove("border-2");
        fieldTxt.classList.remove("border-red-500");
        return true;
    }
}
// Validation Add new product

submitBtn.addEventListener("click", (e) => {
    validateTitles(fieldTitle, errorTitle);
    validatePrice(fieldPrice, errorPrice);
    validateQuntite(fieldQuantite, errorQte);
    ValidateDesc();
    checkDesc();
    AddBookLocalstorage();
    if (!submitBtn.classList.contains("hidden")) {
        txtVar.innerText = "Add new book";
    }
    e.preventDefault();
});
// ==========================
let bookData = [];
function AddBookLocalstorage() {
    if (
        validateTitles(fieldTitle, errorTitle) &&
        validatePrice(fieldPrice, errorPrice) &&
        validateQuntite(fieldQuantite, errorQte) &&
        ValidateDesc() &&
        checkDesc()
    ) {
        let id = new Date().getTime().toString();
        const book = {
            id: id,
            title: fieldTitle.value,
            prix: fieldPrice.value,
            quantitè: fieldQuantite.value,
            description: fieldTxt.value,
            disponibilitè: fieldDispo.value,
        };
        bookData.push(book);
        localStorage.setItem("books", JSON.stringify(bookData));
        resetInput();
        DisplayBooks();
        overlay.classList.add("hidden");
        addProduct.classList.add("hidden");
    }
}
function resetInput() {
    fieldTitle.value = "";
    fieldPrice.value = "";
    fieldQuantite.value = "";
    fieldDispo.value = "";
    fieldTxt.value = "";
}
function DisplayBooks() {
    if (localStorage.getItem("books") == null) {
        bookData = [];
    } else {
        bookData = JSON.parse(localStorage.getItem("books"));
    }
    tableBody.innerHTML = "";
    bookData.forEach((e, index) => {
        tableBody.innerHTML += `
         <tr>
        <td class="p-2 border border-gray-300 text-xl">
            ${e.id}
        </td>
        <td class="p-2 border border-gray-300 text-xl">
            ${e.title}
        </td>
        <td class="p-2 border border-gray-300 text-xl">
        ${e.prix}
        </td>
        <td class="p-2 border border-gray-300 text-xl">
            ${e.quantitè}
        </td>
        <td class="p-2 border border-gray-300 text-xl">
            ${e.disponibilitè}
        </td>

        <td
            class="p-2 border border-gray-300 text-xl gap-5">
            <button onclick=Update(${index})
                class="w-[100px] p-1  inline-block">
                <i class="fa-solid fa-pencil text-xl"></i>
            </button>
            <button onclick=delFunction(${index})
                class="w-[100px] p-1 bg-red-500 ">
                <i class="fa-solid fa-trash text-xl"></i>
            </button>
        </td>
    </tr>  
        `;
    });
}
DisplayBooks();

// ======== function Delete =========
function delFunction(index) {
    if (localStorage.getItem("books") == null) {
        bookData = [];
    } else {
        bookData = JSON.parse(localStorage.getItem("books"));
    }
    bookData.splice(index, 1);
    localStorage.setItem("books", JSON.stringify(bookData));
    DisplayBooks();
}

// Add new Book function
const addBtn = document.getElementById("AddBook");
const overlay = document.getElementById("overlay");
const addProduct = document.getElementById("addProduct");

addBtn.addEventListener("click", () => {
    overlay.classList.remove("hidden");
    addProduct.classList.remove("hidden");

});
overlay.addEventListener("click", () => {
    overlay.classList.add("hidden");
    addProduct.classList.add("hidden");
});

// Update Function
// Check element is exist in the page

function Update(index) {
    const editBtn = document.getElementById("editeBtn");

    submitBtn.classList.add("hidden");
    editBtn.classList.remove("hidden");
    if (editBtn.classList.contains) {
    }
    overlay.classList.remove("hidden");
    addProduct.classList.remove("hidden");

    if (localStorage.getItem("books") == null) {
        bookData = [];
    } else {
        bookData = JSON.parse(localStorage.getItem("books"));
    }

    fieldTitle.value = bookData[index].title;
    fieldTxt.value = bookData[index].description;
    fieldPrice.value = bookData[index].prix;
    fieldQuantite.value = bookData[index].quantitè;
    fieldDispo.value = bookData[index].disponibilitè;

    editBtn.onclick = () => {
        if (
            validateTitles(fieldTitle, errorTitle) &&
            validatePrice(fieldPrice, errorPrice) &&
            validateQuntite(fieldQuantite, errorQte) &&
            ValidateDesc() &&
            checkDesc()
        ) {
            bookData[index].title = fieldTitle.value;
            bookData[index].description = fieldTxt.value;
            bookData[index].prix = fieldPrice.value;
            bookData[index].quantitè = fieldQuantite.value;
            bookData[index].disponibilitè = fieldDispo.value;
        }
        localStorage.setItem("books", JSON.stringify(bookData));
        DisplayBooks();
        submitBtn.classList.remove("hidden");
        editBtn.classList.add("hidden");
        overlay.classList.add("hidden");
        addProduct.classList.add("hidden");
        resetInput();
    };
}
//===================================== Categories =============================


