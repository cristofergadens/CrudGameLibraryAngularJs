import { Component } from '@angular/core';
import { jogo } from './models/jogo';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public lista_jogos : jogo[] = [];
  public titulo : string | undefined;
  public preco : number | undefined;
  public devs : string | undefined;
  public genero : string | undefined;
  public modoJogo : string | undefined;
  public plataforma : string | undefined;
  public lancamento : number | undefined;
  public edicao : boolean = false;
  public indice : number = -1;
  public options = new FormControl();
  public gamemode: string[] = ['Single Player', 'Multiplayer Local', 'Multiplayer Online'];
  public plataformaLista: string[] = ['console', 'PC', 'Multiplataforma'];


  displayedColumns: string[] = ['Titulo', 'Preço', 'Desenvolvedora', 'Gênero'];


  constructor(){
    this.lista_jogos.push(new jogo("Grand Theft Auto V", 123.98, "Rockstar Games", "Ação, aventura", "Single-Player e Multiplayer Online", "Multiplataforma", 2020));
    this.lista_jogos.push(new jogo("Counter Strike - Global Offensive", 102.99, "Valve", "FPS, Ação", "Single-Player e Multiplayer Online", "PC", 2012));
    this.lista_jogos.push(new jogo("Top Gear 2", 49.91, "Nintendo", "Corrida", "Single-Player e Multiplayer Local", "Console", 1993));
    this.lista_jogos.push(new jogo("Dragon Ball Z - Budokai Tenkaichi 3", 39.99, "Bandai Namco", "Aventura, Luta", "Single-Player e Multiplayer Local", "Console", 2006));


  }


  public salvar() : void{
    if(!this.titulo){
      alert("Nome é obrigatório!");
      return;
    }

    if(!this.preco){
      alert("Preço é obrigatório!");
      return;
    }

    if(!this.devs){
      alert("Preencher a Desenvolvedora é obrigatório!");
      return;
    }

    if(!this.genero){
      alert("Preencher o gênero do jogo é obrigatório!");
      return;
    }

    if(!this.modoJogo){
      alert("Escolher um modo de jogo é obrigatório!");
      return;
    }

    if(!this.plataforma){
      alert("Escolher a plataforma do jogo é obrigatório!");
      return;
    }

    if(!this.lancamento){
      alert("Informar o ano de lançamento do jogo é obrigatório!");
      return;
    }

    if(this.indice == -1){
      let Jogo = new jogo(this.titulo, this.preco, this.devs, this.genero, this.modoJogo, this.plataforma, this.lancamento);

      this.lista_jogos.push(Jogo);
      alert("Jogo Cadastrado com sucesso!");
    } else {
      this.lista_jogos[this.indice].setTitulo(this.titulo);
      this.lista_jogos[this.indice].setPreco(this.preco);
      this.lista_jogos[this.indice].setDevs(this.devs);
      this.lista_jogos[this.indice].setGenero(this.genero);
      this.lista_jogos[this.indice].setModoJogo(this.modoJogo);
      this.lista_jogos[this.indice].setPlataforma(this.plataforma);
      this.lista_jogos[this.indice].setLancamento(this.lancamento);
      alert("O jogo foi Editado com sucesso.");
      this.edicao = false;
    }

    this.titulo = undefined;
    this.preco = undefined;
    this.devs = undefined;
    this.genero = undefined;
    this.modoJogo = undefined;
    this.plataforma = undefined;
    this.lancamento = undefined;
  }

  public excluir(index : number) : void{
    this.lista_jogos.splice(index, 1);
    alert("jogo Excluido com sucesso.")
  }

  public editar(index : number) : void {
    this.edicao = true;
    this.indice = index;
    this.titulo = this.lista_jogos[index].getTitulo();
    this.preco = this.lista_jogos[index].getPreco();
    this.devs = this.lista_jogos[index].getDevs();
    this.genero = this.lista_jogos[index].getGenero();
    this.modoJogo = this.lista_jogos[index].getModoJogo();
    this.plataforma = this.lista_jogos[index].getPlataforma();
    this.lancamento = this.lista_jogos[index].getLancamento();
  }

  public limpar(){
    this.titulo = undefined;
    this.preco = undefined;
    this.devs = undefined;
    this.genero = undefined;
    this.modoJogo = undefined;
    this.plataforma = undefined;
    this.lancamento = undefined;
  }

}

