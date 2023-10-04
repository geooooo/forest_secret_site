"use strict"

// НАЧАЛО - Содержимое этого блока можно редактировать чтобы менять информацию на сайте

// Писать внутри кавычек ``
// Категория в меню пишется в формате "*Название категории" 
// После категории пишется список блюд/напитков в формате "Название блюда - цена"
// Если необходимо добавить описание к блюду/напитку пишется в формате "-Какое-то описание"
var textMenu = `
    *Салаты
    Цезарь с креветкой - 400
    Цезарь с курицей - 350
    Греческий - 300
    Теплый салат с курицей, сладким перцем и черри - 300
    *Пасты
    Карбонара - 330
    Фарфале с курицей и грибами и соусом тирияки - 350
    Удон с курицей - 350
    Картофельные ньокки в сливочно-грибном соусе - 300
    Картофельные ньокки с креветками и соусом песто - 450
    *Рис
    Рис с мясом по-индонезийски - 330
    *Сэндвичи
    Сэндвич с курицей и фри - 350
    Сэндвич с ветчиной, беконом и фри - 350
    *Бургеры
    Бургер с говяжей котлетой и фри - 380
    Бургер с куриной грудкой и фри - 350
    *Кесадилья
    Кесадилья (курица/говядина) с фри - 360/380
    Кесадилья с креветками и фри - 450
    Кесадилья с грибами, помидорами, сыром и фри - 350
    *Закуски / Гарниры
    Гренки - 150
    Пивная тарелка - 450
    Картофель фри - 150
    Нагетсы 8 штук - 200
    *Авторский чай (600/900 мл)
    Облепиховый - 300/400
    -Чай сенча, облепиха, сироп бузины, розмарин
    Израильские ночи - 300/400
    -Чай ку цао, чай анчан, орегано, сироп банан, лимон
    Ягодный чили - 300/400
    -Апельсин, чай нахальный фрукт, чили, бадьян
    *Чай (600/900 мл)
    Чай в ассортименте - 200/300
    Китайский чай - 300/400
    *Напитки
    Сок 1000мл в ассортименте - 350
    Добрый/Evervest в асс. 330мл - 120
    Bon Aqva 500мл - 100
    Andrenalin Rush / E-on / Burn 449мл - 250
    *Лимонады
    Адам и Ева 500мл - 200
    -Сироп сенча, яблочный сок, имбирный тоник
    Земля обетованная 500мл - 200
    -Кординал алоэ-базилик, содовая
    Тетя Сара 500мл - 200
    -Сироп лаванда, индиан тоник
    Мечта Моисея 500мл - 200
    -Грейпфрут, лимон, апельсин
`;

// Стоимость кальянов
var hookahPrices = {
    "Классическая чаша": 900, 
    "WTO / Bonche / Tangiers": 1200,
    "Фруктовая чаша": 1400,   
    "Забивка с собой": 400,
    "Уголь 12 штук": 200,      
};

// КОНЕЦ - Остальное трогать нельзя ни в коем случае

var menu = [];

var videoElement = null;

function main() {
    menu = parseMenu(textMenu);

    window.addEventListener('load', onLoadWindow);
    window.addEventListener('touchstart', onTouchstart);
}

function onLoadWindow() {
    fillHookahMenuList(hookahPrices);
    fillFoodMenuList(menu);
}

function onTouchstart() {
    window.removeEventListener('touchstart', onTouchstart);

    videoElement = window.document.createElement('video');

    videoElement.addEventListener('ended', onVideoEnded);

    videoElement.style.position = 'fixed';
    videoElement.style.top = "0%";
    videoElement.style.bottom = "100%";
    videoElement.style.left = "0%";
    videoElement.style.right = "100%";
    videoElement.style.height = "100%";
    videoElement.style.width = "100%";
    videoElement.style.zIndex = 100500;
    videoElement.style.objectFit = "cover";
    videoElement.style.pointerEvents = "none";
    videoElement.style.mixBlendMode = "lighten";

    videoElement.src = 'videos/smoke.mp4';
    videoElement.type = 'video/mp4';
    videoElement.playbackRate = 2;
    videoElement.volume = 0;
    videoElement.currentTime = 0;
    videoElement.playsInline = true;
    videoElement.loop = false;
    videoElement.controls = false;
    videoElement.muted = false
    videoElement.autoplay = false;
    videoElement.preload = "auto";

    var mainElement = window.document.querySelector('.main');
    mainElement.appendChild(videoElement);

    videoElement.play();
}

function onVideoEnded() {
    var mainElement = window.document.querySelector('.main');

    mainElement.removeChild(videoElement);
    videoElement = null;
}

function fillHookahMenuList(hookahPrices) {
    var hookahMenuListElement = window.document.querySelector('.menu-hookah-list');
    
    for (var name in hookahPrices) {
        var price = hookahPrices[name];

        var itemNameElement = window.document.createElement('div');
        itemNameElement.className = 'menu-hookah-item-name';
        itemNameElement.innerText = name;

        var itemPriceElement = window.document.createElement('div');
        itemPriceElement.className = 'menu-hookah-item-price';
        itemPriceElement.innerText = price;

        var itemElement = window.document.createElement('li');
        itemElement.className = 'menu-hookah-item';

        itemElement.appendChild(itemNameElement);
        itemElement.appendChild(itemPriceElement);

        hookahMenuListElement.appendChild(itemElement);
    }
}

function fillFoodMenuList(menu) {
    var foodMenuListElement = window.document.querySelector('.menu-food-list');
    
    for (var i = 0; i < menu.length; i++) {
        var category = menu[i];
        var name = category.name;
        var items = category.items;

        var categoryElement = window.document.createElement('li');
        categoryElement.className = 'menu-food-category';

        var categoryHeaderElement = window.document.createElement('h3');
        categoryHeaderElement.className = 'menu-food-category-header';
        categoryHeaderElement.innerText = name;

        categoryElement.appendChild(categoryHeaderElement);

        fillFoodMenuCategoryList(items, categoryElement);

        foodMenuListElement.appendChild(categoryElement);
    }
}

function fillFoodMenuCategoryList(items, categoryElement) {
    var itemListElement = window.document.createElement('ul');
    itemListElement.className = 'menu-food-list';

    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var name = item.name;
        var price = item.price;
        var description = item.description;

        var itemNameElement = window.document.createElement('div');
        itemNameElement.className = 'menu-food-item-name';
        itemNameElement.innerText = name;

        var itemPriceElement = window.document.createElement('div');
        itemPriceElement.className = 'menu-food-item-price';
        itemPriceElement.innerText = price;

        if (description != null) {
            var itemDescriptionElement = window.document.createElement('div');
            itemDescriptionElement.className = 'menu-food-item-description';
            itemDescriptionElement.innerText = description;
        }

        var itemFirstLineElement = window.document.createElement('div');
        itemFirstLineElement.className = 'menu-food-item-first-line';

        itemFirstLineElement.appendChild(itemNameElement);
        itemFirstLineElement.appendChild(itemPriceElement);

        if (description != null) {
            var itemSecondLineElement = window.document.createElement('div');
            itemSecondLineElement.className = 'menu-food-item-second-line';

            itemSecondLineElement.appendChild(itemDescriptionElement);
        }

        var itemElement = window.document.createElement('li');
        itemElement.className = 'menu-food-item';

        itemElement.appendChild(itemFirstLineElement);

        if (description != null) {
            itemElement.appendChild(itemSecondLineElement);
        }
        
        itemListElement.appendChild(itemElement);
    }

    categoryElement.appendChild(itemListElement);
}

function parseMenu(textMenu) {
    var menu = [];
    var lines = textMenu.split('\n');
    var category = {
        name: "",
        items: [],
    };

    for (var i = 0; i < lines.length; i++) {
        var line = lines[i].trim();
        
        if (line.length === 0) {
            continue;
        }

        if (line[0] === '*') {
            if (category.items.length > 0) {
                menu.push(category);
            }

            category = { 
                name: line.substring(1), 
                items: [],
            };
        } else if (line[0] === '-') {
            var description = line.substring(1);
            var lastItemIndex = category.items.length - 1;
            category.items[lastItemIndex]['description'] = description;
        } else {
            category.items.push(parseMenuItem(line));
        }
    }

    if (category.items.length > 0) {
        menu.push(category);
    }

    return menu;
}

function parseMenuItem(textItem) {
    var separatorIndex = textItem.lastIndexOf('-');
    var name = textItem.substring(0, separatorIndex).trim();
    var price = textItem.substring(separatorIndex + 1).trim();

    return {
        name: name,
        price: price,
    };
}

main();