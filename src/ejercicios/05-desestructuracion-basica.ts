/*
    ===== Código de TypeScript =====
*/
// Desestructuracion de objectos ################################################
interface Reproductor {
    volumen: number,
    second: number,
    song: string,
    details: Details,
}

interface Details {
    author: string,
    year: number,
}

const reproductor: Reproductor = {
    volumen: 90,
    second: 36,
    song: 'Mess',
    details: {
        author: 'Ed Sheeran',
        year: 2015,
    }
}

// Sin desestructuracion:
// console.log('The current volumen is: ', reproductor.volumen);
// console.log('The current second is: ', reproductor.second);
// console.log('The current song is: ', reproductor.song);
// console.log('The author is: ', reproductor.details.author);

// Con desestructuracion de objecto
const { volumen, second, song, details } = reproductor;
const { author } = details;

console.log('The current volumen is: ', volumen);
console.log('The current second is: ', second);
console.log('The current song is: ', song);
console.log('The author is: ', author);

// Desestructuracion de arreglos ################################################
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks']

// console.log('Personaje 1: ', dbz[0]);
// console.log('Personaje 2: ', dbz[1]);
// console.log('Personaje 3: ', dbz[2]);

// Con desestructuracion de arreglos
const [ p1, p2, p3 ] = dbz;

// En caso de requerir un solo valor del arrego, se deben colocar las comas para
// separar los valores no requeridos. Por ejemplo, si necesitamos solo p3 quedaria
// const [ , , p3 ] = dbz;

console.log('Personaje 1: ', p1);
console.log('Personaje 2: ', p2);
console.log('Personaje 3: ', p3);

