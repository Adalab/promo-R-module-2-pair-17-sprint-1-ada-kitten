'use strict';

const jsNewForm = document.querySelector('.js-new-form');
jsNewForm.classList.remove("collapsed");




const newKitten = document.querySelector('.js-list');


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

/* <li class="card"> <article> <img class="card_img" src="https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg" alt="gatito" /> <h3 class="card_title">Anastacio</h3> <h4 class="card_race">British Shorthair</h4> <p class="card_description">    Ruiseño, juguetón, le guta estar tranquilo y que nadie lemoleste. Es una maravilla acariciarle! </p> </article> </li> */

const kitten1 = 
`<li class="card"><article><img class="card_img" src="${imageCat1}" alt="gatito" /><h3 class="card_title">${nameCat1} </3><h4class="card_race">${race1} </h4><p class="card_description">${description1} </p></article></li>`;

const kitten2 = 
`<li class="card"><article><img class="card_img" src="${imageCat2}" alt="gatito" /><h3 class="card_title">${nameCat2} </3><h4class="card_race">${race2} </h4><p class="card_description">${description2} </p></article></li>`;

const kitten3 = 
`<li class="card"><article><img class="card_img" src="${imageCat3}" alt="gatito" /><h3 class="card_title">${nameCat3} </3><h4class="card_race">${race3} </h4><p class="card_description">${description3} </p></article></li>`;

//const catRace = document.querySelector('.card_race'); <-- revisar este punto 
// hemos añadido la clase después de card_race y no funciona por qué
//catRace.classList.add('desaparecer');
newKitten.innerHTML = kitten1 + kitten2 + kitten3;


