import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { createRecipesSlice, RecipesSliceType } from "./recipeSlice"
import { createFavoriteSlice, favoriteSliceType } from "./favoriteSlice"
import { createNotificationSlice, NotificationSliceType } from "./notificationSlice"


export const useAppStore = create<RecipesSliceType & favoriteSliceType & NotificationSliceType>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoriteSlice(...a),
    ...createNotificationSlice(...a)
})))
