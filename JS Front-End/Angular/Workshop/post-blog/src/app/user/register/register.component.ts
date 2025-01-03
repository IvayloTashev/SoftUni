import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { emailValidator } from '../../utils/email.validator';
import { DOMAINS } from '../../constants';
import { matchPasswordsValidator } from '../../utils/match-passwords.validator';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private userService: UserService, private router: Router) { }

  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, emailValidator(DOMAINS)]),
    tel: new FormControl(''),
    passGroup: new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      rePassword: new FormControl('', [Validators.required]),
    }, {
      validators: [matchPasswordsValidator('password', 'rePassword')],
    })
  })

  isRequired(controlName: string) {
    return (
      (this.form.get(controlName)?.touched && this.form.get(controlName)?.errors?.['required'])
    )
  }

  isPassRequired(controlName: string) {
    return (
      this.passGroup?.get(controlName)?.errors?.['required']
    )
  }

  isNotMinLength(controlName: string) {
    return (
      (this.form.get(controlName)?.touched && this.form.get(controlName)?.errors?.['minlength'])
    )
  }

  isPassNotMinLength(controlName: string) {
    return (
      (this.passGroup?.get(controlName)?.touched && this.passGroup?.get(controlName)?.errors?.['minlength'])
    )
  }

  get isEmailNotInvalid() {
    return (
      this.form.get('email')?.errors?.['emailValidator']
    )
  }

  get passGroup() {
    return (
      this.form.get('passGroup')
    )
  }


  register() {
    if (this.form.invalid) {
      return
    }

    const { username,
      email,
      tel,
      passGroup: { password, rePassword } = {},
    } = this.form.value;

    this.userService.register(username!, email!, tel!, password!, rePassword!)
      .subscribe(() => {
        this.router.navigate(['/themes'])
      })
  }

}
