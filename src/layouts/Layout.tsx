import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"
import Notification from "../components/Notification"
import { useAppStore } from "../stores/useAppStore"
import { useEffect } from "react"

export const Layout = () => {

  const loadFromStorage = useAppStore(state => state.loadFromStorage)

  useEffect(() => {
    loadFromStorage()
  }, [])

  return (
    <>
      <Header></Header>
      <main className="container mx-auto py-16 px-5 xl:px-0">
        <Outlet></Outlet>
      </main>
      <Notification/>
    </>

  )
}
