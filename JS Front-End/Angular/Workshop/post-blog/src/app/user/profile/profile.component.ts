import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { emailValidator } from '../../utils/email.validator';
import { DOMAINS } from '../../constants';
import { profileDetails } from '../../types/user';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  isEditMode: boolean = false;

  profileDetails: profileDetails = {
    username: 'JohnDoe',
    email: 'johndoe@gmail.com',
    tel: '123 123 123'
  }

  form = new FormGroup({
    username: new FormControl(this.profileDetails.username, [Validators.required, Validators.minLength(5)]),
    email: new FormControl(this.profileDetails.email, [Validators.required, emailValidator(DOMAINS)]),
    tel: new FormControl(this.profileDetails.tel),
  })

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  handleSaveProfile() {
    if (this.form.invalid) {
      return;
    }

    this.profileDetails = this.form.value as profileDetails;
    this.toggleEditMode();
  }

  onCancel(event: Event) {
    event.preventDefault();
    this.toggleEditMode();
  }

}
