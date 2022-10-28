'use strict';

const jsNewForm = document.querySelector('.js-new-form');
const newKitten = document.querySelector('.js-list');

// Ejercicio 2.4 Eventos - Validar formulario nuevo gatito
const jsBtnAñadir = document.querySelector(".js-btn-add");

const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMesageError = document.querySelector('.js-label-error');



function handleClick(event) {
  event.preventDefault();

  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  
  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMesageError.innerHTML = 'Debe rellenar todos los valores';
  } else {
    const kitten = {
      imageCat : valuePhoto,
      nameCat : valueName,
      race : 'British Shorthair',
      description : valueDesc,
    };
    newKitten.innerHTML += renderCats(kitten);
  }
}

jsBtnAñadir.addEventListener("click", handleClick);

//hemos creado los objetos para después meterlo en una nuestra función pintadora!! SOMOS UNAS MACHINEEES
const kittenA = {
  imageCat :  'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg',
  nameCat : 'anastacio'.toUpperCase(),
  race : 'British Shorthair',
  description : 'Ruiseñor, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
};

const kittenB = {
  imageCat :  'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg',
  nameCat : 'fiona'.toUpperCase(),
  race : 'British Shorthair',
  description : 'Ruiseñor, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
};

const kittenC = {
  imageCat :  'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg',
  nameCat : 'cielo'.toUpperCase(),
  race : 'British Shorthair',
  description : 'Ruiseñor, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
};

const listCats = [kittenA, kittenB, kittenC]; // Sin comillas hace referencia a la constante (nos tenemos que fijar en el color). Si lo ponemos como comillas no coge el contenido. 

function getRaceMessage(genericRace) {  // Esto es igual a const genericRace = race1/race2/race3
  if (genericRace === "") {
    return `No se ha especificado la raza`;
  } else {
    return genericRace;
  }
}
let index = 0;

// aquí ponemos (cats) + los objetos de la función. 
function renderCats(cats) {
  return `<li class="card"><article><img class="card_img" src="${cats.imageCat}" alt="gatito" /><h3 class="card_title">${cats.nameCat} </3><h4class="card_race">${getRaceMessage(cats.race)} </h4><p class="card_description">${cats.description} </p></article></li>`;
}

newKitten.innerHTML += renderCats(listCats[index]);
index++;

newKitten.innerHTML += renderCats(listCats[index]);;
index++;

newKitten.innerHTML += renderCats(listCats[index]);;


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
if( kittenA.description.includes(descrSearchText) ) {
        newKitten.innerHTML = renderCats(kittenA)
  }
    
    if( kittenB.description.includes(descrSearchText) ) {
        newKitten.innerHTML += renderCats(kittenB)
    }
    
    if( kittenC.description.includes(descrSearchText) ) {
        newKitten.innerHTML += renderCats(kittenC)
    }





//const catRace = document.querySelector('.card_race'); <-- revisar este punto 
// hemos añadido la clase después de card_race y no funciona por qué