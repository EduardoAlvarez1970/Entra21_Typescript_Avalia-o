class Cargo {
    private descricao: string;
    private cargaHoraria: number;
  
    constructor(descricao: string, cargaHoraria: number) {
      this.descricao = descricao;
      this.cargaHoraria = cargaHoraria;
    }

    public getDescricao(){
      return this.descricao
  }
}

  export default Cargo;

  ///OK