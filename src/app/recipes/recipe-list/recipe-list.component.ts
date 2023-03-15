import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Name', 'Test Description', 'https://bing.com/th?id=OSK.768e5ff1e2f170a57b47458687486f7d')


  ];

  constructor(){}

  ngOnInit(){

  }

}
