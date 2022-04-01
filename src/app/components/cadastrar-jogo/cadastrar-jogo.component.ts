import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { JogoFirebaseService } from 'src/app/services/jogo.firebase.service';

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
    private jogoFirebaseService: JogoFirebaseService,
    private _formBuilder: FormBuilder) {
    this.formCadastrar = this._formBuilder.group({
      titulo: ["", [Validators.required , Validators.minLength(5)]],
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
    this.jogoFirebaseService.cadastrarJogo(this.formCadastrar.value)
    .then(() => {
      alert("Jogo salvo com Sucesso!");
      this._router.navigate(["/ListadeJogos"]);
    })
    .catch(() => {
      alert("Erro ao cadastrar jogo, tente novamente!");
    })
  }

  public irParaListaDeJogos(): void {
    this._router.navigate(["/ListadeJogos"]);
  }
}
