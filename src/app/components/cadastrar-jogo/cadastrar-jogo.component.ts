import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Jogo } from 'src/app/models/jogo';
import { JogoFirebaseService } from 'src/app/services/jogo.firebase.service';
import { ImagemService } from '../../services/imagem.service';

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
  public imgURL? : string;

  constructor(
    private _router: Router,
    private jogoFirebaseService: JogoFirebaseService,
    private _formBuilder: FormBuilder,
    public imagemService : ImagemService) {
      this.formCadastrar = this._formBuilder.group({
        titulo: ["", [Validators.required , Validators.minLength(5)]],
        preco: ["", [Validators.required]],
        devs: ["", [Validators.required]],
        genero: ["", [Validators.required]],
        modoJogo: ["", [Validators.required]],
        plataforma: ["", [Validators.required]],
        lancamento: ["", [Validators.required]],
        downloadURL : ["", [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  private validarFormulario(){
    for(let campos in this.formCadastrar.controls){
      this.formCadastrar.controls[campos].markAllAsTouched();
    }
  }

  public submitForm() {
    this.validarFormulario();
    if(!this.formCadastrar.valid){
      return;
    }
    this.salvar();
  }

  public salvar() : void{
    const target = document.getElementById("file") as HTMLInputElement;
    const file : File = (target.files as FileList)[0];
    if(file.type.split('/')[0] != 'image'){
      alert("Tipo de arquivo não suportado");
      console.log("tipo não suportado");
      return;
    }
    else{
    console.log(document.getElementById("file"))
    this.uploadFile(file, this.formCadastrar.value)
    .then(()=>(console.log("salvo com sucesso!")))
    .catch((error)=>(console.log(error)))
    ;}}

  public irParaListaDeJogos(): void {
    this._router.navigate(["/ListaDeJogos"]);
  }


  public uploadFile(event: any, jogo : Jogo){
    
    return this.imagemService.uploadStorage(event, jogo)
    .then((data)=>{console.log(data)}) 
    .catch((error)=>{console.log(error)}) 
  }
}