'use strict';

const jsNewForm = document.querySelector('.js-new-form');


const newKitten = document.querySelector('.js-list');
let detailRace = '';

// const de los gatos con sus características 
const imageCat1 =  'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg';
const nameCat1 = 'anastacio'.toUpperCase();
const race1 = '';//'British Shorthair' ;
const description1 = 'Ruiseñor, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';

const imageCat2 =  'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg';
const nameCat2 = 'fiona'.toUpperCase();
const race2 = 'British Shorthair'
const description2 = 'Ruiseñor, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
 

const imageCat3 =  'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg';
const nameCat3 = 'cielo'.toUpperCase();
const race3 = 'British Shorthair' ;
const description3 = 'Ruiseñor, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';

/*jsList.innerHTML = `<li> <img src=" ${imageCat1}"> <h3>${nameCat1}</h3> <h4>${race1}</h4> <p>${description1}</p>  </li>`;*/

function getRaceMessage(genericRace) {  // Esto es igual a const genericRace = race1/race2/race3
  if (genericRace === "") {
    return `No se ha especificado la raza`;
  } else {
    return genericRace;
  }
}

const kitten1 = 
`<li class="card"><article><img class="card_img" src="${imageCat1}" alt="gatito" /><h3 class="card_title">${nameCat1} </3><h4class="card_race">${detailRace} </h4><p class="card_description">${description1} </p></article></li>`;

const kitten2 = 
`<li class="card"><article><img class="card_img" src="${imageCat2}" alt="gatito" /><h3 class="card_title">${nameCat2} </3><h4class="card_race">${ getRaceMessage(race2) } </h4><p class="card_description">${description2} </p></article></li>`;

const kitten3 = 
`<li class="card"><article><img class="card_img" src="${imageCat3}" alt="gatito" /><h3 class="card_title">${nameCat3} </3><h4class="card_race">${ getRaceMessage(race3) } </h4><p class="card_description">${description3} </p></article></li>`;

//newKitten.innerHTML = kitten1 + kitten2 + kitten3;

//calls 
const input_search_desc = document.querySelector('.js_in_search_desc'); //línea 57 html

// Actions 
//jsNewForm.classList.remove('collapsed');
//jsNewForm.classList.add('collapsed'); <-- invalida la línea 44

// está quitado collapsed con el IF si la quieres añadir, se debe hacer fuera del IF
if (jsNewForm.classList.contains('collapsed')) { // Aquí nos abre ábanico de si la tiene la añade (48) caso opuesto la quita (50)
    jsNewForm.classList.remove('collapsed'); // Se para aquí pq sí la tiene y no avanza a la 50
} else {
    jsNewForm.classList.add('collapsed') 
}

input_search_desc.value = 'tranquilo'; // si lo dejamos vacío aparecen todos los gatos
const descrSearchText = input_search_desc.value;

// Ejercicio de Condicionales
if( description1.includes(descrSearchText) ) {
        newKitten.innerHTML = kitten1
  }
    
    if( description2.includes(descrSearchText) ) {
        newKitten.innerHTML += kitten2
    }
    
    if( description3.includes(descrSearchText) ) {
        newKitten.innerHTML += kitten3
    }


     


//const catRace = document.querySelector('.card_race'); <-- revisar este punto 
// hemos añadido la clase después de card_race y no funciona por qué




