import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  posts: any[] = [];

  ngOnInit(): void {
    this.apiService.getPosts().subscribe((posts) => {
      console.log(posts);
    });
  }
}

