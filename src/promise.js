//Promise

// const myPromise = new Promise((resolve, reject) => {
//   const x = 0;
//   if (x === 0) {
//     resolve("OK");
//   } else {
//     reject("Error");
//   }
// });

// myPromise.then(
//   (value) => {
//     console.log("promiseValue: ", value);
//   },
//   (error) => {
//     console.log("promiseError: ", error);
//   }
// );

// const myPromise = new Promise(function (myResolve, myReject) {
//   setTimeout(function () {
//     myResolve("I love You !!");
//     myReject("I hate You !!");
//   }, 3000);
// });

// myPromise
//   .then(function (value) {
//     console.log("value: ", value);
//   })
//   .catch(function (error) {
//     console.log("error: ", error);
//   });

const myPromise1 = new Promise(function (myResolve, myReject) {
  setTimeout(myResolve, 200, "King");
});

const myPromise2 = new Promise(function (myResolve, myReject) {
  debugger;
  setTimeout(myResolve, 100, "Queen");
});

Promise.all([myPromise1, myPromise2]).then(function (value) {
  console.log("all-value: ", value);
});

Promise.allSettled([myPromise1, myPromise2]).then(function (value) {
  console.log("allSettled-value: ", value);
});

Promise.any([myPromise1, myPromise2]).then(function (value) {
  console.log("any-value: ", value);
});

Promise.race([myPromise1, myPromise2]).then(function (value) {
  console.log("race-value: ", value);
});

Promise.reject("Error 404").catch(function (error) {
  console.log("reject-error: ", error);
});

Promise.resolve("OK").then(function (value) {
  console.log("resolve-value: ", value);
});

let myPromise3 = new Promise(function (myResolve, myReject) {
  throw "Error 404";
});

myPromise3.catch(function (error) {
  console.log("catch-error: ", error);
});

// let myPromise4 = new Promise(function (myResolve, myReject) {
//   let result = false;

//   if (result) {
//     myResolve("OK");
//   } else {
//     myReject("Error");
//   }
// });

// myPromise4.finally(function () {
//   console.log("finally: ", "Promise ready");
// });
