import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import RegrasPaulista from "./pages/RegrasPaulista"
import RegrasMineiro from "./pages/RegrasMineiro"
import Sinais from "./pages/Sinais"

export default function App() {
  return (
    <div className="bg-[#080810] min-h-screen">
      <Navbar />
      <Home />
      <RegrasPaulista />
      <RegrasMineiro />
      <Sinais />
    </div>
  );
}