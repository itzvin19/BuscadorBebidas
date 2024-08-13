import { StateCreator } from "zustand"
import { favoriteSliceType } from "./favoriteSlice"

type Notification = {
    text: string,
    error: boolean,
    show: boolean
}

export type NotificationSliceType = {
    notification: Notification,
    showNotification: (payload: Pick<Notification, 'text' | 'error'>) => void,
    hideNotification:()=>void
}

export const createNotificationSlice: StateCreator<NotificationSliceType & favoriteSliceType,[],[],NotificationSliceType> = (set,get) => ({
    notification: {
        text: 'Se añadió a favoritos',
        error: false,
        show: false
    },
    showNotification: (payload) => {
        set(() => ({
            notification: {
                text: payload.text,
                error: payload.error,
                show: true
            }
        }))
        setTimeout(()=>{
            get().hideNotification()
        },3000)
    },
    hideNotification:()=>{
        set(()=>({
            notification: {
                ...get().notification,
                show: false
            },
        }))
    }
})