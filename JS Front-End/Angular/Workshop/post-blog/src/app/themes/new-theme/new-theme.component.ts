import { Component } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-new-theme',
  standalone: true,
  imports: [],
  templateUrl: './new-theme.component.html',
  styleUrl: './new-theme.component.css'
})
export class NewThemeComponent {

  constructor(private apiService: ApiService) { }

  addTheme(event: Event, themeName: string, postText: string) {
    event.preventDefault();

    this.apiService.createTheme(themeName, postText).subscribe((data) => {
      console.log(data);
      
    })
  
  }

}
