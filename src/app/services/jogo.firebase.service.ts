import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Jogo } from '../models/jogo';

@Injectable({
  providedIn: 'root'
})
export class JogoFirebaseService {
  private _PATH: string = "jogos";

  constructor(private angularFire: AngularFirestore) { }

  getJogo(id: string) {
    return this.angularFire.collection(this._PATH).doc(id).valueChanges();
  }

  getJogos() {
    return this.angularFire.collection(this._PATH).snapshotChanges();
  }

  cadastrarJogo(jogo: Jogo) {
    return this.angularFire.collection(this._PATH)
      .add(jogo)
      .then(response => {
        console.log(response)
      },
        error => console.log(error));
  }

  deletarJogo(jogo: Jogo) {
    return this.angularFire.collection(this._PATH)
      .doc(jogo.id)
      .delete();
  }

  editarJogo(jogo: Jogo, id: string) {
    return this.angularFire.collection(this._PATH)
      .doc(id)
      .update({
        titulo: jogo.titulo,
        preco: jogo.preco,
        devs: jogo.devs,
        genero: jogo.genero,
        modoJogo: jogo.modoJogo,
        plataforma: jogo.plataforma,
        lancamento: jogo.lancamento
      });
  }
}
