const db = require('../db');
const Recipe = require('../models/lambdish');

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const dishes =  [
      { dish_name: 'Abgoosht', ingredients:'lamb, chickpeas, white beans', country_origin: {country_name: "Iran", capital: "Tehran"}, image: 'https://en.wikipedia.org/wiki/Abgoosht#/media/File:Dizi.jpg' },
      { dish_name: 'Alinazik Kebab', ingredients:'lamb, bell pepper, grilled tomato', country_origin: {country_name: "Turkey", capital: "Ankara"}, image: 'https://en.wikipedia.org/wiki/Alinazik_kebab#/media/File:Alinazik.jpg' },
      { dish_name: 'Arrosticini', ingredients:'lamb, pepper, garlic', country_origin: {country_name: "Italy", capital: "Rome"}, image: 'https://en.wikipedia.org/wiki/Arrosticini#/media/File:Arrosticini_01.jpg' },
      { dish_name: 'Biryani', ingredients:'lamb, rice, onions, spices', country_origin: {country_name: "India",capital: "New Delhi"}, image: 'https://en.wikipedia.org/wiki/Biryani#/media/File:%22Hyderabadi_Dum_Biryani%22.jpg' },
      { dish_name: 'Chakapuli', ingredients:'lamb, onions, cherry plums, potatoes', country_origin: {country_name: "Georgia", capital: "Tbilisi"}, image: 'https://en.wikipedia.org/wiki/Chakapuli#/media/File:Chakapuli.jpg' },
    ]
    await Recipe.insertMany(dishes);
    console.log('Created the dishes!');
}

const run = async () => {
    await main();
    db.close();
}

run();