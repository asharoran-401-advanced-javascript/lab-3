'use strict';

const fs = require('fs');
const util = require('util');

const editFiles = require('./lib/edit-file.js');

let file = `${__dirname}/data/person.json`;


fs.readFile(file , (err , data) =>{
    if(err){ throw err}
    console.log('Callback' , data.toString().trim());
})

// As a callback
editFiles.readerWithCallback(file, (err, data) => {
    if (err) { throw err; }
    console.log('Callback from module', data);
  });

  // Async/Await Style
// Need to make an async function and invoke it
async function readFileAsyncFromModule(file) {
    try {
      let data = await editFiles.readerWithPromise(file);
      console.log('Async from module', data);
    }
    catch (err) { throw err }
  }
  
  readFileAsyncFromModule(file);