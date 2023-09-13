import WindowFrame from "../WindowFrame";
import { useAppSelector } from "../../../app/hooks";
import { setColosseumState, selectColosseumState } from "../../../app/projectsSlice";

export default function Colosseum() {
  const colosseumState = useAppSelector(selectColosseumState);

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
      icon="src/assets/open-folder-icon.png"
      content={content}
      defaultSize={{ width: 500, height: 600 }}
      state={colosseumState}
      setFunc={setColosseumState}
    />
  );

}
