import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Jogo } from 'src/app/models/jogo';
import { JogosService } from 'src/app/services/jogos.service';
import { JogoFirebaseService } from 'src/app/services/jogo.firebase.service';


@Component({
  selector: 'app-editar-jogo',
  templateUrl: './editar-jogo.component.html',
  styleUrls: ['./editar-jogo.component.scss']
})
export class EditarJogoComponent implements OnInit {
  public formEditar: FormGroup;
  public id?: any;
  public options = new FormControl();
  public gamemode: string[] = ['Single Player', 'Multiplayer Local', 'Multiplayer Online'];
  public plataformaLista: string[] = ['console', 'PC', 'Multiplataforma'];

  constructor(private _router: Router,
    private _jogoFirebaseService: JogoFirebaseService,
    private _formBuilder: FormBuilder,
    private _actRoute: ActivatedRoute) {
    this.formEditar = this._formBuilder.group({
      titulo: ["", [Validators.required, Validators.minLength(5)]],
      preco: ["", [Validators.required]],
      devs: ["", [Validators.required]],
      genero: ["", [Validators.required]],
      modoJogo: ["", [Validators.required]],
      plataforma: ["", [Validators.required]],
      lancamento: ["", [Validators.required]],
    });
  }

  ngOnInit(): void {
    this._actRoute.params.subscribe((parametros) => {
      if (parametros["indice"]) {
        this.id = parametros["indice"]
        this._jogoFirebaseService.getJogo(parametros["indice"])
          .subscribe(res => {
            let jogoRef: any = res;
            this.formEditar = this._formBuilder.group({
              titulo: [jogoRef.titulo, [Validators.required, Validators.minLength(5)]],
              preco: [jogoRef.preco, [Validators.required]],
              devs: [jogoRef.devs, [Validators.required]],
              genero: [jogoRef.genero, [Validators.required]],
              modoJogo: [jogoRef.modoJogo, [Validators.required]],
              plataforma: [jogoRef.plataforma, [Validators.required]],
              lancamento: [jogoRef.lancamento, [Validators.required]]
            });
          });
      }
    });
  }

  private validarFormulario() {
    for (let campos in this.formEditar.controls) {
      this.formEditar.controls[campos].markAsTouched();
    }
  }

  public submitForm() {
    this.validarFormulario();
    if (!this.formEditar.valid) {
      return;
    }
    this.salvar();
  }

  public salvar(): void {
    this._jogoFirebaseService.editarJogo(this.formEditar.value, this.id)
      .then(() => {
        alert("Jogo editado com sucesso");
        this._router.navigate(["/ListaDeJogos"]);
      })
      .catch((error) => {
        console.log(error)
        alert("Erro ao editar jogo.");
      })
  }

  public irParaListaDeJogos(): void {
    this._router.navigate(["/ListadeJogos"]);
  }
}

