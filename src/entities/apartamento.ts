import  Morador  from "./morador";

class Apartamento {
    private moradores: Morador[] = [];
    private bloco: string;
    private numero: number;
    private nomeProprietario: string;
  
    constructor(bloco: string, numero: number, nomeProprietario: string) {
        this.bloco = bloco;
        this.numero = numero;
        this.nomeProprietario = nomeProprietario;
        this.moradores = [];
    }
  
    public adicionarMorador(morador: Morador) {
      this.moradores.push(morador);
    }

    public getMoradoresMenoresIdade(): Morador[] {
        const dataAtual = new Date();
        return this.moradores.filter((morador) =>
            (dataAtual.getFullYear() - morador.dataNascimento.getFullYear()) < 18
        );
      }
    }


export default Apartamento;