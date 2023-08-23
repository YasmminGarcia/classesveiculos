import { Veiculo } from "./classepapi";

class Moto extends Veiculo{

    cilindros: number;

    constructor(marca:string, modelo: string, cilindros: number){
        super(marca,modelo);
        this.cilindros = cilindros;
    }
}
let moto = new Moto('Honda', 'Twister', 4)
moto.Apresentar()