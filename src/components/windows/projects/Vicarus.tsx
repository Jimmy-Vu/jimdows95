import WindowFrame from "../WindowFrame";
import { useAppSelector } from "../../../app/hooks";
import { setVicarusOpenState, setVicarusMaxState, selectVicarusOpenState, selectVicarusMaxState } from "../../../app/projectsSlice";
import ZIndexCheck from "../lib/ZIndexCheck";
import vicarusIcon from "/src/assets/open-folder-icon.png";

export default function Vicarus() {
  const vicarusOpenState = useAppSelector(selectVicarusOpenState);
  const vicarusMaxState = useAppSelector(selectVicarusMaxState);
  const zIdx = ZIndexCheck('vicarus');

  const content =
    <div id="vicarus" className="project__main">
      <section className="project__hero">
        <h1 className="project__hero__heading">Vincent&Icarus</h1>
        <img className="project__hero__image" src="src/components/windows/projects/assets/Vicarus-combo-mockup.png" alt="mock up image of Vincent & Icarus on a laptop and smart phone" />
      </section>

      <section className="project__links">
        <a className="project__links__button" target="_blank" href="https://vincent-and-icarus.onrender.com/">Live Site</a>
        <a className="project__links__button" target="_blank" href="https://github.com/Jimmy-Vu/vincent-and-icarus">Repo</a>
      </section>

      <section className="project__description">
        <p>
          Stay balanced with Vincent&Icarus - text messages, straight to your phone, to keep your Icarus in check or uplift your Vincent.
        </p>
        <p>
          A full stack web application for users who wish find their balance through the highs and lows of life.
          Built with TypeScript, React, Node.js, Express.js, Tailwind CSS, Twilio API, Vite and HTML.
        </p>
      </section>
    </div>;

  return (
    <WindowFrame
      title="Vincent&Icarus"
      id="vicarus"
      zIdx={zIdx}
      icon={vicarusIcon}
      content={content}
      defaultSize={{ width: 500, height: 600 }}
      state={{openState: vicarusOpenState, maxState: vicarusMaxState}}
      setOpenFunc={setVicarusOpenState}
      setMaxFunc={setVicarusMaxState}
    />
  );

}
