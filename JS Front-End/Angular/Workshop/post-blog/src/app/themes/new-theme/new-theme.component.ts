import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-theme',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-theme.component.html',
  styleUrl: './new-theme.component.css'
})
export class NewThemeComponent {

  constructor(private apiService: ApiService, private router: Router) { }

  addTheme(form: NgForm) {
    if(form.invalid) {
      return
    }

    const {themeName, postText} = form.value

    this.apiService.createTheme(themeName, postText).subscribe(() => {
      this.router.navigate(['/themes']);
    })
  }
}
