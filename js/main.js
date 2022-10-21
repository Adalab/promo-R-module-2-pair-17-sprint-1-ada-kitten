'use strict';

const jsNewForm = document.querySelector('.js-new-form');


const newKitten = document.querySelector('.js-list');


// const de los gatos con sus características 
const imageCat1 =  'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg';
const nameCat1 = 'anastacio'.toUpperCase();
const race1 = 'British Shorthair' ;
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


const kitten1 = 
`<li class="card"><article><img class="card_img" src="${imageCat1}" alt="gatito" /><h3 class="card_title">${nameCat1} </3><h4class="card_race">${race1} </h4><p class="card_description">${description1} </p></article></li>`;

const kitten2 = 
`<li class="card"><article><img class="card_img" src="${imageCat2}" alt="gatito" /><h3 class="card_title">${nameCat2} </3><h4class="card_race">${race2} </h4><p class="card_description">${description2} </p></article></li>`;

const kitten3 = 
`<li class="card"><article><img class="card_img" src="${imageCat3}" alt="gatito" /><h3 class="card_title">${nameCat3} </3><h4class="card_race">${race3} </h4><p class="card_description">${description3} </p></article></li>`;

//calls 
const input_search_desc = document.querySelector('.js_in_search_desc'); //línea 57 html

// Actions 
jsNewForm.classList.remove('collapsed');
input_search_desc.value = 'cariñoso';
const descrSearchText = input_search_desc.value;

// HOLA VICKY!!! punto nº5 del ejercicio. Entendí q debe verse el kitten1/kitten2... según si sale la palabra cariñoso y estaba justo revisando la lecci´n pq me cuesta. Lo revisamos juntas el lunes con calma si se puede. Presión 0!!
/*if( kitten1.includes(descrSearchText) ) {
    else if 


 { 
    
    else { kitten1.classList.add('collapsed'); 
    }    } */
    
    if( kittenDesc2.includes(descrSearchText) ) {
    //Completa el código
    }
    
    if( kittenDesc3.includes(descrSearchText) ) {
    //Completa el código
    }
        

//const catRace = document.querySelector('.card_race'); <-- revisar este punto 
// hemos añadido la clase después de card_race y no funciona por qué

newKitten.innerHTML = kitten1 + kitten2 + kitten3;


