const slide = document.querySelectorAll('.combi-slide');
const leftBtn = document.querySelector('.left-arrow');
const rightBtn = document.querySelector('.right-arrow');

let slidePosition = 0;

rightBtn.addEventListener('click', ()=> {
    slidePosition += slide[0].offsetWidth;
    slide.forEach((item)=>{
        item.style.left = -slidePosition + 'px'
    })
})

leftBtn.addEventListener('click', ()=> {
    slidePosition -= slide[0].offsetWidth
    slide.forEach((item)=>{
        item.style.left = -slidePosition + 'px'
    })
})


//Слайдер картинок пагинация
const btn1 = document.querySelector('#dot-1');
const btn2 = document.querySelector('#dot-2');
const btn3 = document.querySelector('#dot-3');
const allBtn = document.querySelectorAll('.company-dot');
const numAnimetion = document.querySelector('#imgOfMySlider').href

btn1.addEventListener('click', (item)=> {
    numAnimetion.baseVal = 'img/1.webp'
    numAnimetion.animVal = 'img/1.webp'
})
btn2.addEventListener('click', (item)=> {
    numAnimetion.baseVal = 'img/2.webp'
    numAnimetion.animVal = 'img/2.webp'
})
btn3.addEventListener('click', (item)=> {
    numAnimetion.baseVal = 'img/3.webp'
    numAnimetion.animVal = 'img/3.webp'
})
allBtn.forEach((item)=> {
    item.addEventListener('click', (event)=>{
        allBtn.forEach((item)=>{
            item.classList.remove('active-dot')
        })
        item.classList.add('active-dot')
    })
})

//Появление ссылки по наведению
const helpfullSlide = document.querySelectorAll('.helpfull-slide');


helpfullSlide.forEach((item)=>{
    item.addEventListener('mouseover', (event)=>{
        let button = item.querySelector('.helpfull-more');
        button.style.display = 'inline';
    })
    item.addEventListener('mouseout', (event)=>{
        let button = item.querySelector('.helpfull-more');
        button.style.display = 'none';
    })
})

//Слайдер полезные материалы
const helpfullLeft = document.querySelector('#help-left');
const helpfullRight = document.querySelector('#help-right');
let helpfullPosition = 0;
let helpfullWidth = helpfullSlide[0].offsetWidth;//Берём ширину слайда

helpfullRight.addEventListener('click', ()=>{
    helpfullPosition += helpfullWidth;
    if (helpfullPosition > helpfullWidth * 3){
        helpfullPosition = 0;
    }
    helpfullSlide.forEach((item)=>{
        item.style.left = -helpfullPosition + 'px';
    })
})
helpfullLeft.addEventListener('click', ()=>{
    helpfullPosition -= helpfullWidth;
    if (helpfullPosition < 0){
        helpfullPosition = helpfullWidth * 3;
    }
    helpfullSlide.forEach((item)=>{
        item.style.left = -helpfullPosition + 'px';
    })
})

// Бургер меню

const openMenu = document.querySelector('.open-mob');
const closeMenu = document.querySelector('.close-mob');
const mobMenu = document.querySelector('.mobile-menu');
closeMenu.addEventListener('click', ()=>{
    mobMenu.style.display = 'none';
})
openMenu.addEventListener('click', ()=>{
    mobMenu.style.display = 'block';
})

// Слайдер мобильной версии почему мы

const chooseItem = document.querySelectorAll('.choose-item');
const chooseDots = document.querySelectorAll('.choose-dot');
const chooseDot1 = document.querySelector('#choose-1');
const chooseDot2 = document.querySelector('#choose-2');
const chooseDot3 = document.querySelector('#choose-3');
const chooseDot4 = document.querySelector('#choose-4');
const chooseDot5 = document.querySelector('#choose-5');
const chooseDot6 = document.querySelector('#choose-6');

let choosePosition = 0;
let choseWidth = chooseItem[0].offsetWidth + 10
console.log(choseWidth);

chooseDot1.addEventListener('click', ()=>{
    chooseDots.forEach((item)=>{
        item.classList.remove('choose-active')
    })
    chooseDot1.classList.add('choose-active')
    chooseItem.forEach((item)=>{
        item.style.left = 0
    })
})
chooseDot2.addEventListener('click', ()=>{
    chooseDots.forEach((item)=>{
        item.classList.remove('choose-active')
    })
    chooseDot2.classList.add('choose-active')
    chooseItem.forEach((item)=>{
        item.style.left = -choseWidth + 'px'
    })
})
chooseDot3.addEventListener('click', ()=>{
    chooseDots.forEach((item)=>{
        item.classList.remove('choose-active')
    })
    chooseDot3.classList.add('choose-active')
    chooseItem.forEach((item)=>{
        item.style.left = -choseWidth * 2  + 'px'
    })
})
chooseDot4.addEventListener('click', ()=>{
    chooseDots.forEach((item)=>{
        item.classList.remove('choose-active')
    })
    chooseDot4.classList.add('choose-active')
    chooseItem.forEach((item)=>{
        item.style.left = -choseWidth * 3  + 'px' 
    })
})
chooseDot5.addEventListener('click', ()=>{
    chooseDots.forEach((item)=>{
        item.classList.remove('choose-active')
    })
    chooseDot5.classList.add('choose-active')
    chooseItem.forEach((item)=>{
        item.style.left = -choseWidth * 4  + 'px'
    })
})
chooseDot6.addEventListener('click', ()=>{
    chooseDots.forEach((item)=>{
        item.classList.remove('choose-active')
    })
    chooseDot6.classList.add('choose-active')
    chooseItem.forEach((item)=>{
        item.style.left = -choseWidth * 5  + 'px'
    })
})