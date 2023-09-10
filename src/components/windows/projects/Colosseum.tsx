import WindowFrame from "../WindowFrame";
import { useAppSelector } from "../../../app/hooks";
import { setColosseumState, selectColosseumState } from "../../../app/projectsSlice";

export default function Colosseum() {
  const colosseumState = useAppSelector(selectColosseumState);

  const content =
    <div className="colosseum">
      <h1>Colosseum</h1>
      <p>A mobile responsive full stack web application for self betterment enthusiasts to find gyms of all types to improve on their physical capabilities.
        Built with TypeScript, React, Node.js, Express.js, PostgreSQL, Sass, Redux Toolkit, Webpack, Babel, JavaScript, JWT, HTML, and CSS.</p>
    </div>;

  return (
    <WindowFrame
      title="Colosseum"
      icon="src/assets/open-folder-icon.png"
      content={content}
      defaultSize={{ width: 700, height: 500 }}
      state={colosseumState}
      setFunc={setColosseumState}
    />
  );

}
