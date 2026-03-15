import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import RegrasPaulista from "./pages/RegrasPaulista"
import RegrasMineiro from "./pages/RegrasMineiro"
import Sinais from "./pages/sinais"

export default function App() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <Home />
      <RegrasPaulista />
      <RegrasMineiro />
      <Sinais />
    </div>
  );
}