import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaDeJogosComponent } from './components/lista-de-jogos/lista-de-jogos.component';
import { CadastrarJogoComponent } from './components/cadastrar-jogo/cadastrar-jogo.component';
import { EditarJogoComponent } from './components/editar-jogo/editar-jogo.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaDeJogosComponent,
    CadastrarJogoComponent,
    EditarJogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
