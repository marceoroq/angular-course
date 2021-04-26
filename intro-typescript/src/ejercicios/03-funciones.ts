/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number {
    return a + b;
}

const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

function multiplicar(numero: number, otroNumero?: number, base: number = 2): number {
    return numero * base;
}

const resultado = sumar(10, 30);
const resultadoFlecha = sumarFlecha(20, 80);
const resultadoMultiplicar = multiplicar(10, 5);

// console.log(resultado);
// console.log(resultadoFlecha);
// console.log(resultadoMultiplicar);


interface PersonajeLOR {
    nombre: string,
    pv: number,
    mostrarHp: () => void,
}

function curar(personaje: PersonajeLOR, curarX: number): void {
    personaje.pv += curarX;    
    console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: "Spider",
    pv: 50,
    mostrarHp() {
        console.log("Puntos de vida: ", this.pv);
    }
}

curar(nuevoPersonaje, 20);
nuevoPersonaje.mostrarHp();