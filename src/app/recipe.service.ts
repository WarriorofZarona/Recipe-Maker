import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes;

  getRecipes() {
    return this.http.get('/api/recipes')
  }

  addRecipe(body) {
    return this.http.post('/api/recipes', body).subscribe(data =>
      console.log(data))
  }

  constructor(
    private http: HttpClient
  ) { }
}
