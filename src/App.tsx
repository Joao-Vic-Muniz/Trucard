import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import RegrasPaulista from "./pages/RegrasPaulista"

export default function App() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <Home />
      <RegrasPaulista/>
    </div>
  )
}