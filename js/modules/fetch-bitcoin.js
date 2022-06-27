export default function initFetchBitCoin() {
  fetch('https://blockchain.info/ticker')
    .then((r) => r.json())
    .then((theJSON) => {
      const preco = document.querySelector('.bitcoin-preco');
      preco.innerText = (100 / theJSON.BRL.sell).toFixed(4);
    }).catch((error) => {
      console.log(Error(error));
    });
}
