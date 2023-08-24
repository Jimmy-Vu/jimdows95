import { useEffect, useState } from "react"

export default function Taskbar() {
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
      }))}, 1000)
  }, [])

  return (
    <>
      <section className="taskbar">
        <button className="taskbar__menu-btn">Start</button>
        <div className="taskbar__time">
            <p>{currTime}</p>
        </div>
      </section>
    </>
  )
}
