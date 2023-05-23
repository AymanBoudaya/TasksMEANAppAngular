import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/core/core.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private _coreService : CoreService,private router:Router) {
    this.form = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {

  }
  onSumbit() {
    const user = this.form.value.user;
    const password = this.form.value.password;
    if (user =="admin" && password=="password") {
      this._coreService.openSnackBar('vous êtes connecté !','fait!')
      this.router.navigate(['/dashboard'])

      this.fakeLoading()
    } else {
      this._coreService.openSnackBar('Donnés non valides','Erreur')
      this.form.reset();
    }
    console.log(user);
    console.log(password);
  }

  fakeLoading(){
    this.loading = true;
    setTimeout(() => {
      this.loading = false;

    }, 1500);
  }

}

