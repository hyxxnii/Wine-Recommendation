const resultCardAll = document.querySelectorAll('.portfolio-item');
const popUpCardAll = document.querySelectorAll('.portfolio-modal');

function showResult(result_dict){
    result_obj = JSON.parse(result_dict)
    console.log(result_obj)

    form.querySelector("#submitButton").value = "다시 제출";
    document.querySelector("#portfolio").classList.toggle('d-none');
    let step;
    for (step = 0; step < 9; step++) {
    // Runs 5 times, with values of step 0 through 4.
        onMakeCard(step, result_obj);
    }
}

function onMakeCard(nth, result_obj){
    const list_flavor = ["body", "acid", "sugar", "tanin"];

    const card = resultCardAll[nth];
    const name = result_obj['name'][nth];

    const wine__img = card.querySelector("img");
    const wine__img__url = `../static/assets/img/wineImg/${name}.jpg`;
    const wine__name = card.querySelector(".wine-name");
    const wine__price = card.querySelector(".wine-price");
    wine__name.innerText = result_obj['name'][nth];
    wine__price.innerText = result_obj['price'][nth];

    wine__img.src = wine__img__url;

    const popUp = popUpCardAll[nth];
    const wine__kind = popUp.querySelector(".wine-kind");
    const wine__food = popUp.querySelector(".wine-food");
    const wine__aroma = popUp.querySelector(".wine-aroma");
    const wine__region = popUp.querySelector(".wine-region");


    popUp.querySelector(".wine-name").innerText = result_obj['name'][nth];
    wine__kind.innerText = result_obj['kind'][nth];
    wine__region.innerText = result_obj['region'][nth];
    wine__food.innerText = result_obj['food'][nth];
    wine__aroma.innerText = result_obj['aroma'][nth];

    for (let flavorType of list_flavor) {
        check(nth, flavorType, result_obj[flavorType]);
}

function check(nth, flavorType, amounts) {
    const flavor = document.querySelectorAll(".flavor_wine")
    const veryBad = flavor[nth].querySelector(`.${flavorType} .flavor_checkBox .circle:nth-child(1)`);
    const bad = flavor[nth].querySelector(`.${flavorType} .flavor_checkBox .circle:nth-child(2)`);
    const soSo = flavor[nth].querySelector(`.${flavorType} .flavor_checkBox .circle:nth-child(3)`);
    const good = flavor[nth].querySelector(`.${flavorType} .flavor_checkBox .circle:nth-child(4)`);
    const veryGood = flavor[nth].querySelector(`.${flavorType} .flavor_checkBox .circle:nth-child(5)`);
    if (amounts[nth] == 5) {
      veryGood.style.backgroundColor = "black";
    } else if (amounts[nth] == 4) {
      good.style.backgroundColor = "black";
    } else if (amounts[nth] == 3) {
      soSo.style.backgroundColor = "black";
    } else if (amounts[nth] == 2) {
      bad.style.backgroundColor = "black";
    } else if (amounts[nth] == 1) {
      veryBad.style.backgroundColor = "black";
    }
  }
}

function hadnleNoImg(e){
    e.target.src = "../static/assets/img/wineImg/noImg.jpg"
}

document.querySelectorAll(".portfolio-item img").forEach(comp =>
    comp.addEventListener("error", hadnleNoImg)
);