/*!
* Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// submit 누르면 밑에 나오게 하는 코드
const form = document.querySelector("#contactForm");

// console에 출력
console.log(form.querySelector("input").value);

// event => submit하는 상황 자체
function onSubmit(event){
    // preventDefault(): 모든 event에 대해 default로 작용하는 것(e.g. 창 새로고침)을 막음 !!
    event.preventDefault();
    // console.log가 print()느낌 (잘 됐나 확인~)
    console.log(form.querySelector("input").value);
    // const: 절대 변수(값 변경 불가능) 할당, let: 변수 (값 변경 가능), var: 옛날 버전
    const result = document.querySelector("#portfolio");
    result.classList.toggle('d-none')
//  toggle: 껐다 켰다 기능 -> 있으면 빼고 없으면 넣는? => 처음에 d-none이 있으니깐 이 함수가 실행되면 d-none 빼라 => visible
//  addList: 넣기만 하는 기능
    let step;
    for (step = 0; step < 9; step++) {
      // Runs 5 times, with values of step 0 through 4.
      onMakeCard(step)
    }
}

const tempObj = {
    'id': ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    'name': ['K1 츠무킨', '1n', '2n', '3n', '4n', '5n', '6n', '7n', '8n', '9n'],
    'kind': ['0k', '1k', '2k', '3k', '4k', '5k', '6k', '7k', '8k', '9k'],
    'sugar': ['0s', '1s', '2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s'],
    'acid': ['0a', '1a', '2a', '3a', '4a', '5a', '6a', '7a', '8a', '9a'],
    'body': ['0b', '1b', '2b', '3b', '4b', '5b', '6b', '7b', '8b', '9b'],
    'tanin': ['0t', '1t', '2t', '3t', '4t', '5t', '6t', '7t', '8t', '9t'],
    'food': ['0f', '1f', '2f', '3f', '4f', '5f', '6f', '7f', '8f', '9f'],
    'aroma': ['0ar', '1ar', '2ar', '3ar', '4ar', '5ar', '6ar', '7ar', '8ar', '9ar'],
    'region': ['0r', '1r', '2r', '3r', '4r', '5r', '6r', '7r', '8r', '9r'],
    'price': ['0p', '1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p', '9p'],
}

const resultCardAll = document.querySelectorAll('.portfolio-item');
const popUpCardAll = document.querySelectorAll('.portfolio-modal');
function onMakeCard(nth){
    const card = resultCardAll[nth];
    const name = tempObj['name'][nth];

    const wineImg = card.querySelector("img");
    const wineImgUrl = `../static/assets/img/wineImg/${name}.jpg`;
    const wineName = card.querySelector(".wine-name");
    const winePrice = card.querySelector(".wine-price");
    wineName.innerText = tempObj['name'][nth];
    winePrice.innerText = tempObj['price'][nth];
    wineImg.src = wineImgUrl;

    const popUp = popUpCardAll[nth];
    const kind = popUp.querySelector(".wine-kind");
    kind.innerText = tempObj['kind'][nth];
}
form.addEventListener("submit", onSubmit);
// form에 무슨 일이 생기는지 계속 듣고 있어라~
// submit하는 일이 생기면 onSubmit 함수를 실행시켜라
