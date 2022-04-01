    var cartProductsForBasket = JSON.parse(localStorage.getItem("cartStorageData"))||0;

    document.getElementById("btn").addEventListener("click", function () {
    console.log("Adding to basket");
    if (cartProductsForBasket.length >= 0) {
        console.log("basket");
        window.location.href = "./basket.html";
    }
    });

    

    document.getElementById("menButton").addEventListener("click", function () {
    window.location.href = "./men.html";
    });
