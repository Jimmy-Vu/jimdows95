import WindowFrame from "../WindowFrame";
import { useAppSelector } from "../../../app/hooks";
import { setNHHOpenState, setNHHMaxState, selectNHHOpenState, selectNHHMaxState } from "../../../app/projectsSlice";
import ZIndexCheck from "../lib/zIndexCheck";

export default function NHH() {
  const nhhOpenState = useAppSelector(selectNHHOpenState);
  const nhhMaxState = useAppSelector(selectNHHMaxState);
  const zIdx = ZIndexCheck('nhh');

  const content =
    <div id="NHH" className="project__main">
      <section className="project__hero">
        <h1 className="project__hero__heading">New Horizon Hub</h1>
        <img className="project__hero__image" src="src/components/windows/projects/assets/NHH-combo-mockup.png" alt="" />
      </section>

      <section className="project__links">
        {/* <a className="project__links__button" target="_blank" href="https://colosseum.fly.dev/">Live Site</a> */}
        <a className="project__links__button" target="_blank" href="https://github.com/Jimmy-Vu/new-horizon-hub">Repo</a>
      </section>

      <section className="project__description">
        <p>
          A dynamic HTML, CSS, and JavaScript web application for Animal Crossing: New Horizon fans to browse through in game collectibles.
        </p>
        <p>
          While this project may not be as refined as my recent works, I'm proud of what I accomplished in the earliest days of my journey.
          This project challenged me to work with third-party APIs, design an UI, and implement dynamic features using only vanilla JavaScript.
          Although it may not be perfect, it was my first and therefore will always have a place in my heart and on my portfolio.
          It's a testament to my dedication to continuous learning and growth as a developer.
        </p>
      </section>
    </div>;

  return (
    <WindowFrame
      title="New Horizon Hub"
      id="nhh"
      zIdx={zIdx}
      icon="src/assets/open-folder-icon.png"
      content={content}
      defaultSize={{ width: 500, height: 600 }}
      state={{openState: nhhOpenState, maxState: nhhMaxState}}
      setOpenFunc={setNHHOpenState}
      setMaxFunc={setNHHMaxState}
    />
  );

}
