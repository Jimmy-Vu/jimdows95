export default function DesktopIcons() {
  return (
    <section className="desktop-icons">
      <div className="icon about-me">
        <button id="about-me__icon-img" className="icon-img about-me__icon-img">
          <img src="src/assets/about-me-icon.png" alt="an icon of a man's head" />
        </button>
        <label htmlFor="about-me__icon-img" className="about-me__label">About Me</label>
      </div>

      <div className="icon projects">
        <button id="projects__icon-img" className="icon-img projects__icon-img">
          <img src="src/assets/open-folder-icon.png" alt="an icon of an opened folder with a sheet of paper popping out" />
        </button>
        <label htmlFor="projects__icon-img" className="projects__label">Projects</label>
      </div>

      <div className="icon contact">
        <button id="contact__icon-img" className="icon-img contact__icon-img">
          <img src="src/assets/aim-icon.png" alt="an icon of a yellow illusrated person in a walking position" />
        </button>
        <label htmlFor="contact__icon-img" className="contact__label">Contact Me</label>
      </div>
    </section>
  );
}