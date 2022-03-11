import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jogo } from 'src/app/models/jogo';
import { JogosService } from 'src/app/services/jogos.service';

@Component({
  selector: 'app-lista-de-jogos',
  templateUrl: './lista-de-jogos.component.html',
  styleUrls: ['./lista-de-jogos.component.scss']
})

export class ListaDeJogosComponent implements OnInit {
  public lista_jogos : Jogo[] = [];
  
  constructor(private _router : Router, private jogoService : JogosService) { 

  }

  ngOnInit(): void {
    this.lista_jogos = this.jogoService.getJogos();
    }
 
  public excluir(indice : number) : void{
    let resultado = confirm("Deseja excluir o jogo " + this.jogoService.getJogo(indice).getTitulo() + " ?");
    if(resultado) { 
      if(this.jogoService.excluirJogo(indice)) {
        alert("Jogo excluido com sucesso");
      } else {
        alert("Erro ao excluir o jogo.");
      }
    }
  }

  public editar(indice : number) : void {
    this._router.navigate(["/EditarJogo", indice]);
  }

  public irParaCadastrarJogo() : void {
    this._router.navigate(["/CadastrarJogo"]);
  }

  /*public editar(index : number) : void {
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
*/
}
