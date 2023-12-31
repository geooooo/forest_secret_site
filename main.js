"use strict"

// НАЧАЛО - Содержимое этого блока можно редактировать чтобы менять информацию на сайте

// Писать внутри кавычек ``
// Категория в меню пишется в формате "*Название категории" 
// После категории пишется список блюд/напитков в формате "Название блюда - цена"
// Если необходимо добавить описание к блюду/напитку пишется в формате "-Какое-то описание"
var textMenuFood = `
    *Салаты
    Цезарь с креветкой - 450
    Цезарь с курицей - 400
    Греческий - 350
    Теплый салат с курицей, сладким перцем и черри - 350

    *Пасты
    Карбонара - 380
    Фарфале с курицей и грибами и соусом тирияки - 380
    Удон с курицей - 390

    *Рис
    Рис с мясом по-индонезийски - 370

    *Сэндвичи
    Сэндвич с курицей и фри - 380
    Сэндвич с ветчиной, беконом и фри - 380

    *Бургеры
    Бургер с говяжей котлетой и фри - 400
    Бургер с куриной грудкой и фри - 380

    *Кесадилья
    Кесадилья (курица/говядина) с фри - 380/400
    Кесадилья с креветками и фри - 450

    *Закуски / Гарниры
    Гренки - 150
    Пивная тарелка - 450
    Картофель фри - 150
    Нагетсы 9 штук - 200
`;

var textMenuDrink = `
    *Авторский чай (600/900 мл)
    Облепиховый - 300/400
    -Чай сенча, облепиха, сироп бузины, розмарин
    Израильские ночи - 300/400
    -Чай ку цао, чай анчан, орегано, сироп банан, лимон
    Ягодный чили - 300/400
    -Апельсин, чай нахальный фрукт, чили, бадьян

    *Чай (600/900 мл)
    Ассам - 200/300
    -Индийский чай ассам голд меет выраженный вкус и аромат. Его вкус обладает насыщенностью и терпкостью, но без горечи. Ассам мокалбари улучшает работоспособность и мыслительную деятельность и улучшает обмен веществ 
    Саган-Дайля - 300/400
    -Популярный в Прибайкалье травяной напиток, ароматный и заряжающий энергией. В Сибири, на Алтае, в Монголии и Тибете о его воздействии на организм человека ходят легенды: тибетские мудрецы утверждают, что отвар саган-дайля продлевает жизнь, а в Бурятии этот чай традиционно пьют шаманы. Считается, что он помогает улучшить работу сердечно-сосудистой системы, нормализовать давление и улучшить общее состояние организма. Саган-дайля — это настоящая эликсир молодости и долголетия.
    На ночь - 200/300
    -Травяная смесь с успокаивающим свойством свежим лимонным оттенком, благодаря мяте и мелисе настой обладает бактерицидными и антисептическими свойствами. Укрепляет иммунитет и успокаивает нервы
    Зеленый с жасмином - 200/300
    -Зеленый жасминовый чай из провинции Хуннань, собираемый на горных плантациях с мая по октябрь. Производится из нежных верхних листьев чайного куста, покрытых белым пухом, обладает долгоиграющим послевкусием
    Карельский чай - 200/300
    -Смесь зеленого чая Сенча и черного цейлонского чая со вкусом и ароматом спелых сочных ягод. С добавлением листа брусники, ягод смородины, клубники, малины, барбариса, черноплодной рябины. Украшен лепестками календулы
    Сенча - 200/300
    -Классический китайский зеленый чай, обладающий слaдковатым, чуть вяжущим вкусом и нежным свeжим аpoматом. В отличие от китайских разновидностей зеленого чая, сенча содержит меньше кoфеина и тaнина, поэтому оказывает деликатное действие на организм и практически не имеет противопоказаний
    Ку Цяо "Бабл Гам" - 300/400
    -Гречишный чай «Бабл-гам» в сухом виде представляет собой смесь зерен гречихи и ярких маленьких красных сердечек со сладким ароматом жевательной резинки, такой как “Love is”
    Чай фруктовый "Глинтвейн" - 200/300
    -Чай Фруктовый «Глинтвейн» включает в себя кусочки яблок, листовой, рассыпной каркадэ, кусочки корицы, кусочки имбиря, бадьян, кардамон, гвоздику, кусочки апельсина с цедрой. Из такого богатого состава получается очень вкусный, ароматный чайный напиток на основе каркаде, который содержит массу полезных витаминов и микроэлементов.
    Нахальный фрукт - 200/300
    -Красивый и полезный фруктовый микс на основе лепестков гибискуса с добавлением ягод вишни, шиповника, кусочками яблока и цукатами ананаса. Яркий и насыщенный вкус с легкой кислинкой освежает и бодрит, а сочно-гранатовый цвет настоя и аромат ягод и тропических фруктов поднимает настроение
    Дворцовый Пуэр - 300/400
    -Аромат чая древесный с карамельной сладостью и нотками топленого молока. Вкус чая "чистый", густой, мягкий, кофейный с оттенками какао, напоминает горький шоколад и легкая древесность на втором плане. Совершенно отсутствует, привычная для шу пуэров, горечь. Нефтяной настой с гранатовым оттенком
    Манговый Улун - 300/400
    -Классический Те Гуань Инь, собранный в провинции Фуцзянь. Содержит сушеное натуральное манго. Богат витаминами и антиоксидантами
    Летняя Беседа - 200/300
    -натуральная травяная смесь, которая не содержит ничего лишнего, исключительно натуральные листочки мяты и благоухающие цветки липы
    Да Хун Пао - 300/400
    -Да Хун Пао является одним из самых знаменитых китайских чаев. Улун имеет глубокий аромат прожаренного на углях чая и насыщенный яркий вкус с бархатным послевкусием. Оказывает расслабляющий и успокаивающий эффект, улучшает эмоциональное состояние
    Черный с имбирем и лимоном - 200/300
    -Купаж черного чая с кусочками имбиря, апельсиновой цедры, травы лимонника и медовыми гранулами
    Молочный Улун - 300/400
    -Отборный крупнолистовой сорт чая, характеризующийся средней ферментацией. Сырье для его производства собирают в высокогорьях Фуцзяни, провинции Аньси, Гуандун и на солнечном о. Тайвань
    Венецианская ночь - 200/300
    -Купаж черного чая с гибискусом, ягодами ежевики и красной смородины, кусочками клубники и лепестками красной розы
    
    *Пиво 
    Grotwerg Bayerisch Hell 0,5L - 300
    -Фильтрованное пастеризованное светлое (германия)
    Grotwerg AlkoholFrei 0,5L - 250
    -Фильтрованное пастеризованное светлое (германия)
    St.Pierre  Brown-Brune 0,5L - 300
   -Темное пастеризованное фильтрованное (Нидерланды)
   St.Pierre  White-Blanche 0,5L - 300р
    -Пшеничное светлое пастеризованное нефильтрованное неосветленное (Нидерланды)
    St.Pierre  Blond-Blonde 0,5L - 300р
    -Cветлое пастеризованное фильтрованное (Нидерланды)
    Grotwerg Weisbier 0,5L - 300р
    -Пшеничное нефильтрованное неосветленное пастеризованное светлое (германия)
    Velka Pinta Pilsner 0,568L - 300
    -Светлое пастеризованное фильтрованное (Чехия)
    Liebenweiss Hefe Weissbier 0,5L - 300
    -Пшеничное нефильтрованное неосветленное пастеризованное светлое (Германия)
    WelfBrau 0,5L- 300
    -Пшеничное нефильтрованное неосветленное пастеризованное светлое (Германия)
       
    *Сидр/Медовуха 
    Медовуха "Дыхание Одина" (Имбирный Эль) 0,5L - 300
    -Напиток брожения пастеризованный нефильтрованный неосветленный натуральный
    Сидр "Бессмертие Идунн" (Яблочный) 0,5L - 300
    -Сидр газированный полусладкий 
    Сидр "Проделки Локи" (Грушевый) 0,5L - 300р
    -Сидр газированный полусладкий 
    Медовуха "Мощь Берсерка" (Малиновая) 0,5L - 300
    -Напиток брожения пастеризованный нефильтрованный неосветленный натуральный
       Медовуха "Кровь Ётуна" (Ежевичная) 0,5L - 300р
    -Напиток брожения пастеризованный нефильтрованный неосветленный натуральный
    Медовуха "Огненный Великан Сурт" (Облепиховая) 0,5L - 300р
    -Напиток брожения пастеризованный нефильтрованный неосветленный натуральный
   
    *Вода/Соки
    Сок 900мл в ассортименте - 350
    Добрый "Кола" 330мл - 120
    Добрый "Манго-Маракуйя" 250мл - 100
    Добрый "Апельсин" 250мл - 100
    Добрый "Лимон-Лайм" 250мл - 100
    Добрый "Ваниль" 250мл - 100
    Добрый "Карамель" 250мл - 100
    Добрый "Без сахара" 250мл - 100
    Evervess "Итальянский Аперо" 330 мл - 120
    Evervess "Кола" 330 мл - 120
    Evervess "Индиан Тоник" 330 мл - 120
    Evervess "Имбирный Эль" 330 мл - 120
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
    "Классическая чаша": "1000", 
    "WTO / Bonche / Tangiers / Satyr Platinum Collection": "1300",
    "Фруктовая чаша": "1500",   
    "Забивка с собой": "400",
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

    var menuCategoryHeaderElements = window.document.querySelectorAll('.menu-category-header');
    for (var i = 0; i < menuCategoryHeaderElements.length; i++) {
        var element = menuCategoryHeaderElements[i];
        element.addEventListener('click', onMenuCategoryHeaderElementClick);
    }
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
