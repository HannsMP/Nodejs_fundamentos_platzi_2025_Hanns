// Console

// console.log()
// console.info()
// console.warn()
// console.error()

// console.table()
// console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);
// ┌─────────┬─────┬─────┐
// │ (index) │  a  │  b  │
// ├─────────┼─────┼─────┤
// │    0    │  1  │ 'Y' │
// │    1    │ 'Z' │  2  │
// └─────────┴─────┴─────┘

// console.group();
// console.groupEnd();

// EJEMPLO 1
// console.group('despedida');
// 	console.log('adios');
// 	console.group();
// 		console.log('Carlos');
// 	console.groupEnd();
// console.groupEnd();

console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');


// Con console podemos imprimir todo tipo de valores por nuestra terminal.

// console.log: recibe cualquier tipo y lo muestra en el consola.
// console.info: es equivalente a log pero es usado para informar.
// console.error: es equivalente a log pero es usado para errores.
// console.warn: es equivalente a log pero es usado para warning.
// console.table: muestra una tabla a partir de un objeto.
// console.count: inicia un contador autoincremental.
// console.countReset: reinicia el contador a 0.
// console.time: inicia un cronometro en ms.
// console.timeEnd: Finaliza el cronometro.
// console.group: permite agrupar errores mediante identación.
// console.groupEnd: finaliza la agrupación.
// console.clear: Limpia la consola.