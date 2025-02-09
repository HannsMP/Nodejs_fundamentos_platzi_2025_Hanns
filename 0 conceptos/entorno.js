// let nombre = process.env.nombre || 'sin nobre'
// let web = process.env.web || 'no tengo web'

// https://nodemon.io/
// https://pm2.keymetrics.io/

// destructuracion
let {
  // asignacion por defecto
  nombre = 'Sin nombre',
  web = 'No tnego web'
} = process.env

console.log(nombre, web);

/* 
  varaibles env
  $ varaible = valor node index.js
*/