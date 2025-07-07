import Home from "./home/page"
import Project from "./projects/page"
import About from "./about/page"
import Contact from "./contact/page"
import Skills from "./skills/page"

export default function Home_Page(){
  return(
    <div>
      <Home />
      <Project />
      <About />
      <Skills />
      <Contact />
    </div>
  )
}