//Módulo 4: Objetos.

    //construtor function
    function Person( name, oldyear ){
        this.name = name;
        this.oldyear = oldyear;
        this.walk = () => {
            console.log( `${name}: walked` );
        }
    }

    const joao = new Person( 'João', 20 );
    const maria = new Person( 'Maria', 25 );
    const bruno = new Person( 'Bruno', 15 );

    function Dom( select ){
        const elementList = document.querySelectorAll( select );

        this.element = elementList;
        this.addClass = ( className ) => {
            elementList.forEach( e => {
                e.classList.add( className );
            } );
        }
        this.removeClass = ( className ) => {
            elementList.forEach( e => {
                e.classList.remove( className );
            } );
        }

    }
    const pfr = new Dom( '.animais-lista li' );

    //prototype
    function Person2( name, surname, age ){
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    Person2.prototype.fullname = function(){
        return `${this.name} ${this.surname}`;
    }

    const peter = new Person2( 'Pedro', 'Figueira', 20 );







// Retorne o valor total das compras
const compras = [
    {
      item: 'Banana',
      preco: 'R$ 4,99'
    },
    {
      item: 'Ovo',
      preco: 'R$ 2,99'
    },
    {
      item: 'Carne',
      preco: 'R$ 25,49'
    },
    {
      item: 'Refrigerante',
      preco: 'R$ 5,35'
    },
    {
      item: 'Quejo',
      preco: 'R$ 10,60'
    }
  ]

let valueFinal = compras.reduce( (acml, iten) => {

    let preco = iten.preco.replace( ',', '.' );
    let indexCrope = preco.indexOf( '$' );

    let value;
    if( preco[ indexCrope + 1 ] === ' ' ){
      value = +preco.substring( indexCrope + 2 );
    }else{
      value = +preco.substring( indexCrope + 1 );
    }

    return acml + value;
}, 0 );

// console.log( valueFinal );





// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursos = document.querySelectorAll( '.curso' );
const arrCursos = Array.from( cursos );

let obj = arrCursos.map( e => {
  const titulo = e.querySelector( 'h1' ).innerText;
  const descricao = e.querySelector( 'p' ).innerText;
  const aulas = e.querySelector( '.aulas' ).innerText;
  const horas = e.querySelector( '.horas' ).innerText;

  return {
    titulo, 
    descricao,
    aulas,
    horas,
  }
} );

// console.log( obj );



// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

let maior = numeros.filter( e => e > 100);
// console.log( maior );


// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

let faz = instrumentos.some( e => e.toLowerCase() === 'baixo' );
// console.log( faz );









// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const the_p = document.querySelectorAll( '.ex-func p' );

const theChars = Array.prototype.reduce.call( the_p, ( acm, item ) => {
  return acm += item.innerText.length;
}, 0 );


// console.log( theChars );


// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.


// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico


let ac = 0;

// setTimeout( () => {

//   while( true ){
//     setTimeout( () => { console.log( ac++ ); }, 1500);
//   }
// }, 5000);

// window.setInterval( () => { console.log( ac++ ); }, 1500 );













// function replaceFieldsNameForm( arr ){

//   const theField = document.querySelectorAll( '.pfr__ajuste_form_name__DIVI form label' );
//   const newFields = Array.prototype.forEach.call( theField, ( e, index ) => e.innerText = !!arr[index] ? arr[index] : theField[index].innerText );

// }
// replaceFieldsNameForm( [ 'Nome completo', 'Cargo', 'Telefone', 'E-mail corporativo', 'Nome da empresa', 'Segmento', 'Mensagem' ] );








class Countdownm{
  constructor( pfDev__futureDate ){
    this.futureDate = pfDev__futureDate;
  }

  get _futureDate(){
    return new Date(this.futureDate);
  }

  get _actualDate(){
    return new Date();
  }
  
  get _timeStampDiff(){
    return this._futureDate.getTime() - this._actualDate.getTime();
  }

  get days(){
    return Math.floor( this._timeStampDiff / (24 * 60 * 60 * 1000) );
  }
  
  get hours(){
    return Math.floor( this._timeStampDiff / ( 60 * 60 * 1000) );
  }
 
  get minutes(){
    return Math.floor( this._timeStampDiff / (60 * 1000) );
  }

  get seconds(){
    return Math.floor( this._timeStampDiff / 1000 );
  }

  get final(){
    const days = this.days;
    const hours = this.hours % 24;
    const minutes = this.minutes % 60;
    const seconds = this.seconds % 60;

    return{
      days,
      hours,
      minutes,
      seconds
    };
  }
}

const diasParaData = new Countdownm( '24 December 2022 23:59:59 GMT-0300' );

console.log(diasParaData.final);