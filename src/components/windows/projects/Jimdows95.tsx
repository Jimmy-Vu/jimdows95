import WindowFrame from "../WindowFrame";
import { useAppSelector } from "../../../app/hooks";
import { setJimdows95OpenState, setJimdowsMaxState, selectJimdows95OpenState, selectJimdows95MaxState } from "../../../app/projectsSlice";
import ZIndexCheck from "../lib/ZIndexCheck";
import jimdows95Icon from "/src/assets/open-folder-icon.png";
import jimdows95Hero from "/src/components/windows/projects/assets/jimdows95-combo-mockup-workfiles.png";

export default function Jimdows95() {
  const jimdows95OpenState = useAppSelector(selectJimdows95OpenState);
  const jimdows95MaxState = useAppSelector(selectJimdows95MaxState);
  const zIdx = ZIndexCheck('jimdows95');

  const content =
    <div id="jimdows95" className="project__main">
      <section className="project__hero">
        <h1 className="project__hero__heading">Jimdows95</h1>
        <img className="project__hero__image" src={jimdows95Hero} alt="mock up image of jimdows95 on a laptop and smart phone" />
      </section>

      <section className="project__links">
        <a className="project__links__button" target="_blank" href="https://github.com/Jimmy-Vu/jimdows95">Repo</a>
      </section>

      <section className="project__description">
        <p>
          Woah, deja vu! Just been in this place before?
        </p>
        <p>
          Jimdows95 has been on the back burner of my mind for a while now after seeing similar websites being posted on Reddit, Twitter, and Hacker News.
          After realising that I wasn't satisfied with my current portfolio site and wanting to push myself, I decided to draft and develop something
          actually fun.
        </p>
        <p>
          I drafted the mockups in Figma using this&nbsp;
          <a style={{ color: 'blue', textDecoration: 'underline' }}
          href="https://hips.hearstapps.com/popularmechanics/assets/16/20/1463757707-windows-95-100609567-large.jpg"
          target="_blank">image</a>
          &nbsp;and some videos of  Windows95 in action as design inspiration. All the components you see here are made
          from scratch besides the drag and resize functionalities,
          which are from their respective libraries.
        </p>
        <p>Crafted with React, Redux Toolkit, Sass, and TypeScript.</p>
      </section>
    </div>;

  return (
    <WindowFrame
      title="Jimdows95"
      id="jimdows95"
      zIdx={zIdx}
      icon={jimdows95Icon}
      content={content}
      defaultSize={{ width: 500, height: 600 }}
      state={{openState: jimdows95OpenState, maxState: jimdows95MaxState}}
      setOpenFunc={setJimdows95OpenState}
      setMaxFunc={setJimdowsMaxState}
    />
  );

}
