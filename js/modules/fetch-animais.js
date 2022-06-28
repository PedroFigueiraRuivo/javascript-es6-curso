import AnimaNumeros from './anima-numeros.js';

export default function initFetchAnimais() {
  function createAnimal(animal) {
    const content = `
        <div class="numero-animal">
            <h3>${animal.especie}</h3>
            <span data-numero>${animal.total}</span>
        </div>
    `;

    const block = document.getElementById('animalNumber');
    block.insertAdjacentHTML('beforeend', content);
  }

  async function fetchAnimais(url) {
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

  fetchAnimais('./js/animais-info.json');
}
