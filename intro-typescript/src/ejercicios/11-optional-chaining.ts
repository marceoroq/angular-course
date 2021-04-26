/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
    nombre: string;
    hijos?: string[]
}

const pasajero1: Pasajero = {
    nombre: 'Fernando'
}

const pasajero2: Pasajero = {
    nombre: 'Natanael',
    hijos: ['Juan Carlos', 'Josefina']
}

function imprimeHijos(pasajero: Pasajero): void {
    
    // Encadenamiento opcional, si el valor existe (?), aplicamos la funcion.
    // Agregamos OR para en caso de no existir, devolver un valor.
    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log(cuantosHijos);

}

imprimeHijos(pasajero1);