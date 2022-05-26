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

function check(num_wine, flavorType, amount) {
  console.log(`${num_wine} : ${flavorType} : ${amount}`);
  const vb = document.querySelector(
    `#flavor_wine${num_wine} .${flavorType} .flavor_checkBox .circle:first-child`
  );
  const b = document.querySelector(
    `#flavor_wine${num_wine} .${flavorType} .flavor_checkBox .circle:nth-child(2)`
  );
  const s = document.querySelector(
    `#flavor_wine${num_wine} .${flavorType} .flavor_checkBox .circle:nth-child(3)`
  );
  const g = document.querySelector(
    `#flavor_wine${num_wine} .${flavorType} .flavor_checkBox .circle:nth-child(4)`
  );
  const vg = document.querySelector(
    `#flavor_wine${num_wine} .${flavorType} .flavor_checkBox .circle:nth-child(5)`
  );

  if (amount == 5) {
    vg.style.backgroundColor = "black";
  } else if (amount == 4) {
    g.style.backgroundColor = "black";
  } else if (amount == 3) {
    s.style.backgroundColor = "black";
  } else if (amount == 2) {
    b.style.backgroundColor = "black";
  } else if (amount == 1) {
    vb.style.backgroundColor = "black";
  }
}

for (let i = 0; i < n_wine; i++) {
  let numWine = wines[`wine${i + 1}`];
  for (let flavorType of list_flavor) {
    check(i + 1, flavorType, numWine[flavorType]);
  }
}

console.log(wines[0]);
