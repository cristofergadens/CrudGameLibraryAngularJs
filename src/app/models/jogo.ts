export class Jogo {
  public titulo : string;
  public preco : number;
  public devs : string;
  public genero : string;
  public modoJogo : string;
  public plataforma : string;
  public lancamento : number;
  public id? : string; 
  public downloadURL? : string; 

  constructor(titulo : string, preco : number, devs : string, genero : string, modoJogo : string, plataforma : string, lancamento : number, downloadURL : string){
      this.titulo = titulo;
      this.preco = preco;
      this.devs = devs;
      this.genero = genero;
      this.modoJogo = modoJogo;
      this.plataforma = plataforma;
      this.lancamento = lancamento;
      this.downloadURL = downloadURL;
  }
}
  