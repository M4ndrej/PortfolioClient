
import {Fragment} from "react"
import NavBar from '../layouts/NavBar'
import Footer from '../layouts/Footer'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
export default function HomePage(){

   return(
      <Fragment>
        <NavBar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </Fragment>
   )
}