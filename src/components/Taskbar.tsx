import { useEffect, useState } from "react"
import StartMenu from "./StartMenu";
import win95Logo from "/src/assets/win95_logo.png";
import { useAppSelector } from "../app/hooks";
import { selectWindows } from "../app/taskbarSlice";
import { setActiveWindow } from "../app/zIndexSlice";

export default function Taskbar() {
  const [menuIsActive, setMenuIsActive] = useState(false);
  const [currTime, setCurrTime] = useState(new Date().toLocaleTimeString(undefined, {
    hour12: true, // Keep AM/PM indicator
    hour: 'numeric',
    minute: 'numeric'
  }));
  const openWindows = useAppSelector(selectWindows);

  useEffect(() => {
    setInterval(() => {
      setCurrTime(new Date().toLocaleTimeString(undefined, {
        hour12: true, // Keep AM/PM indicator
        hour: 'numeric',
        minute: 'numeric'
      }))
    }, 1000)
  }, []);

  function handleClick() {
    setActiveWindow('')
  }

  return (
    <>
      <StartMenu menuIsActive={menuIsActive} />
      <section className="taskbar">
        <button onClick={() => setMenuIsActive(prev => !prev)} className={menuIsActive ? `taskbar__menu-btn--active` : `taskbar__menu-btn` }>
          <img src={win95Logo} alt="windows 95 logo" />
          Start
        </button>
        <section className="taskbar__open-apps">
          {
            openWindows.map(window => (
              <button onClick={handleClick} id={window.id} className="taskbar__open-apps__window">{window.title}</button>
            ))
          }
        </section>
        <section className="taskbar__time">
          <p>{currTime}</p>
        </section>
      </section>
    </>
  )
}
