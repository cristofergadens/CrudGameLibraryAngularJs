export class jogo {
  private _titulo : string;
  private _preco : number;
  private _devs : string;
  private _genero : string;
  private _modoJogo : string;
  private _plataforma : string;
  private _lancamento : number;

  constructor(titulo : string, preco : number, devs : string, genero : string, modoJogo : string, plataforma : string, lancamento : number){
      this._titulo = titulo;
      this._preco = preco;
      this._devs = devs;
      this._genero = genero;
      this._modoJogo = modoJogo;
      this._plataforma = plataforma;
      this._lancamento = lancamento;

  }

  public getTitulo() : string {
      return this._titulo;
  }

  public setTitulo(titulo : string) : void {
      this._titulo = titulo;
  }

  public getPreco() : number {
      return this._preco;
  }

  public setPreco(preco : number ) : void {
      this._preco = preco;
  }

  public getDevs() : string {
    return this._devs;
  }

  public setDevs(devs : string) : void {
    this._devs = devs;
  }

  public getGenero() : string {
    return this._genero;
  }

  public setGenero(genero : string) : void {
    this._genero = genero;
  }

  public getModoJogo() : string {
    return this._modoJogo;
  }

  public setModoJogo(modoJogo : string) {
    this._modoJogo = modoJogo;
  }

  public getPlataforma() : string {
    return this._plataforma;
  }

  public setPlataforma(plataforma : string) {
    this._plataforma = plataforma;
  }

  public getLancamento() : number {
    return this._lancamento;
  }

  public setLancamento(lancamento : number) {
    this._lancamento = lancamento;
  }

}
