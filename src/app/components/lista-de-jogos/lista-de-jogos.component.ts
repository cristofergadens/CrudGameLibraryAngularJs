import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jogo } from 'src/app/models/jogo';
import { JogoFirebaseService } from 'src/app/services/jogo.firebase.service';

@Component({
  selector: 'app-lista-de-jogos',
  templateUrl: './lista-de-jogos.component.html',
  styleUrls: ['./lista-de-jogos.component.scss']
})

export class ListaDeJogosComponent implements OnInit {
  public lista_jogos?: Jogo[];

  constructor(private _router: Router, private jogoFirebaseService: JogoFirebaseService) { }

  ngOnInit() {
    this.jogoFirebaseService.getJogos().subscribe(res => {
      this.lista_jogos = res.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Jogo
        } as Jogo;
      })
    })
  }

  public excluir(jogo: Jogo) {
    let resultado = confirm("Deseja excluir o jogo " + jogo.titulo + " ?");
    if (resultado) {
      this.jogoFirebaseService.deletarJogo(jogo)
        .then(() => {
          alert("Jogo excluido com sucesso")
        })
        .catch(() => {
          alert("Erro ao excluir o jogo.")
        })
    }
  }

  public editar(jogo: Jogo): void {
    this._router.navigate(["/EditarJogo", jogo.id]);
  }

  public irParaCadastrarJogo(): void {
    this._router.navigate(["/CadastrarJogo"]);
  }
}