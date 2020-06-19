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
  ) { }

  ngOnInit(): void {
    this.recipeForm = this.formBuilder.group({
      name: '',
      ingredients: this.formBuilder.array([]),
      steps: this.formBuilder.array([])
    })

    this.recipeForm.valueChanges.subscribe(console.log)
  }

  get ingredients() {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  get steps() {
    return this.recipeForm.get('steps') as FormArray;
  }

  addIngredient() {
    const ingredient = this.formBuilder.control('');

    this.ingredients.push(ingredient);

  }

  addStep() {
    const step = this.formBuilder.group({
      title: '',
      text: '',
      image: ''
    })

    this.steps.push(step)

  }

  deleteIngredient(i) {
    this.ingredients.removeAt(i);
  }

  deleteStep(i) {
    this.steps.removeAt(i);
  }

}
