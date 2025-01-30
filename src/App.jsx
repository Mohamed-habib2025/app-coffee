import WhereToBuy from "./components/WhereToBuy"
import Appbanner from "./components/Appbanner"
import Services from "./components/Services"
import Footer from "./components/Footer"
import Hero from "./components/Hero"


function App() {
  return (
    <div className=" overflow-x-hidden">
      <Hero />
      <Services />
      <WhereToBuy />
      <Appbanner />
      <Footer />
    </div>
  )
}

export default App
