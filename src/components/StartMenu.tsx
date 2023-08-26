export default function StartMenu(props: { menuIsActive: boolean }) {
  const menuIsActive = props.menuIsActive;

  return (
    <div className={menuIsActive ? `start-menu` : `start-menu--inactive`}>
      <div className="start-menu__banner">
        <p className="start-menu__banner__name">Jimdows95</p>
      </div>
      <section className="start-menu__app-drawer">
        <div className="app-drawer__programs">
          <a href="https://www.linkedin.com/in/jimmyvu2/" target="_blank" className="programs__item" id="linkedin">
            <img src="/src/assets/linkedin-icon.png" alt="icon of an address book" />
            <p className="programs__item__text">My LinkedIn</p>
          </a>
          <a href="https://github.com/Jimmy-Vu" target="_blank" className="programs__item" id="github">
            <img src="/src/assets/github-icon.png" alt="icon of two computers connecting to a cloud" />
            <p className="programs__item__text">GitHub</p>
          </a>
          <a href="https://dimden.dev/" className="programs__item" id="dimdev">
            <img src="/src/assets/dimdev-icon.png" alt="icon of internet explorer" />
            <p className="programs__item__text">A Pretty Cool Retro Site</p>
          </a>
        </div>
        <button className="app-drawer__shut-down">
          <img src="/src/assets/shut_down_with_computer-0.png" alt="icon for the shut down button" />
          <p>Shut Down</p>
        </button>
      </section>
    </div>
  )
}
