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
    const card = resultCardAll[nth];
    const name = result_obj['name'][nth];

    const wineImg = card.querySelector("img");
    const wineImgUrl = `../static/assets/img/wineImg/${name}.jpg`;
    const wineName = card.querySelector(".wine-name");
    const winePrice = card.querySelector(".wine-price");
    wineName.innerText = result_obj['name'][nth];
    winePrice.innerText = result_obj['price'][nth];
    wineImg.src = wineImgUrl;

    const popUp = popUpCardAll[nth];
    const kind = popUp.querySelector(".wine-kind");
    kind.innerText = result_obj['kind'][nth];
}

