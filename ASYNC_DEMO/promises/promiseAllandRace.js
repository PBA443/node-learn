const p1 = new Promise((resolve, reject) => {
  console.log("Async 1 started ");
  //resolve(1);
  reject(new Error("ammata siriuna"));
});
const p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Async 2 started ");
    resolve(2);
  }, 1500);
});

Promise.all([p1, p2])
  .then((result) => console.log(result))
  .catch((err) => console.log(err.message));
