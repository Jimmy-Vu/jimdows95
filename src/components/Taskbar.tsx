import { useEffect, useState } from "react"
import StartMenu from "./StartMenu";

export default function Taskbar() {
  const [menuIsActive, setMenuIsActive] = useState(true);
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
          <img src="/src/assets/win95_logo.png" alt="" />
          Start
        </button>
        <div className="taskbar__time">
          <p>{currTime}</p>
        </div>
      </section>
    </>
  )
}
