import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-theme',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-theme.component.html',
  styleUrl: './new-theme.component.css'
})
export class NewThemeComponent {

  constructor(private apiService: ApiService) { }

  addTheme(form: NgForm) {
    if(form.invalid) {
      return
    }

    console.log(form.invalid);
    console.log(form.value);
    
  }

}
