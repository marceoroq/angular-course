/*
    ===== Código de TypeScript =====
*/

class PersonaNormal {
    constructor(
        public nombre: string,
        public direccion: string,
    ) {}
}
 
class Heroe extends PersonaNormal{
    /*
    Forma conocida de asignar atributos y crear constructor para clase Heroe
     
    alterEgo: string;
    edad: number;
    nombreReal: string;

    constructor(alterEgo: string, edad: number, nombreReal: string) {
        this.alterEgo = alterEgo;
        this.edad = edad;
        this.nombreReal = nombreReal;
    }

    La siguiente forma que quedara es una forma abreviada de definir, en el mismo 
    constructor, los atributos.
    */
    constructor(

        public alterEgo: string,
        public edad: number,
        public nombreReal: string,
    ) {
        super(nombreReal, 'New York, USA');
    }

 }

const ironman = new Heroe('Ironman', 45, 'Tony');

 console.log(ironman);
