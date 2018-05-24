'use strict';

const read = require('../../lib/reader.js');
  
describe('Reader Module', () => {
  
  it('returns error when given a bad file name', (done) => {
  
    let file = 'bad.txt';
  
    read(file, (err) => {
      expect(err).toThrowError();
    });
    done();
  });


  it('returns an error for any non existent file', (done) => {


    read('data/letters.txt', 'data/missing.txt', (err) => {

      expect(err).not.toBeNull();
    });
    done();
  });



  it('returns the contents of the files in a string when given an array', (done) => {

    let expected = 'words words words words words';

    read('data/words.txt', (err, words) => {
      expect(err).toBeNull();

      const actual = words[0].toString();

      expect(actual).toBe(expected);

    });
    done();
  });


  it('returns the contents of multiple files in order', (done) => {

    let paths = ['data/ipsum.txt', 'data/words.txt', 'data/letters.txt'];

    let path = '';
    let textArr = [];
    paths.forEach((ele) => {
      path = ele.toString();
      read(path, (err, data) => {
        textArr.push(data);
        console.log(textArr[1]);
        expect(textArr[0]).toContain('ipsum');
        expect(textArr[1]).toContain('words');
        expect(textArr[2]).toContain('abcde');
      });
      done();
    });

    // let paths = [];

    // for( let item of ['ipsum', 'words', 'letters']) {
    //   paths.push(`data/'${item}'.txt`);
    // }

    // let expected, actual;

    // read(paths, (err, contents) => {

    //   expect(err).toBeNull();

    //   expected = true;
    //   actual = contents[0].toString().toContain('ipsum');
    //   expect(actual).toBe(expected);

    //   expected = 'words words words words words';
    //   actual = contents[1].toString();
    //   expect(actual).toBe(expected);

    //   expected = 'abcdefghijklmnopqrstuvwxyz';
    //   actual = contents[2].toString();
    //   expect(actual).toBe(expected);

    // });
    // done();
  });


});



