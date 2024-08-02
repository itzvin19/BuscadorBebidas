import { StateCreator } from "zustand"
import { getCategories, getRecipes, getRecipeById } from "../services/RecipeServices"
import { Categories, SearchFilter,Drinks,Drink, Recipe} from "../types/index"

export type RecipesSliceType={
    categories:Categories,
    drinks:Drinks,
    selectedRecipe:Recipe
    fetchCategories:()=>Promise<void>,
    searchRecipes:(searchFilter:SearchFilter)=>Promise<void>
    selectRecipe:(id:Drink['idDrink'])=>Promise<void>
}

export const createRecipesSlice:StateCreator<RecipesSliceType>=(set)=>({
    categories:{
        drinks:[]
    },
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
            selectedRecipe
        })
    }
})