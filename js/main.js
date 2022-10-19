'use strict';

const jsNewForm = document.querySelector('.js-new-form');
jsNewForm.classList.remove("collapsed");

const jsList = document.querySelector('.js-list');


const imageCat1 =  'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg';
const nameCat1 = 'Anastacio';
const race1 = 'British Shorthair' ;
const description1 = 'Ruiseñor, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';

const imageCat2 =  'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg';
const nameCat2 = 'Fiona';
const race2 = 'British Shorthair'
const description2 = 'Ruiseñor, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
 

const imageCat3 =  'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg';
const nameCat3 = 'Cielo';
const race3 = 'British Shorthair' ;
const description3 = 'Ruiseñor, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';

jsList.innerHTML = `<li> <img src=" ${imageCat1}"> <h3>${nameCat1}</h3> <h4>${race1}</h4> <p>${description1}</p>  </li>`;

