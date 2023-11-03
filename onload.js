// Afficher Data in Item
const getData = document.getElementById("getData");
const Datalist = document.getElementById("listBook");
function AfficheData() {
    if (localStorage.getItem("books") == null) {
        bookData = [];
    } else {
        bookData = JSON.parse(localStorage.getItem("books"));
    }

    getData.innerHTML = "";
    Datalist.innerHTML = "";
    bookData.forEach((book, index) => {
        let convertImg = "data:image/png;base64," + book.imagesBook;
        getData.innerHTML += `
        <!-- ==== Card_Books ===== -->
        <div class="card border-2 p-5">
            <div class="img flex justify-center">
                <img
                    src="${convertImg}"
                    alt="Book"
                    class="w-[200px] h-[315px]" />
            </div>
     
            <div class="text mb-3 mt-5">
                <span
                    class="text-secondary uppercase tracking-widest font-medium text-xl "
                    >Book Number : ${index + 1}</span
                >
                <p class="text-3xl font-medium py-2">
                ${book.title}
                </p>
            </div>
                <div class="text">
                    <span
                        class="text-primary tracking-widest text-xl font-normal"
                        >Categorie : ${book.categorie}</span
                >
                <div>
                    <span class="text-2xl font-medium"
                        >prix : ${book.prix} Dhs.</span
                    >
                </div>
                <div class="mt-4">
                    <h5 class="text-2xl  font-medium">Description</h5>
                    <p class="text-xl text-gray-600">
                        ${book.description}
                    </p>
                </div>
                <div class="flex items-center mt-4">
                    <a class="group w-[100%]" href="#"
                        ><i
                            class="fa-solid fa-store text-xl group-hover:text-secondary cursor-pointer text-gray-600"></i
                        ><span
                            class="text-xl ml-2 group-hover:text-secondary"
                            >Add to Card</span
                        ></a
                    >
                    <span class=""
                        ><i
                            class="fa-regular fa-heart text-2xl cursor-pointer hover:text-secondary transition duration-150 text-gray-500"></i
                    ></span>
                </div>
            </div>
        </div>
        <!-- ==== Card_Books ===== -->
       
       `;
        Datalist.innerHTML += `
        <div class="bg-white p-5">
                                <div
                                    class="card border-2 mb-5 p-5 flex flex-col xl:flex-row xl:p-8 bg-white">
                                    <div class="img flex justify-center">
                                    <img
                                        src="${convertImg}"
                                        alt="Book"
                                        class="w-[250px] h-[350px]" />
                                </div>
                                    <div class="text xl:px-8 flex-grow">
                                        <div class="text my-5">
                                            <span
                                                class="text-secondary uppercase  font-medium text-xl"
                                                >Book Number ${index + 1}</span
                                            >
                                            <p class="text-3xl font-medium py-2">
                                            ${book.title}
                                            </p>
                                        </div>
                                        <div class="text">
                                        <span
                                            class="text-primary tracking-widest text-xl font-normal"
                                            >Categorie : ${book.categorie}</span
                                    >
                                    <div>
                                        <span class="text-2xl font-medium"
                                            >prix : ${book.prix} Dhs.</span
                                        >
                                    </div>
                                    <div class="mt-4">
                                        <h5 class="text-2xl  font-medium">Description</h5>
                                        <p class="text-2xl text-gray-600">
                                            ${book.description}
                                        </p>
                                    </div>
                                            <div class="flex items-center mt-4">
                                                <a
                                                    class="group w-[100%]"
                                                    href="#"
                                                    ><i
                                                        class="fa-solid fa-store text-xl group-hover:text-secondary cursor-pointer text-gray-600"></i
                                                    ><span
                                                        class="text-xl ml-2 group-hover:text-secondary"
                                                        >Add to Card</span
                                                    ></a
                                                >
                                                <span class=""
                                                    ><i
                                                        class="fa-regular fa-heart text-2xl cursor-pointer hover:text-secondary transition duration-150 text-gray-500"></i
                                                ></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
       
       `;
    });
    // =================== Dsiplay Categories in Side bar
    const sideBarCat = document.getElementById("sideBarCats");

    if (localStorage.getItem("categories") === null) {
        categories = [];
    } else {
        categories = JSON.parse(localStorage.getItem("categories"));
    }

    sideBarCat.innerHTML = "";
    categories.forEach((categorie) => {
        sideBarCat.innerHTML += `
    <li class="py-1">
    <button value="" class="text-xl  hover:text-secondary duration-300 transition-all">${categorie.name}</button>
    </li>

    `;
    });
}

// Search by Title
const searchBtn = document.getElementById("searchField");
let searchArr = [];

searchBtn.addEventListener("keyup", () => {
    searchArr = [];
    if (localStorage.getItem("books") == null) {
        bookData = [];
    } else {
        bookData = JSON.parse(localStorage.getItem("books"));
    }

    for (let i = 0; i < bookData.length; i++) {
        if (bookData[i].title === searchField.value) {
            searchArr.push(bookData[i]);
        }
    }
    if (searchBtn.value == "" || searchBtn.value.length == null) {
        searchArr = [];
        AfficheData();
    } else {
        SearchDisplay(getData);
    }
});

window.addEventListener("load", AfficheData());

function SearchDisplay(parent) {
    parent.innerHTML = "";
    searchArr.forEach((book, index) => {
        let convertImg = "data:image/png;base64," + book.imagesBook;
        parent.innerHTML += `
    <!-- ==== Card_Books ===== -->
    <div class="card border-2 p-5">
        <div class="img flex justify-center">
            <img
                src="${convertImg}"
                alt="Book"
                class="w-[200px] h-[315px]" />
        </div>
 
        <div class="text mb-3 mt-5">
            <span
                class="text-secondary uppercase tracking-widest font-medium text-xl "
                >Book Number : ${index + 1}</span
            >
            <p class="text-3xl font-medium py-2">
            ${book.title}
            </p>
        </div>
            <div class="text">
                <span
                    class="text-primary tracking-widest text-xl font-normal"
                    >Categorie : ${book.categorie}</span
            >
            <div>
                <span class="text-2xl font-medium"
                    >prix : ${book.prix} Dhs.</span
                >
            </div>
            <div class="mt-4">
                <h5 class="text-2xl  font-medium">Description</h5>
                <p class="text-xl text-gray-600">
                    ${book.description}
                </p>
            </div>
            <div class="flex items-center mt-4">
                <a class="group w-[100%]" href="#"
                    ><i
                        class="fa-solid fa-store text-xl group-hover:text-secondary cursor-pointer text-gray-600"></i
                    ><span
                        class="text-xl ml-2 group-hover:text-secondary"
                        >Add to Card</span
                    ></a
                >
                <span class=""
                    ><i
                        class="fa-regular fa-heart text-2xl cursor-pointer hover:text-secondary transition duration-150 text-gray-500"></i
                ></span>
            </div>
        </div>
    </div>
    <!-- ==== Card_Books ===== -->
   
   `;
    });
}
