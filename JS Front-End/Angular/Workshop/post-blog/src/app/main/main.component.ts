import { Component } from '@angular/core';
import { ThemesListComponent } from '../themes/themes-list/themes-list.component';
import { PostsListComponent } from '../posts/posts-list/posts-list.component';
import { WelcomeMsgComponent } from "../shared/welcome-msg/welcome-msg.component";
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ThemesListComponent, PostsListComponent, WelcomeMsgComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  get isLoggedIn(): boolean {
    return this.userService.IsLogged;
  }

  constructor(private userService: UserService) {} 

}
