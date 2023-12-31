console.log("Jack Ma maslahatlari ");
const list = [
  "yaxshi talaba boling", //0-20
  "togri boshliq tanlang va koproq xato qiling", //20-30
  "uzingziga ishlashni boshlang", //30-40
  "siz kuchli bolgan narsalrni qiling", //40-50
  "yoshlarga investitsiya qiling ", //50-60
  "endi dam olong , foydasi yoq endi", //60
];
//CALBACK
/*function maslahatBering(a, callback) {
  if (typeof a !== "number") callback("insert a number", null);
  else if (a <= 20) callback(null, list[0]);
  else if (a > 20 && a <= 30) callback(null, list[1]);
  else if (a > 30 && a <= 40) callback(null, list[2]);
  else if (a > 40 && a <= 50) callback(null, list[3]);
  else if (a > 50 && a <= 60) callback(null, list[4]);
  else {
    setTimeout(function () {
      callback(null, list[5]);
    }, 5000);
  }
}*/

//ASYNC function

async function maslahatBering(a) {
  if (typeof a !== "number") throw new Error("insert a number");
  else if (a <= 20) return list[0];
  else if (a > 20 && a <= 30) return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  else {
    return new Promise((resolove, reject) => {
      setTimeout(() => {
        resolove(list[5]);
      }, 5000);
    });
    //setTimeout(function () {
    // return list[0];
    //}, 5000);
  }
}

//call via then/catch
/*console.log("passed here 0");
maslahatBering(65)
  .then((data) => {
    console.log("javob:", data);
  })
  .catch((err) => {
    console.log("ERROR", data);
  });
console.log("passed here 1");*/

//call via  asyn/awayt
async function run() {
  let javob = await maslahatBering(25);
  console.log(javob);
  javob = await maslahatBering(70);
  console.log(javob);
  javob = await maslahatBering(41);
  console.log(javob);
}
run();

/*console.log("passed here 0");
maslahatBering(20)
  .then((data) => {
    maslahatBering(30)
      .then((data) => {
        maslahatBering(40)
          .then((data) => {
            console.log("javob:", data);
          })
          .catch((err) => {
            console.log("ERROR", data);
          });
        console.log("passed here 1");

        console.log("javob:", data);
      })
      .catch((err) => {
        console.log("ERROR", data);
      });
    console.log("passed here 1");

    console.log("javob:", data);
  })
  .catch((err) => {
    console.log("ERROR", data);
  });
console.log("passed here 1");*/

/*function result(str) {
  return str.split("").reverse().join("");
}
const result_1 = result("hello");
console.log(result_1);*/
function findDoublers(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
      return true;
    }
  }
  return false;
}
console.log(findDoublers("hello"));
console.log(findDoublers("salom"));

function teskari(str1) {
  return str1.split("").reverse().join("");
}
const result = teskari("HELLO");
console.log(result);
