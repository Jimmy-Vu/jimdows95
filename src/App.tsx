import Taskbar from "./components/Taskbar";
import DesktopIcons from "./components/DesktopIcons";
import AboutMe from "./components/windows/AboutMe";

function App() {

  return (
    <>
      <main>
        <DesktopIcons />
        <AboutMe />
        <Taskbar />
      </main>
    </>
  )
}

export default App
