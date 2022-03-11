import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JogosService } from 'src/app/services/jogos.service';
import { Jogo } from 'src/app/models/jogo';

@Component({
  selector: 'app-editar-jogo',
  templateUrl: './editar-jogo.component.html',
  styleUrls: ['./editar-jogo.component.scss']
})
export class EditarJogoComponent implements OnInit {
  public formEditar: FormGroup;
  private indice: number = -1;

  constructor(private _router: Router,
    private _jogoService: JogosService,
    private _formBuilder: FormBuilder,
    private _actRoute: ActivatedRoute) {
    this.formEditar = this._formBuilder.group({
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
    this._actRoute.params.subscribe((parametros) => {
      if (parametros["indice"]) {
        this.indice = parametros["indice"];
        let jogo = this._jogoService.getJogo(this.indice);
        this.formEditar = this._formBuilder.group({
          titulo: [jogo.getTitulo(), [Validators.required]],
          preco: ["", [Validators.required]],
          devs: ["", [Validators.required]],
          genero: ["", [Validators.required]],
          modoJogo: ["", [Validators.required]],
          plataforma: ["", [Validators.required]],
          lancamento: ["", [Validators.required]],
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
    let jogo = new Jogo(
      this.formEditar.controls["titulo"].value,
      this.formEditar.controls["preco"].value,
      this.formEditar.controls["devs"].value,
      this.formEditar.controls["genero"].value,
      this.formEditar.controls["modoJogo"].value,
      this.formEditar.controls["plataforma"].value,
      this.formEditar.controls["lancamento"].value);
    if (this._jogoService.editarJogo(this.indice, jogo)) {
      alert("Jogo editado com sucesso");
      this._router.navigate(["/ListaDeJogos"]);
    } else {
      alert("Erro ao editar jogo.");
    }
  }
}
