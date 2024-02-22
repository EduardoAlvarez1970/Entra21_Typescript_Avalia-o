import Morador from "./morador";

class Apartamento {
    private bloco: string;
    private numero: number;
    private nomeProprietario: string;
    private moradores: Morador[];
  
    constructor(bloco: string, numero: number, nomeProprietario: string) {
        this.bloco = bloco;
        this.numero = numero;
        this.nomeProprietario = nomeProprietario;
        this.moradores = [];
    }
  
    public adicionarMorador(morador: Morador) {
      this.moradores.push(morador);
    }

    public menorDeIdade(): Array<Morador> {
      return this.moradores.filter(morador => morador.getIdade() < 18);
    }
  }
  
  
  export default Apartamento;