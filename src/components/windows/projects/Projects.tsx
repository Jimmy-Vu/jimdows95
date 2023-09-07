import WindowFrame from "../WindowFrame";
import { useAppSelector } from "../../../app/hooks";
import { setProjectsState, selectProjectsState } from "../../../app/appSlice";

export default function Projects() {
  const projectsState = useAppSelector(selectProjectsState);

  const content =
    <div className="projects">
      <section className="projects__icons">
        <button className="projects__icons__item">
          <img id="colosseum" src="src/assets/closed_folder.png" alt="" />
          <label htmlFor="colosseum">Colosseum</label>
        </button>
        <button className="projects__icons__item">
          <img id="vicarus" src="src/assets/closed_folder.png" alt="" />
          <label htmlFor="vicarus">Vincent&Icarus</label>
        </button>
        <button id="jimdows95" className="projects__icons__item">
          <img src="src/assets/closed_folder.png" alt="" />
          <label htmlFor="jimdows95">Jimdows95</label>
        </button>
        <button className="projects__icons__item">
          <img id="NHH" src="src/assets/closed_folder.png" alt="" />
          <label htmlFor="NHH">New Horizon Hub</label>
        </button>
      </section>
    </div>;

  return (
    <WindowFrame
      title="Projects"
      icon="src/assets/open-folder-icon.png"
      content={content}
      defaultSize={{width: 600, height: 400}}
      state={projectsState}
      setFunc={setProjectsState}
    />
  );

}
