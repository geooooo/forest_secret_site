var events = {
    socialTgClick: "social-tg-click",
    socialInstClick: "social-inst-click",
    socialVkClick: "social-vk-click",
    reviewClick: "review-click",
    phoneClick: "phone-click",
    connectWifiClick: "connect-wifi-click",
    categoryClick: "category-click",
};

var app;
var db;

function main() {
    window.addEventListener('load', onLoadWindow);
}

function onLoadWindow() {
    initHandlers();

    app = window.firebase.initializeApp(window.firebase.config);
    db = window.firebase.getDatabase(app);
}

function initHandlers() {
    var tgElement = window.document.querySelector(".social-link-telegram");
    var instElement = window.document.querySelector(".social-link-instagram");
    var vkElement = window.document.querySelector(".social-link-vk");
    var reviewElement = window.document.querySelector(".review-link");
    var phoneElement = window.document.querySelector(".main-contacts-phonenumber");
    var wifiButtonElement = window.document.querySelector(".header-connect-wifi-button");
    var menuCategoryElements = window.document.querySelectorAll(".menu-category-header");

    tgElement.addEventListener("click", onTgElementClick);
    instElement.addEventListener("click", onInstElementClick);
    vkElement.addEventListener("click", onVkElementClick);
    reviewElement.addEventListener("click", onReviewElementClick);
    phoneElement.addEventListener("click", onPhoneElementClick);
    wifiButtonElement.addEventListener("click", onWifiButtonElementClick);
    menuCategoryElements.forEach(function(categoryElement) {
        categoryElement.addEventListener("click", onMenuCategoryElementClick);
    });
}

function onTgElementClick() {
    socialTgClick();
}

function onInstElementClick() {
    socialInstClick();
}

function onVkElementClick() {
    socialVkClick();
}

function onReviewElementClick() {
    reviewClick();
}

function onPhoneElementClick() {
    phoneClick();
}

function onWifiButtonElementClick() {
    connectWifiClick();
}

function onMenuCategoryElementClick(event) {
    var categoryHeaderElement = event.target;
    while (!categoryHeaderElement.classList.contains("menu-category-header")) {
        categoryHeaderElement = categoryHeaderElement.parentElement;
    }

    var parentElement = categoryHeaderElement.parentElement;

    var category = categoryHeaderElement.textContent.trim();
    var isOpen = !parentElement.classList.contains("menu-category_hidden");

    categoryClick(category, isOpen);
}

function socialTgClick() {
    increment(events.socialTgClick);
}

function socialInstClick() {
    increment(events.socialInstClick);
}

function socialVkClick() {
    increment(events.socialVkClick);
}

function reviewClick() {
    increment(events.reviewClick);
}

function phoneClick() {
    increment(events.phoneClick);
}

function connectWifiClick() {
    increment(events.connectWifiClick);
}

function categoryClick(category, isOpen) {
    var ref = window.firebase.ref(db, "analytics/" + events.categoryClick);

    window.firebase.get(ref).then(function(snapshot) {
        var categories = snapshot.val();
        var step = isOpen? 1 : 0;
        var count = (category in categories)? categories[category] + step : 1;
        
        categories[category] = count;
        
        window.firebase.set(ref, categories);
    });
}

function increment(event) {
    var ref = window.firebase.ref(db, "analytics/" + event);
    
    window.firebase.get(ref).then(function(snapshot) {
        var count = snapshot.val();
        
        window.firebase.set(ref, count + 1);
    });
}

main();