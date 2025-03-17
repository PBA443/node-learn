const p = new Promise((resolve, reject) => {
  //any kind of some async word
  setTimeout(() => {
    if (Math.random() > 0.5) resolve(1);
    reject(new Error("kelauna"));
  }, 2000);
  //reject(new Error("kelauna"));
});

p.then((result) => console.log("Result", result))
  .catch((err) => {
    console.log(err.message);
  })
  .finally(() => {
    console.log("onna okai une");
  });
