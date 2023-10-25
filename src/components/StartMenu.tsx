import { useAppDispatch } from "../app/hooks";
import { setActiveWindow } from "../app/zIndexSlice";
import { setSorryHalOpenState } from "../app/appSlice";
import linkedinIcon from "/src/assets/linkedin-icon.png";
import githubIcon from "/src/assets/github-icon.png";
import twitterIcon from "/src/assets/twitter-icon.png";
import ieIcon from "/src/assets/IE-icon.png";
import shutdownIcon from "/src/assets/shut_down_with_computer-0.png";

export default function StartMenu(props: { menuIsActive: boolean }) {
  const dispatch = useAppDispatch();
  const menuIsActive = props.menuIsActive;

  function handleSorryHalClick() {
    dispatch(setSorryHalOpenState(true));
    dispatch(setActiveWindow('sorryHal'));
  }

  return (
    <div className={menuIsActive ? `start-menu` : `start-menu--inactive`}>
      <div className="start-menu__banner">
        <p className="start-menu__banner__name">Jimdows95</p>
      </div>
      <section className="start-menu__app-drawer">
        <div className="app-drawer__programs">
          <a href="https://www.linkedin.com/in/jimmyvu2/" target="_blank" className="programs__item" id="linkedin">
            <img className="programs__item__icon" src={linkedinIcon} alt="icon of an address book" />
            <p className="programs__item__text">LinkedIn</p>
          </a>
          <a href="https://github.com/Jimmy-Vu" target="_blank" className="programs__item" id="github">
            <img className="programs__item__icon" src={githubIcon} alt="icon of two computers connecting to a cloud" />
            <p className="programs__item__text">GitHub</p>
          </a>
          <a href="https://twitter.com/thrownewJimmy" target="_blank" className="programs__item" id="twitter">
            <img className="programs__item__icon" src={twitterIcon} alt="icon of envelopes in a basket in front of a globe" />
            <p className="programs__item__text">Twitter</p>
          </a>
          <a href="https://www.youtube.com/watch?v=lAkuJXGldrM" target="_blank" className="programs__item" id="IE">
            <img className="programs__item__icon" src={ieIcon} alt="icon of internet explorer" />
            <p className="programs__item__text">A Cool Video</p>
          </a>
        </div>
        <button onClick={handleSorryHalClick} className="app-drawer__shut-down">
          <img className="shut-down__icon" src={shutdownIcon} alt="icon for the shut down button" />
          <p className="shut-down__text">Shut Down</p>
        </button>
      </section>
    </div>
  )
}
