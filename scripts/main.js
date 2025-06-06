"use strict"

// TODO: Скидки
// TODO: Оставить чаевые
// TODO: Мероприятия
// TODO: Отзыв о работнике

// НАЧАЛО - Содержимое этого блока можно редактировать чтобы менять информацию на сайте

// Писать внутри кавычек ``
// Категория в меню пишется в формате "*Название категории" 
// После категории пишется список блюд/напитков в формате "Название блюда - цена"
// Если необходимо добавить описание к блюду/напитку пишется в формате "-Какое-то описание"
var textMenuFood = `
    *Салаты
Теплый салат со свининой - 480
Хрустящий баклажан с креветкой и черри - 480
Цезарь с курицей/креветками - 450/580


 *Супы
Куриный бульон с жареным цыпленком - 350
Том Ям - 540
Солянка - 450


    *Кесадилья
Кесадилья с креветками - 560
Кесадилья с курицей - 460
Кесадилья с говядиной - 480

   
    *Горячие блюда
Курочка по-кавказски - 500
Креветки Пиль-Пиль - 740
Креветки от Шефа - 810
Стейк из свинной шеи с овощным салатом и картофельными дольками - 650


    *Что-то хлебное
"ОйБой Бургер" с картофелем фри - 510
Тру Бургер с картофелем фри - 590
Сэндвич с курицей и картофелем фри - 510



 
    *Закуски / Гарниры
Пивная тарелка - 600
Фри с кетчупом - 190
Картофельные дольки - 180
Нагетсы - 250
Куриные крылья по-азиатски- 500
Куриные крылья в соусе барбекю - 500

`;

var textMenuDrink = `
    *Авторский чай (600/900 мл)
    Облепиховый - 300/400
    -Чай сенча, облепиха, сироп бузины, розмарин
    Израильские ночи - 300/400
    -Чай ку цао, чай анчан, орегано, сироп банан, лимон
  

    *Чай (600/900 мл)
"Земляничный Улун"  - 300/400
-Китайский улун, собранный на плантациях провинции Фуцзянь, с добавлением кусочков земляники.
"Летняя Беседа" - 200/300
-Натуральная травяная смесь, которая не содержит ничего лишнего, исключительно натуральные листочки мяты и благоухающие цветки липы
"Танец Единорога"  - 200/300
-Зеленый чай с плодами можжевельника, куосчками персика и ананаса, листьями брусники и лепестками розы.
"Английская Королева" - 200/300
-Черный цейлонский чай с лепестками чайной розы, кусочками клубники и ягодами ежевики. С ярким вкусом клубники и нежным ароматом розы.
"Дикая Вишня" - 200/300
-Душистый купаж черного чая с вишней, листьями грецкого ореха и ягодами сушеной клюквы со сладким, чуть пряным вкусом и насыщенным ароматом сочных ягод.
"Ассам" - 200/300
-Индийский чай ассам голд меет выраженный вкус и аромат. Его вкус обладает насыщенностью и терпкостью, но без горечи. Ассам мокалбари улучшает работоспособность и мыслительную деятельность и улучшает обмен веществ 
"Зеленый с жасмином" - 200/300
-Зеленый жасминовый чай из провинции Хуннань, собираемый на горных плантациях с мая по октябрь. Производится из нежных верхних листьев чайного куста, покрытых белым пухом, обладает долгоиграющим послевкусием
"Сенча" - 200/300
-Классический китайский зеленый чай, обладающий слaдковатым, чуть вяжущим вкусом и нежным свeжим аpoматом. В отличие от китайских разновидностей зеленого чая, сенча содержит меньше кoфеина и тaнина, поэтому оказывает деликатное действие на организм и практически не имеет противопоказаний
Чай фруктовый "Нахальный фрукт" - 200/300
-Красивый и полезный фруктовый микс на основе лепестков гибискуса с добавлением ягод вишни, шиповника, кусочками яблока и цукатами ананаса. Яркий и насыщенный вкус с легкой кислинкой освежает и бодрит, а сочно-гранатовый цвет настоя и аромат ягод и тропических фруктов поднимает настроение
"Дворцовый Пуэр" - 300/400
-Аромат чая древесный с карамельной сладостью и нотками топленого молока. Вкус чая "чистый", густой, мягкий, кофейный с оттенками какао, напоминает горький шоколад и легкая древесность на втором плане. Совершенно отсутствует, привычная для шу пуэров, горечь. Нефтяной настой с гранатовым оттенком
"Да Хун Пао" - 300/400
-Да Хун Пао является одним из самых знаменитых китайских чаев. Улун имеет глубокий аромат прожаренного на углях чая и насыщенный яркий вкус с бархатным послевкусием. Оказывает расслабляющий и успокаивающий эффект, улучшает эмоциональное состояние
Чай зеленый листовой "Улун Те Гуань Инь" - 300/400
-Китайский листовой зеленый чай  улучшающий настроение , снимает усталость, обогащает организм витаминами, способен бодрить как кофе, обладает тонизирующим эффектом. Способствует похудению, содержит антиоксиданты для омолаживающего эффекта.
"Манговый Улун" - 300/400
-Полуферментированный листовой фруктовый напиток производимый в Китае. Классический вкус улуна смешивается с ярким вкусом сочного манго. Оолонг полезен для здорровья, способствует укреплению имунитетаи очищению организма. Обладает эффектом детоксикации.
Гречишный чай "Ку Цяо" - 300/400
-Производится из семян татарской черной гречихи. Содержит витамины А, Е, В и др. и минералы - йод, кальций, кремний железо, марганец, натрий, фосфор, медь, цинк, фтор, калий, магний. Чай препятствует образованию тромбов, развитию атеросклероза, выводит шлаки, токсины и избыток сол из организма. Нормализирует работу ЖКТ и уровень сахара. Снимает усталость и повышает интелектуальные способности. 


   
    
    *Пиво 
Grotwerg Bayerisch Hell 0,5L - 350
-Фильтрованное пастеризованное светлое (германия)
Grotwerg AlkoholFrei 0,5L - 300
-Фильтрованное пастеризованное светлое (германия)
Grotwerg Weisbier 0,5L - 350
-Пшеничное нефильтрованное неосветленное пастеризованное светлое (германия)
St.Pierre  White-Blanche 0,5L - 350
-Пшеничное светлое пастеризованное нефильтрованное неосветленное (Нидерланды)
Krombacher Pils 0,5L - 350
-Светлое пастеризованное фильтрованное (Германия)
Palm 0,5L - 350
-Темное пастеризованное фильтрованное (Бельгия)
Steinbrau Edel Hell 0,5L - 350
- Светлое фильтрованное пастеризованное (Германия)
Steinbrau Edel Weiss 0,5L - 350
- Светлое нефильтрованное неосветленное пастеризованное (Германия)
Velka Pinta Pilsner 0,5L - 350
- Светлое фильтрованное пастеризованное (Чехия)
Erdinger Dunkel 0,5L - 350
-Темное пшеничное непастеризованное нефильтрованное неосветленное  (Германия)
 Grossmeister Lager Beer 0,5L - 350
-Светлое фильтрованное пастеризованное (Нидерланды)
Otto Von Schrodder Hefeweizen - 350
-Пшеничное светлое нефильтрованное неосветленное пастеризованное (Германия)



    
    
    
       
    *Сидр/Медовуха 
Медовуха "Рагнарек" (Цитрусовая) 0,5L - 350
    -Напиток брожения пастеризованный нефильтрованный неосветленный натуральный
Медовуха "Кровь Ётуна" (Ежевичная) 0,5L - 350
       -Напиток брожения пастеризованный нефильтрованный неосветленный натуральный
 Медовуха "Огненный Великан Сурт" (Облепиховая) 0,5L - 350
    -Напиток брожения пастеризованный нефильтрованный неосветленный натуральный
Медовуха "Поцелуй Фрейи" (Цветочный Мед) 0,5L - 350
       -Напиток брожения пастеризованный нефильтрованный неосветленный натуральный
Сидр "Бессмертие Идунн" (Яблочный) 0,5L - 350
    -Сидр газированный полусладкий 
 Медовуха "Кровь Валькирий" (Вишневая) 0,5L - 350
    -Напиток брожения пастеризованный нефильтрованный неосветленный натуральный
Медовуха "Мощь Берсерка" (Малиновая) 0,5L - 350
    -Напиток брожения пастеризованный нефильтрованный неосветленный натуральный
   
    *Вода/Соки
    Сок 1000мл в ассортименте - 350
    Добрый "Кола" 330мл - 150
    Добрый "Манго-Маракуйя" 330мл - 150
    Добрый "Апельсин" 330мл - 150
    Добрый "Без сахара" 330мл - 150
    Evervess "Кола" 330 мл - 150
    Bon Aqva газ. 500мл - 100
    Rich 500мл - 180
    Burn 449мл - 250

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

// Для подключения к Wifi
var wifiName = "ForestWifi";
var wifiPassword = "forest20";

// Стоимость кальянов
var hookahPrices = {
    "Классическая чаша": "1200", 
    "WTO / Bonche / Tangiers / Satyr Platinum Collection": "1500",
    "Фруктовая чаша": "1700",   
    "Забивка с собой": "600",
    "Уголь 12 штук": "200",      
};

// КОНЕЦ - Остальное трогать нельзя ни в коем случае

var menuFood = [];

var menuDrink = [];

var videoElement = null;

function main() {
    menuFood = parseMenu(textMenuFood);
    menuDrink = parseMenu(textMenuDrink);

    window.addEventListener('load', onLoadWindow);
    window.addEventListener('touchstart', onTouchstart);
}

function onLoadWindow() {
    fillHookahMenuList(hookahPrices);
    fillFoodAndDrinkMenuList(menuFood, '.menu-food');
    fillFoodAndDrinkMenuList(menuDrink, '.menu-drink');
    fillWifiData(wifiName, wifiPassword);

    var connectWifiButtonElement = window.document.querySelector(".header-connect-wifi-button");
    connectWifiButtonElement.addEventListener("click", onConnectWifiButtonElementClick);

    var shadowElement = window.document.querySelector(".shadow");
    shadowElement.addEventListener("click", onShadowElementClick);

    var menuCategoryHeaderElements = window.document.querySelectorAll('.menu-category-header');
    for (var i = 0; i < menuCategoryHeaderElements.length; i++) {
        var element = menuCategoryHeaderElements[i];
        element.addEventListener('click', onMenuCategoryHeaderElementClick);
    }
}

function onConnectWifiButtonElementClick() {
    var shadowElement = window.document.querySelector(".shadow");
    shadowElement.classList.add("shadow_showed");

    var dialogConnectWifiElement = window.document.querySelector(".dialog-connect-wifi");
    dialogConnectWifiElement.classList.add("dialog-connect-wifi_showed");
}

function onShadowElementClick() {
    var dialogConnectWifiElement = window.document.querySelector(".dialog-connect-wifi");
    dialogConnectWifiElement.classList.remove("dialog-connect-wifi_showed");

    var shadowElement = window.document.querySelector(".shadow");
    shadowElement.classList.remove("shadow_showed");
}

function onMenuCategoryHeaderElementClick(event) {
    var target = event.target;
    
    var categoryElement = target;
    while (!categoryElement.classList.contains('menu-category')) {
        categoryElement = categoryElement.parentElement;
    }

    if (categoryElement.classList.contains('menu-category_hidden')) {
        categoryElement.classList.remove('menu-category_hidden');
    } else {
        categoryElement.classList.add('menu-category_hidden');
    }
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
    videoElement.style.opacity = "0.8";

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

function fillWifiData(wifiName, wifiPassword) {
    var wifiNameElement = window.document.querySelector('.dialog-connect-wifi-name');
    var wifiPasswordElement = window.document.querySelector('.dialog-connect-wifi-password');

    wifiNameElement.innerHTML = wifiNameElement.innerHTML.replace("{0}", wifiName);
    wifiPasswordElement.innerHTML = wifiPasswordElement.innerHTML.replace("{0}", wifiPassword);
}

function fillHookahMenuList(hookahPrices) {
    var listElement = window.document.querySelector('.menu-hookah .menu-list');
    
    for (var name in hookahPrices) {
        var price = hookahPrices[name];

        var itemElement = window.document.createElement('li');
        itemElement.className = 'menu-item';
        itemElement.innerHTML = 
            '<div class="menu-item-name">' + name + '</div>' +
            '<div class="menu-item-price">' + price + '</div>';

        listElement.appendChild(itemElement);
    }
}

function fillFoodAndDrinkMenuList(menu, containerClassName) {
    var listElement = window.document.querySelector(containerClassName + ' .menu-list');
    
    for (var i = 0; i < menu.length; i++) {
        var category = menu[i];
        var name = category.name;
        var items = category.items;

        var categoryElement = window.document.createElement('li');
        categoryElement.className = 'menu-category menu-category_hidden';

        var categoryHeaderElement = window.document.createElement('h3');
        categoryHeaderElement.className = 'menu-category-header';
        categoryHeaderElement.innerHTML = 
            '<div class="menu-category-header-text">' + name + '</div>' +
            '<div class="menu-category-header-icon"></div>';

        categoryElement.appendChild(categoryHeaderElement);

        fillFoodAndDrinkMenuCategoryList(items, categoryElement);

        listElement.appendChild(categoryElement);
    }
}

function fillFoodAndDrinkMenuCategoryList(items, categoryElement) {
    var itemListElement = window.document.createElement('ul');
    itemListElement.className = 'menu-list';

    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var name = item.name;
        var price = item.price;
        var description = item.description;

        var itemElement = window.document.createElement('li');
        itemElement.className = 'menu-item';

        var itemFirstLineElement = window.document.createElement('div');
        itemFirstLineElement.className = 'menu-item-first-line';
        itemFirstLineElement.innerHTML = 
            '<div class="menu-item-name">' + name + '</div>' +
            '<div class="menu-item-price">' + price + '</div>';
        
        itemElement.appendChild(itemFirstLineElement);

        if (description != null) {
            var itemSecondLineElement = window.document.createElement('div');
            itemSecondLineElement.className = 'menu-item-second-line';
            itemSecondLineElement.innerHTML = 
                '<div class="menu-item-description">' + description + '</div>';

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
