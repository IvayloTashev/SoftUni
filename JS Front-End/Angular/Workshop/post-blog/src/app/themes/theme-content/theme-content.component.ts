import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Theme } from '../../types/theme';
import { ApiService } from '../../api.service';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-theme-content',
  standalone: true,
  imports: [],
  templateUrl: './theme-content.component.html',
  styleUrl: './theme-content.component.css'
})
export class ThemeContentComponent implements OnInit {
  theme = {} as Theme

  constructor(private route: ActivatedRoute, private apiService: ApiService, private userService: UserService) { }

  get isLoggedIn(): boolean {
    return this.userService.IsLogged;
  }

  get username():string {
    return this.userService.user?.username || '';
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['themeId'];

    this.apiService.getSingleTheme(id).subscribe((theme) => {
      this.theme = theme;
    })

  }

}

