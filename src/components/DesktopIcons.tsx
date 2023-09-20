import { useAppDispatch } from "../app/hooks";
import { setAboutMeOpenState, setProjectsOpenState, setContactMeOpenState } from "../app/appSlice";

export default function DesktopIcons() {
  const dispatch = useAppDispatch();

  function handleAboutMeClick() {
    dispatch(setAboutMeOpenState(true));
  }

  function handleProjectsClick() {
    dispatch(setProjectsOpenState(true));
  }

  function handleContactMeClick() {
    dispatch(setContactMeOpenState(true));
  }

  return (
    <section className="desktop-icons">
      <div data-item="about-me" className="icon about-me-icon">
        <button id="about-me__icon-img" className="icon-img about-me__icon-img" onClick={handleAboutMeClick}>
          <img src="src/assets/about-me-icon.png" alt="an icon of a man's head" />
        </button>
        <label htmlFor="about-me__icon-img" className="about-me__label">About Me</label>
      </div>

      <div data-item="projects" className="icon projects-icon">
        <button id="projects__icon-img" className="icon-img projects__icon-img" onClick={handleProjectsClick}>
          <img src="src/assets/open-folder-icon.png" alt="an icon of an opened folder with a sheet of paper popping out" />
        </button>
        <label htmlFor="projects__icon-img" className="projects__label">Projects</label>
      </div>

      <div data-item="contact" className="icon contact-icon">
        <button id="contact__icon-img" className="icon-img contact__icon-img" onClick={handleContactMeClick}>
          <img src="src/assets/aim-icon.png" alt="an icon of a yellow illusrated person in a walking position" />
        </button>
        <label htmlFor="contact__icon-img" className="contact__label">Contact Me</label>
      </div>
    </section>
  );
}
