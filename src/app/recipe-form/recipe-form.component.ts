import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {
  recipeForm;

  constructor(
    private formBuilder: FormBuilder,
    private recipeService: RecipeService
  ) {
    this.recipeForm = this.formBuilder.group({
      name: '',
      ingredients: [],
      steps: [{
        title: "",
        text: "",
        image: "",
        timer: ""
      }
      ]
    })
  }

  ngOnInit(): void {
  }

  onSubmit(data) {

    this.recipeForm.reset();

  }

}
