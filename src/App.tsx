import Taskbar from "./components/Taskbar"
import DesktopIcons from "./components/DesktopIcons"
import Window from "./components/windows/Window"

function App() {

  return (
    <>
      <main>
        <DesktopIcons />
        <Window />
        <Taskbar />
      </main>
    </>
  )
}

export default App
