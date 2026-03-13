import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Cards from "./components/Cards"

function App(){

  return (
    <>
      <Navbar/>
      <div className="cards-container">
      <Cards title="card1" description="description 1"/>
      <Cards title="card2" description="dec2" />
      <Cards title="card3" description="dec3"/>
      <Cards title="card4" description="dec4"/>

      
      </div>
      <Footer/>

    </>
  )
}

export default App


