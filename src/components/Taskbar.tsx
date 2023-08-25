import { useEffect, useState } from "react"

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
