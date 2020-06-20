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
  success = false;

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

  }

  get ingredients() {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  get steps() {
    return this.recipeForm.get('steps') as FormArray;
  }

  addIngredient() {
    let ingredient = this.formBuilder.control('');

    this.ingredients.push(ingredient);

  }

  addStep() {
    let step = this.formBuilder.group({
      title: '',
      text: '',
      image: 'https://'
    })

    this.steps.push(step)

  }

  deleteIngredient(i) {
    this.ingredients.removeAt(i);
  }

  deleteStep(i) {
    this.steps.removeAt(i);
  }

  async  onSubmit() {
    const recipe = this.recipeForm.value;
    try {
      await this.recipeService.addRecipe(recipe);
    } catch (err) {
      console.log(err);
    }
    this.recipeForm.reset();
    this.success = true;
  }

}
