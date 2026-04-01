//* con For
function getRandom(list) {
  let randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed on", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

for (let i = 0; i < 5; i++) {
  let excuse =
    getRandom(who) + " " +
    getRandom(action) + " " +
    getRandom(what) + " " +
    getRandom(when);

  console.log(excuse);
}

//* con forEach

function getRandom(list) {
  let randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed on", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

[1, 2, 3, 4, 5].forEach(function () {
  let excuse =
    getRandom(who) + " " +
    getRandom(action) + " " +
    getRandom(what) + " " +
    getRandom(when);

  console.log(excuse);
});