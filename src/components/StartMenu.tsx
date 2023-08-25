import { useState } from "react"

export default function StartMenu() {
  const [startIsOpened, setStartIsOpened] = useState(true);

  return (
    <div className={startIsOpened ? `start-menu` : `start-menu--inactive`}>
      <div className="start-menu__banner">
        <p className="start-menu__banner__name">Jimdows95</p>
      </div>
      <section className="start-menu__app-drawer">
        <div className="app-drawer__programs"></div>
        <button className="app-drawer__shut-down">
          <img src="/src/assets/shut_down_with_computer-0.png" alt="icon for the shut down button" />
          <p>Shut Down</p>
        </button>
      </section>
    </div>
  )
}
