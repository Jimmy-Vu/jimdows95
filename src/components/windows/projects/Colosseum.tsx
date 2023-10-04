import WindowFrame from "../WindowFrame";
import { useAppSelector } from "../../../app/hooks";
import { setColosseumOpenState, setColosseumMaxState, selectColosseumOpenState, selectColosseumMaxState } from "../../../app/projectsSlice";
import ZIndexCheck from "../lib/zIndexCheck";

export default function Colosseum() {
  const colosseumOpenState = useAppSelector(selectColosseumOpenState);
  const colosseumMaxState = useAppSelector(selectColosseumMaxState);
  const zIdx = ZIndexCheck('colosseum');

  const content =
    <div id="colosseum" className="project__main">
      <section className="project__hero">
        <h1 className="project__hero__heading">Colosseum</h1>
        <img className="project__hero__image" src="src/components/windows/projects/assets/colosseum-combo-mockup.png" alt="" />
      </section>

      <section className="project__links">
        <a className="project__links__button" target="_blank" href="https://colosseum.fly.dev/">Live Site</a>
        <a className="project__links__button" target="_blank" href="https://github.com/Jimmy-Vu/colosseum">Repo</a>
      </section>

      <section className="project__description">
        <p>
          A mobile responsive full stack web application for self betterment enthusiasts to find gyms of all types to improve on their physical capabilities.
          Built with TypeScript, React, Node.js, Express.js, PostgreSQL, Sass, Redux Toolkit, Webpack, Babel, JavaScript, JWT, HTML, and CSS.
        </p>
      </section>
    </div>;

  return (
    <WindowFrame
      title="Colosseum"
      id="colosseum"
      zIdx={zIdx}
      icon="src/assets/open-folder-icon.png"
      content={content}
      defaultSize={{ width: 500, height: 600 }}
      state={{ openState: colosseumOpenState, maxState: colosseumMaxState }}
      setOpenFunc={setColosseumOpenState}
      setMaxFunc={setColosseumMaxState}
    />
  );

}
