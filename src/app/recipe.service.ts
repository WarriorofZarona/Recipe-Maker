import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipe = [];

  getRecipes() {
    return this.http.get('/api/recipes')
  }

  constructor(
    private http: HttpClient
  ) { }
}
