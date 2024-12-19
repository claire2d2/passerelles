import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <main className="min-h-screen flex flex-col items-center">
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">navbar</nav>
      <div className="flex flex-1 flex-col gap-20 max-w-5xl p-5"><Outlet/></div>
      <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">footer</footer>
    </div>
    </main>
  )
}

export default Layout
