import { Suspense } from 'react'
import './App.css'
import Books from './Books/Books'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import FeaturedAuthors from './FeaturedAuthors/FeaturedAuthors'
import ReaderFavorites from './ReaderFavorites/ReaderFavorites'
import WhyChooseUs from './WhyChooseUs/WhyChooseUs'
import { ToastContainer } from 'react-toastify'


const fetchBooks = async () => {
  const res = await fetch('/books.json')
  return res.json()
}

function App() {

  const booksPromise = fetchBooks()



  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>


      <Suspense fallback={<div className='flex justify-center mx-auto text-black py-10'>
        <span className="loading loading-dots loading-xl"></span>
      </div>
      }>
        <Books booksPromise={booksPromise}></Books>
      </Suspense>


      <ReaderFavorites></ReaderFavorites>
      <FeaturedAuthors></FeaturedAuthors>
      <WhyChooseUs></WhyChooseUs>
      <Footer></Footer>

      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
