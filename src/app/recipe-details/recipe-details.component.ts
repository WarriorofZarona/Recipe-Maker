import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipes;
  recipe;
  image = false;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) { }

  async ngOnInit() {
    this.recipes = await this.recipeService.getRecipes().toPromise();
    await this.route.paramMap.subscribe(params => {
      this.recipe = this.recipes[params.get('recipeId')]
    });
  }

}
