// const fs = require('fs');
// const stream = require('stream');
// const util = require('util');

/* 
    =================================================
    lectura 
*/

// let data = '';

// let readableStream = fs.createReadStream(__dirname + '/input.txt');
// readableStream.setEncoding('utf-8');

// readableStream.on('data', function (chunk) {
//     data += chunk;
// });

// readableStream.on('end', function() {
//     console.log(data);
// });

/* 
    =================================================
    salida del sistema consola 
*/

// process.stdout.write('hola')
// process.stdout.write('que')
// process.stdout.write('tal')

/* 
    =================================================
    transformacion a mayusculas 
*/

// const Transform = stream.Transform;

// function Mayus() {
//     Transform.call(this);
// }
// util.inherits(Mayus, Transform);

// Mayus.prototype._transform = function (chunk, codif, cb) {
//     chunkMayus = chunk.toString().toUpperCase();
//     this.push(chunkMayus);
//     cb();
// }

// let mayus = new Mayus();

// readableStream
//     .pipe(mayus)
//     .pipe(process.stdout);

const fs = require('fs');
const stream = require('stream');

let readableStream = fs.createReadStream(__dirname + '/input.txt');

class Mayus extends stream.Transform {
    constructor() {
        super();
    }

    _transform(chunk, encoding, callback) {
        const chunkMayus = chunk.toString().toUpperCase();
        this.push(chunkMayus);
        callback();
    }
}

const mayus = new Mayus();

readableStream
    .pipe(mayus)
    .pipe(process.stdout);
