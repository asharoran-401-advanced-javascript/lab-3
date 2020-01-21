'use strict';

jest.mock('fs');

const editFile = require('../../lib/edit-file.js');

discribe('File Reader Module' , ()=>{
    describe('as a callback' , ()=>{
       it('when given a bad file, returns as error' , (done) =>{
           let file = `${__dirname}/../../data/person.json`;
           editFile.editFileWithCallback(file , (err , data) =>{
               expect(err).toBeDefined();
               done();
           });
       });
       it('when given a real file , returns the contents' ,(done)=>{
           let file = `${__dirname}/../../data/person.json`;
           editFile.editFileWithCallback(file , (err , data) =>{
               expect(err).toBeDefined();
               expect(typeof data).toBe('string');
           })
       })
    })
})