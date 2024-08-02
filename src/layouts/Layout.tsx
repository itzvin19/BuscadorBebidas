import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"

export const Layout = () => {
  return (
    <>
      <Header></Header>
      <main className="container mx-auto py-16 px-5 xl:px-0">
        <Outlet></Outlet>
      </main>
    </>

  )
}
