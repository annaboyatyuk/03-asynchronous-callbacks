'use strict';

const read = require('../../lib/reader.js');
  
describe('Reader Module', () => {
  
  it('returns error when given a bad file name', (done) => {
  
  
    read(['data/bad.txt'], (err) => {
      expect(err).not.toBeNull();
      done();
    });
  });


  it('returns an error for any non existent file', (done) => {


    read(['data/letters.txt', 'data/missing.txt'], (err) => {

      expect(err).not.toBeNull();
      done();
    });
  });



  it('returns the contents of the files in a string when given an array', (done) => {

    let expected = 'words words words words words';

    read(['data/words.txt'], (err, words) => {
      expect(err).toBeNull();

      const actual = words[0].toString();

      expect(actual).toBe(expected);

      done();
    });
  });


  it('returns the contents of multiple files in order', (done) => {

    let paths = ['data/ipsum.txt', 'data/words.txt', 'data/letters.txt'];

    read(paths, (err, data) => {
      // console.log(data);
      expect(err).toBeNull();
      expect(data[0]).toContain('Lorem');
      expect(data[1]).toContain('words');
      expect(data[2]).toContain('abcde');
      done();
    });

  });

});


