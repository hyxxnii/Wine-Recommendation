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
}
form.addEventListener("submit", onSubmit);
// form에 무슨 일이 생기는지 계속 듣고 있어라~
// submit하는 일이 생기면 onSubmit 함수를 실행시켜라