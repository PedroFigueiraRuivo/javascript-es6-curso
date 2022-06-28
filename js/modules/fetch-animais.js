import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {
  // Cria cada animal
  function createAnimal(animal) {
    const content = `
        <div class="numero-animal">
            <h3>${animal.especie}</h3>
            <span data-numero>${animal.total}</span>
        </div>
    `;

    const block = document.getElementById(target);
    block.insertAdjacentHTML('beforeend', content);
  }

  // Puxa osanimais e suas informações a partir de
  // um arquivo json e ativa a função de criar cada animal
  async function criarAnimais() {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      animaisJSON.forEach((animal) => {
        createAnimal(animal);
      });

      const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'js-anima');
      animaNumeros.init();
    } catch (error) {
      console.log(error);
    }
  }

  return criarAnimais();
}
