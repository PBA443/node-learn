const kamalagePoronduwa = new Promise((itukarada, kadakarada) => {
  console.log("Kamala tappara 5 n puka pennanawa kiwwa ");
  setTimeout(() => {
    if (Math.random() > 0.5) itukarada("Kamala Puka Pennuwa");
    kadakarada("Puka pennuwe na");
  }, 5000);
});
kamalagePoronduwa
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  })
  .finally(() => {
    console.log("puka pennuwat natat mama hu....");
  });
