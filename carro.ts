import { Veiculo } from "./classepapi";

class Carro extends Veiculo{

    portas: number;
    cor: string;

    constructor(marca:string, modelo: string, portas : number, cor: string){
        super(marca,modelo);
        this.portas = portas;
        this.cor = cor
    }
}

let carro = new Carro('BMW','X1. 7', 4, 'prata')
carro.Apresentar()