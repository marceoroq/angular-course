/*
    ===== Código de TypeScript =====
*/

interface Producto {
    desc: string,
    precio: number,
}

const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 150
}

const tableta: Producto = {
    desc: 'iPad Air',
    precio: 350
}

function calculaIVA(productos: Producto[]): [number, number] {
    
    let total = 0;
    
    // productos.forEach( (producto) => {
    //     total += producto.precio;
    // })
    // Con destructuracion de argumento:
    productos.forEach( ({ precio }) => {
        total += precio;
    })

    return [total, total * 0.15];
}

const articulos = [telefono, tableta];

const [ total, iva ] = calculaIVA(articulos);

console.log('Total: ', total);
console.log('IVA: ', iva);
