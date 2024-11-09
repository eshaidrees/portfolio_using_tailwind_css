import Home from "./home/page"
import Project from "./projects/page"
import About from "./about/page"
import Contact from "./contact/page"

export default function Homes(){
  return(
    <div>
      <Home />
      <Project />
      <About />
      <Contact />
    </div>
  )
}