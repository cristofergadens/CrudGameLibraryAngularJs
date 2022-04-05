import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuario: any;
  storage: Storage;

  constructor(private authService: AngularFireAuth) {
    this.storage = window.localStorage;
    this.getUsuarioAutenticado();
  }

  getUsuarioAutenticado() {
    return this.authService.currentUser.then((data) => {
      console.log(data);
      this.usuario = data;
      this.storage.setItem("condicao", "autenticado");
    })
  }

  loginComEmailPassword(email: string, password: string) {
    return this.authService.signInWithEmailAndPassword(email, password)
      .then((data) => {
        this.storage.setItem("condicao", "autenticado");
      })
  }

  cadastrarComEmailPassword(email: string, password: string) {
    return this.authService.createUserWithEmailAndPassword(email, password);
  }

  loginComGoogleAccount() {
    return this.authLoginProvider(new GoogleAuthProvider())
      .then((data) => {
        this.storage.setItem("condicao", "autenticado");
      })
  }

  authLoginProvider(provider: any) {
    return this.authService.signInWithPopup(provider);
  }

  logout() {
    this.storage.setItem("condicao", "deslogado");
    return this.authService.signOut();
  }
}

