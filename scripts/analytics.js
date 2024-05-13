var events = {
    socialTgClick: "social-tg-click",
    socialInstClick: "social-inst-click",
    socialVkClick: "social-vk-click",
    reviewClick: "review-click",
    phoneClick: "phone-click",
    connectWifiClick: "connect-wifi-click",
    categoryClick: "category-click",
};

var dbAnalyticsSection = "analytics-v2";

var app;
var db;

function main() {
    if (!window.isEnableAnalytics) {
        return;
    }

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
    elementClick(events.socialTgClick);
}

function socialInstClick() {
    elementClick(events.socialInstClick);
}

function socialVkClick() {
    elementClick(events.socialVkClick);
}

function reviewClick() {
    elementClick(events.reviewClick);
}

function phoneClick() {
    elementClick(events.phoneClick);
}

function connectWifiClick() {
    elementClick(events.connectWifiClick);
}

function categoryClick(category, isOpen) {
    var time = getTime();
    var date = getDate();
    var ref = window.firebase.ref(db, dbAnalyticsSection + "/" + events.categoryClick + "/" + time);

    window.firebase.set(ref, {
        date: date,
        category: category,
        isOpen: isOpen,
    });
}

function elementClick(event) {
    var time = getTime();
    var date = getDate();
    var ref = window.firebase.ref(db, dbAnalyticsSection + "/" + event + "/" + time);
    
    window.firebase.set(ref, {
        date: date,
    });
}

function getDate() {
    return (new Date()).toString();
}

function getTime() {
    return Date.now();
}

main();