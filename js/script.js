document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.getElementById("searchIcon");
    const searchInput = document.getElementById("searchInput");
    const searchForm = document.getElementById("searchForm");

    // Ketika ikon search diklik, tampilkan input field dengan animasi
    searchIcon.addEventListener("click", function () {
        searchForm.classList.add("bg-white", "ring-2", "ring-black", "w-52", "px-4");
        searchInput.classList.remove("w-0", "opacity-0");
        searchInput.classList.add("w-40", "opacity-100");

        // Geser ikon ke kiri agar tidak bertabrakan dengan input
        searchIcon.classList.add("translate-x-[-70px]");

        searchInput.focus();
    });

    // Klik di luar searchContainer untuk menutup input
    document.addEventListener("click", function (event) {
        if (!searchForm.contains(event.target) && event.target !== searchIcon) {
            searchForm.classList.remove("bg-white", "ring-2", "ring-black", "w-52", "px-4");
            searchInput.classList.add("w-0", "opacity-0");
            searchInput.classList.remove("w-40", "opacity-100");

            // Kembalikan ikon ke posisi semula
            searchIcon.classList.remove("translate-x-[-70px]");
        }
    });

    // Fungsi untuk menangani pencarian
    function redirectToPage() {
        let userInput = searchInput.value.trim().toLowerCase();

        let pages = {
            "favorit"   : "Favorit.html",
            "cart"      : "Cart.html",
            "collection": "Collection.html",
            "shirt"     : "Buy _Shirt.html",
            "hoodie"    : "Buy_Hoodie.html",
            "sweater"   : "Buy_Hoodie.html",
            "jacket"    : "Buy_Jacket.html",
            "outwear"   : "Buy_Jacket.html",
            "tank top"  : "Buy_TankTop.html",
            "sleeveless": "Buy_TankTop.html",
            "blouse"    : "Buy_Blouse.html",
            "tunic"     : "Buy_Blouse.html",
            "pants"     : "BOTTOMS_Pants.html",
            "shorts"    : "BOTTOMS_Shorts.html",
            "jeans"     : "BOTTOMS_Jeans.html",
            "skirt"     : "BOTTOMS_Skirt.html",
            "leggings"  : "BOTTOMS_Leggings.html",
            "headwear"  : "Nav_Headwear.html",
            "footwear"  : "Nav_Footwear.html",
            

        };

        if (userInput in pages) {
            window.location.href = pages[userInput];
        } else {
            alert("Halaman tidak ditemukan!");
        }
    }

    // Menangani submit form
    searchForm.addEventListener("submit", function(event) {
        event.preventDefault();
        redirectToPage();
    });

    // Menangani Enter pada input field
    searchInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            redirectToPage();
        }
    });
});


