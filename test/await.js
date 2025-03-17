async function nimalitaArimu() {
  try {
    const peep = await gewalPraBalima("sumana");
    const jump = await getaPanimu(peep);
    const anal = await arimu(jump);
    console.log(anal);
  } catch (error) {
    console.log(error.message);
  }
}
nimalitaArimu();

function gewalPraBalima(nanda) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Pare ${nanda} achchith na honda welawa`);
      resolve("wattata panna");
    }, 2000);
  });
}
function getaPanimu(peep) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`${peep} gedara ballath bandala`);
      resolve("pukema");
    }, 2500);
  });
}
function arimu(where) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("namila redi hodanawa");
      resolve(`${where} ariya ammo ...`);
    }, 3000);
  });
}
