import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes;

  constructor(
    private recipeService: RecipeService
  ) { }

  async ngOnInit() {
    this.recipes = await this.recipeService.getRecipes().toPromise();
    console.log("Recipe data", this.recipes)
  }

}
