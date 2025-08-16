import './App.css'
import Banner from './components/banner'
import Benefits from './components/benefits'
import CoursesCategory from './components/courses-category'
import CallToAction from './components/cta'
import Footer from './components/footer'
import Header from './components/header'
import PopularCourses from './components/popular'
import Slider from './components/slider'
import Training from './components/training'

function App() {

  return (
    <>
      <Header />
      <Banner />
      <PopularCourses />
      <CoursesCategory />
      <Benefits />
      <Training />
      <CallToAction />
      <Slider />
      <Footer />
    </>
  )
}

export default App
