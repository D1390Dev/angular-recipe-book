import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    //Array of recipe ../recipe.model.ts
    private recipes: Recipe[] = [
        new Recipe(
            'Beans', 
            'This is an amazing soup',
            'https://img.delicious.com.au/fVd1u6k7/w1200/del/2022/02/chicken-chickpea-curry-163942-1.jpg',
            [
                new Ingredient ('Meat', 1),
                new Ingredient ('French Fries', 5)
            ]),
        new Recipe(
            'Burger',
            'This is a delicious burger',
            'https://sevilla.abc.es/contenidopromocionado/wp-content/uploads/sites/2/2019/09/rrss-wp-burguer.jpeg',
            [
                new Ingredient ('Buns', 2),
                new Ingredient ('Meat', 3)
            ])
    ];

    constructor(private slService: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();//Devuelve una copia exacta por lo que no se puede acceder al dato original
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}