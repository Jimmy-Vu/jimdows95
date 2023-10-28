import { useEffect, useState } from "react"
import StartMenu from "./StartMenu";
import win95Logo from "/src/assets/win95_logo.png";

export default function Taskbar() {
  const [menuIsActive, setMenuIsActive] = useState(false);
  const [currTime, setCurrTime] = useState(new Date().toLocaleTimeString(undefined, {
    hour12: true, // Keep AM/PM indicator
    hour: 'numeric',
    minute: 'numeric'
  }));

  useEffect(() => {
    setInterval(() => {
      setCurrTime(new Date().toLocaleTimeString(undefined, {
        hour12: true, // Keep AM/PM indicator
        hour: 'numeric',
        minute: 'numeric'
      }))
    }, 1000)
  }, [])

  return (
    <>
      <StartMenu menuIsActive={menuIsActive} />
      <section className="taskbar">
        <button onClick={() => setMenuIsActive(prev => !prev)} className={menuIsActive ? `taskbar__menu-btn--active` : `taskbar__menu-btn` }>
          <img src={win95Logo} alt="windows 95 logo" />
          Start
        </button>
        <div className="taskbar__open-apps">

        </div>
        <div className="taskbar__time">
          <p>{currTime}</p>
        </div>
      </section>
    </>
  )
}
