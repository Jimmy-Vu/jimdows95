import Taskbar from "./components/Taskbar";
import DesktopIcons from "./components/DesktopIcons";
import AboutMe from "./components/windows/AboutMe";
import Projects from "./components/windows/projects/Projects";
import ContactMe from "./components/windows/ContactMe";
import { selectActive } from "./app/zIndexSlice";
import { useEffect } from "react";
import { useAppSelector } from "./app/hooks";

function App() {
  const active = useAppSelector(selectActive);

  useEffect(() => {
    console.log(active);
  }, [active]);

  return (
    <>
      <main className="app__main">
        <DesktopIcons />
        <AboutMe />
        <Projects />
        <ContactMe />
        <Taskbar />
      </main>
    </>
  )
}

export default App
