import { StateCreator } from "zustand"
import { getCategories, getRecipes, getRecipeById } from "../services/RecipeServices"
import { Categories, SearchFilter,Drinks,Drink, Recipe} from "../types/index"
import { favoriteSliceType } from "./favoriteSlice"

export type RecipesSliceType={
    categories:Categories,
    drinks:Drinks,
    modal:boolean,
    selectedRecipe:Recipe
    fetchCategories:()=>Promise<void>,
    searchRecipes:(searchFilter:SearchFilter)=>Promise<void>
    selectRecipe:(id:Drink['idDrink'])=>Promise<void>,
    closeModal:()=>void
}

export const createRecipesSlice:StateCreator<RecipesSliceType & favoriteSliceType,[],[], RecipesSliceType>=(set)=>({
    categories:{
        drinks:[]
    },
    modal:false,
    drinks:{drinks:[]},
    selectedRecipe:{} as Recipe,
    fetchCategories:async()=>{
        const categories=await getCategories()
        set(()=>({
            categories
        }))
    },
    searchRecipes:async(searchFilter)=>{
        const drinks=await getRecipes(searchFilter)
        set({
            drinks
        })
    },
    selectRecipe:async(id)=>{
        const selectedRecipe =await getRecipeById(id)
        set({
            selectedRecipe,
            modal:true
        })
    },
    closeModal:()=>{
        set({
            selectedRecipe:{} as Recipe,
            modal:false
        })
    },
})