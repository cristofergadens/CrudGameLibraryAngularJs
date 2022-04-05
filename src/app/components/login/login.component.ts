import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public formLogin: FormGroup;

  constructor( private _router: Router,
    private _formBuilder: FormBuilder,
    private usuarioService : UsuarioService 
  ) { 
    this.formLogin = this._formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
  }

  private validarFormulario() {
    for (let campos in this.formLogin.controls) {
      this.formLogin.controls[campos].markAsTouched();
    }
  }

  public submitForm() {
    this.validarFormulario();
    if (!this.formLogin.valid) {
      return;
    }
    this.logarComEmailPassword();
  }

  public logarComEmailPassword(){
    this.usuarioService.loginComEmailPassword(
      this.formLogin.controls['email'].value,
      this.formLogin.controls['password'].value)
    .then(()=>{
      alert("Login Efetuado com Sucesso!");
      this._router.navigate(["/ListaDeProdutos"]);
    })
    .catch((error)=>{
      alert("Erro ao efetuar Login, tente novamente!");
      console.log(error);
    })
  }

  public logarComGoogleAccount(){
    this.usuarioService.loginComGoogleAccount()
    .then(()=>{
      alert("Login Efetuado com Sucesso!");
      this._router.navigate(["/ListaDeProdutos"]);
    })
    .catch((error)=>{
      alert("Erro ao efetuar Login, tente novamente!");
      console.log(error);
    })
  }

}