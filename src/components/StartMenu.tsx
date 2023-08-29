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
            <img className="programs__item__icon" src="/src/assets/linkedin-icon.png" alt="icon of an address book" />
            <p className="programs__item__text">LinkedIn</p>
          </a>
          <a href="https://github.com/Jimmy-Vu" target="_blank" className="programs__item" id="github">
            <img className="programs__item__icon" src="/src/assets/github-icon.png" alt="icon of two computers connecting to a cloud" />
            <p className="programs__item__text">GitHub</p>
          </a>
          <a href="https://twitter.com/thrownewJimmy" target="_blank" className="programs__item" id="twitter">
            <img className="programs__item__icon" src="/src/assets/twitter-icon.png" alt="icon of envelopes in a basket in front of a globe" />
            <p className="programs__item__text">Twitter</p>
          </a>
          <a href="https://www.youtube.com/watch?v=lAkuJXGldrM" target="_blank" className="programs__item" id="dimdev">
            <img className="programs__item__icon" src="/src/assets/dimdev-icon.png" alt="icon of internet explorer" />
            <p className="programs__item__text">A Cool Video</p>
          </a>
        </div>
        <button className="app-drawer__shut-down">
          <img className="shut-down__icon" src="/src/assets/shut_down_with_computer-0.png" alt="icon for the shut down button" />
          <p className="shut-down__text">Shut Down</p>
        </button>
      </section>
    </div>
  )
}
