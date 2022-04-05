import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarJogoComponent } from './components/cadastrar-jogo/cadastrar-jogo.component';
import { EditarJogoComponent } from './components/editar-jogo/editar-jogo.component';
import { ListaDeJogosComponent } from './components/lista-de-jogos/lista-de-jogos.component';
import { LoginComponent } from './components/login/login.component';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "cadastro", component: CadastrarComponent },
  { path: "CadastrarJogo", component: CadastrarJogoComponent },
  { path: "EditarJogo/:indice", component: EditarJogoComponent }, 
  { path: "ListaDeJogos", component: ListaDeJogosComponent },
  { path: "**", redirectTo: "/login"},
  { path: "", redirectTo: "/login", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
