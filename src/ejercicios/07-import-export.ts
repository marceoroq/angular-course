import { Producto, calculaIVA } from "./06-desestructuracion-funcion";

/*
    ===== Código de TypeScript =====
*/

const carritoCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 105
    },
    {
        desc: 'Telefono 2',
        precio: 150
    }
];

const [ total, iva ] = calculaIVA( carritoCompras );

console.log('Total: ', total);
console.log('IVA: ', iva);

// Cuando vemos la salida de la consola, vemos los console logs de este file
// mas los incluidos en 06-desestructuracion-funcion. Esto es porque para 
// importar la funcion calculaIVA, ejecuta el archivo 06-desc...