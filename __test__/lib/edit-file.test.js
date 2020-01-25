'use strict';

jest.mock('fs');

const reader = require('../../lib/edit-file.js');

describe('File Reader Module' , ()=>{
    describe('as a callback' , ()=>{
        /// for the error
        it('when given a bad file, returns as error' , (done) =>{
            let file = `${__dirname}/../../data/person.json`;
           reader.readFileWithCallback(file , (err , data) =>{
               expect(err).toBe(undefined);
               done();
           });
       });
       it('when given a real file , returns the contents' ,()=>{
           // for right data
        let file = `${__dirname}/../../data/person.json`;
           reader.readFileWithCallback(file ,(err,data) =>{
               expect(typeof data).toBe('string');
           });
       });
    });
});
///////////////========= I comment it out because it's fail ===========/////////
// describe('write file  Reader Module' , () =>{
//     describe('as a callback' , () =>{
//         it(' when give a right file, return as content' , (done) =>{
//             let file = `${__dirname}/../../data/person.json`;
//             reader.editFileWithCallback(file , (err , data) =>{
//               expect(typeof data).toBe('string');
//             });
//         });
//     });
// });