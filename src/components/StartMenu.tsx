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
        <div className="app-drawer__shut-down"></div>
      </section>
    </div>
  )
}
