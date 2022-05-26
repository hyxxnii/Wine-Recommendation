const n_wine = 6;
const wines = {};
const list_flavor = ["body", "acidity", "sweetness", "fruit"];
wines["wine1"] = {
  body: Math.floor(Math.random() * 6),
  acidity: Math.floor(Math.random() * 6),
  sweetness: Math.floor(Math.random() * 6),
  fruit: Math.floor(Math.random() * 6),
};
wines["wine2"] = {
  body: Math.floor(Math.random() * 6),
  acidity: Math.floor(Math.random() * 6),
  sweetness: Math.floor(Math.random() * 6),
  fruit: Math.floor(Math.random() * 6),
};
wines["wine3"] = {
  body: Math.floor(Math.random() * 6),
  acidity: Math.floor(Math.random() * 6),
  sweetness: Math.floor(Math.random() * 6),
  fruit: Math.floor(Math.random() * 6),
};
wines["wine4"] = {
  body: Math.floor(Math.random() * 6),
  acidity: Math.floor(Math.random() * 6),
  sweetness: Math.floor(Math.random() * 6),
  fruit: Math.floor(Math.random() * 6),
};
wines["wine5"] = {
  body: Math.floor(Math.random() * 6),
  acidity: Math.floor(Math.random() * 6),
  sweetness: Math.floor(Math.random() * 6),
  fruit: Math.floor(Math.random() * 6),
};
wines["wine6"] = {
  body: Math.floor(Math.random() * 6),
  acidity: Math.floor(Math.random() * 6),
  sweetness: Math.floor(Math.random() * 6),
  fruit: Math.floor(Math.random() * 6),
};

function check(index, flavorType, amount) {
  console.log(`${index} : ${flavorType} : ${amount}`);
  const flavor = document.querySelectorAll(".flavor_wine")
  const veryBad = flavor[index].querySelector(`.${flavorType} .flavor_checkBox .circle:nth-child(1)`);
  const bad = flavor[index].querySelector(`.${flavorType} .flavor_checkBox .circle:nth-child(2)`);
  const soSo = flavor[index].querySelector(`.${flavorType} .flavor_checkBox .circle:nth-child(3)`);
  const good = flavor[index].querySelector(`.${flavorType} .flavor_checkBox .circle:nth-child(4)`);
  const veryGood = flavor[index].querySelector(`.${flavorType} .flavor_checkBox .circle:nth-child(5)`);
  if (amount == 5) {
    veryGood.style.backgroundColor = "black";
  } else if (amount == 4) {
    good.style.backgroundColor = "black";
  } else if (amount == 3) {
    soSo.style.backgroundColor = "black";
  } else if (amount == 2) {
    bad.style.backgroundColor = "black";
  } else if (amount == 1) {
    veryBad.style.backgroundColor = "black";
  }
}

for (let i = 0; i < n_wine; i++) {
  let numWine = wines[`wine${i + 1}`];
  for (let flavorType of list_flavor) {
    check(i + 1, flavorType, numWine[flavorType]);
  }
}

console.log(wines[0]);
