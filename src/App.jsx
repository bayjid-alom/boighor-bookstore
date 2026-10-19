import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import FeaturedAuthors from './FeaturedAuthors/FeaturedAuthors'
import ReaderFavorites from './ReaderFavorites/ReaderFavorites'
import WhyChooseUs from './WhyChooseUs/WhyChooseUs'

function App() {


  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>


      <ReaderFavorites></ReaderFavorites>
      <FeaturedAuthors></FeaturedAuthors>
      <WhyChooseUs></WhyChooseUs>
      <Footer></Footer>
    </>
  )
}

export default App
