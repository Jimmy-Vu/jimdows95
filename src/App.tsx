import Taskbar from "./components/Taskbar";
import DesktopIcons from "./components/DesktopIcons";
import AboutMe from "./components/windows/AboutMe";
import Projects from "./components/windows/projects/Projects";
import ContactMe from "./components/windows/ContactMe";
import SorryHal from "./components/windows/SorryHal";

function App() {
  return (
    <>
      <main className="app__main">
        <DesktopIcons />
        <AboutMe />
        <Projects />
        <ContactMe />
        <SorryHal />
        <Taskbar />
      </main>
    </>
  )
}

export default App
