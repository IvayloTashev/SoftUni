import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './types/post';
import { Theme } from './types/theme';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getPosts(limit?: number) {
    let url = `/api/posts`;

    if (limit) {
      url += `?limit=${limit}`
    }

    return this.http.get<Post[]>(url);
  }

  getThemes() {
    let url = `/api/themes`;
    return this.http.get<Theme[]>(url);
  }

  getSingleTheme(id: string) {
    let url = `/api/themes/${id}`;
    return this.http.get<Theme>(url);
  }

  createTheme(themeName: string, postText: string) {
    const payload = {themeName, postText};
    return this.http.post(`/api/themes`, payload)
  }

  updateTheme(themeId: string, themeName: string, postText: string) {
    const payload = {themeName, postText};
    return this.http.post(`/api/themes/${themeId}`, payload)
  }

  editTheme(themeId: string, postId: string) {
    const payload = {};
    return this.http.post(`/api/themes/${themeId}/posts/${postId}`, payload)
  }

  deleteTheme(themeId: string, postId: string) {
    return this.http.delete(`/api/themes/${themeId}/posts/${postId}`)
  }
}
