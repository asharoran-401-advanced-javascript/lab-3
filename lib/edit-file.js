'use strict';

const fs = require('fs');
const util = require('util');

const readFileWithCallback = (file , callback) =>{
    fs.readFile(file , (err , data) =>{
        if (err){callback(err);}
        else {callback(undefined , data.toString())}
    })
}
/// fs.writeFile(filename, data[, options], callback)
//     //{"firstName":"Edward","lastName":"Scissorhands","hair":{"type":"wavy","color":"brown"},"favoriteFoods":["pizza","cupcakes","children"],"married":false,"kids":0}
let data = {  firstName :'ashar',
        lastName :"oran",
        hair:{"type":"wavy","color":"brown"},
       favoriteFoods:["pizza" , "mlokhia" , "sheshbark"],
        married: false,
        kids:0};

const editFileWithCallback = (file , callback) =>{
fs.writeFile(file,data, (error,data)=>{
    if(error) {callback(error); }
    else { console.log('data saved')
    };
  });
};


module.exports ={ readFileWithCallback ,editFileWithCallback };