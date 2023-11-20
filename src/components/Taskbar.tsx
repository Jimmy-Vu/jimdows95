import { useEffect, useState } from "react"
import StartMenu from "./StartMenu";
import win95Logo from "/src/assets/win95_logo.png";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectWindows } from "../app/taskbarSlice";
import { setActiveWindow, selectActive } from "../app/zIndexSlice";
import { AnyAction } from "@reduxjs/toolkit";

export default function Taskbar() {
  const dispatch = useAppDispatch();
  const activeWindow = useAppSelector(selectActive);
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

  function handleClick(e: React.MouseEvent<HTMLButtonElement>, openFunc: (arg: boolean) => AnyAction) {
    const target = e.target as HTMLButtonElement;
    dispatch(setActiveWindow(target.id));
    dispatch(openFunc(true));
  }

  function getButtonClassName(isActive: boolean): string {
    return isActive ? "taskbar__open-apps__window--active" : "taskbar__open-apps__window";
  }

  return (
    <>
      <StartMenu menuIsActive={menuIsActive} />
      <section className="taskbar">
        <button
          onClick={() => setMenuIsActive(prev => !prev)}
          className={menuIsActive ? `taskbar__menu-btn--active` : `taskbar__menu-btn`}>
          <img src={win95Logo} alt="windows 95 logo" />
          Start
        </button>
        <section className="taskbar__open-apps">
          {
            openWindows.map(window => (
              <button
                onClick={
                  (e) => handleClick(e, window.openFunc)
                }
                key={window.id}
                id={window.id}
                className={getButtonClassName(activeWindow === window.id)}>
                {window.title}
              </button>
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
