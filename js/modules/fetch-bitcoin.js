export default function fetchBitCoin(url, target) {
  fetch(url)
    .then((r) => r.json())
    .then((theJSON) => {
      const preco = document.querySelector(target);
      preco.innerText = (100 / theJSON.BRL.sell).toFixed(4);
    }).catch((error) => {
      console.log(Error(error));
    });
}
