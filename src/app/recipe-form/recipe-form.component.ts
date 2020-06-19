import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms'
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {
  recipeForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private recipeService: RecipeService
  ) {
    this.recipeForm = this.formBuilder.group({
      name: '',
      ingredients: [],
      steps: this.formBuilder.array([this.formBuilder.group({
        title: '',
        text: '',
        image: '',
        timer: ''
      })])
    })
  }

  ngOnInit(): void {
  }

  onSubmit(data) {

    this.recipeForm.reset();

  }

}
