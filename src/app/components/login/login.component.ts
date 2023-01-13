import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loading = false;

  hide = true;
  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      email:['', Validators.required],
      password:['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  ingresar(){
    const email = this.form.value.email;
    const password = this.form.value.password;
    
    if(email == "angemar@autonomadeica.edu.pe" && password == "Paraiso09$"){
      //Redireccionar al dashboard
      this.failLoading();
    } else {
      //Mensajen de error
      this.error();
      this.form.reset();
    }
  }

  error(){
    this._snackBar.open('El usuario o la contraseña incorrecta', '', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom'
    });
  }

  failLoading(){
    this.loading = true;
    setTimeout(() => {
      //Redireccional al dashboard
      this.router.navigate(['inicio']);
    }, 1500);
  }

}
