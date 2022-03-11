import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Jogo } from 'src/app/models/jogo';
import { JogosService } from 'src/app/services/jogos.service';
import { MatSelect } from '@angular/material/select'; 


@Component({
  selector: 'app-cadastrar-jogo',
  templateUrl: './cadastrar-jogo.component.html',
  styleUrls: ['./cadastrar-jogo.component.scss']
})
export class CadastrarJogoComponent implements OnInit {
  public formCadastrar: FormGroup;
  public options = new FormControl();
  public gamemode: string[] = ['Single Player', 'Multiplayer Local', 'Multiplayer Online'];
  public plataformaLista: string[] = ['console', 'PC', 'Multiplataforma'];

  constructor(private _router: Router,
    private jogoService: JogosService,
    private _formBuilder: FormBuilder) {
    this.formCadastrar = this._formBuilder.group({
      titulo: ["", [Validators.required]],
      preco: ["", [Validators.required]],
      devs: ["", [Validators.required]],
      genero: ["", [Validators.required]],
      modoJogo: ["", [Validators.required]],
      plataforma: ["", [Validators.required]],
      lancamento: ["", [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  private validarFormulario(){
    for(let campos in this.formCadastrar.controls){
      this.formCadastrar.controls[campos].markAsTouched();
    }
  }

  public submitForm() {
    this.validarFormulario();
    if(!this.formCadastrar.valid){
      return;
    }
    this.salvar();
  }

  public salvar(): void {
    if(this.jogoService.inserirJogo(new Jogo(
      this.formCadastrar.controls["titulo"].value,
      this.formCadastrar.controls["preco"].value,
      this.formCadastrar.controls["devs"].value,
      this.formCadastrar.controls["genero"].value,
      this.formCadastrar.controls["modoJogo"].value,
      this.formCadastrar.controls["plataforma"].value,
      this.formCadastrar.controls["lancamento"].value))){
      alert("Jogo salvo com sucesso!")
      this._router.navigate(["/ListaDeJogos"]);
    } else {
      alert("Erro ao salvar jogo");
    }
  }
}
