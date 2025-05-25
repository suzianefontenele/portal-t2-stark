import AboutSection from "./Pages/Home/sections/AboutSection/AboutSection"
import HomeSection from "./Pages/Home/sections/HomeSection/HomeSection"
import Navbar from "./components/Navbar/Navbar"
import ProjectsSection from "./Pages/Home/sections/ProjectsSection/ProjectsSection"
import Footer from "./components/Footer/Footer"

const App: React.FC = () => {

  return (
    <>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <Footer />
    </>
  )
}

export default App
