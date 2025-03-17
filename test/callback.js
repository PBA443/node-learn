console.log("kamala awa");
console.log("nihal tappara deken enawa kiwwa");
nihalAwada((awada) => {
  console.log("penawada balpan->", awada);
});
console.log("sumathith awa");

function nihalAwada(awadaBalahan) {
  setTimeout(() => {
    console.log(`takgala waren `);
    awadaBalahan("enawa enawa");
  }, 2000);
}
