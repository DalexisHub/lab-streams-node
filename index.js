const { Transform } = require('stream');
const fs = require('fs');

const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  }
});

const readStream2 = fs.createReadStream('texto.txt');
const writeStream2 = fs.createWriteStream('texto_mayusculas.txt');

readStream2.pipe(transformStream).pipe(writeStream2);