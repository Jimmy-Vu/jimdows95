import WindowFrame from "../WindowFrame";
import { useAppSelector } from "../../../app/hooks";
import { setNHHState, selectNHHState } from "../../../app/projectsSlice";

export default function NHH() {
  const nhhState = useAppSelector(selectNHHState);

  const content =
    <div className="NHH">
      <h1>New Horizon Hub</h1>
      <p>A dynamic HTML, CSS, and JavaScript web application for Animal Crossing: New Horizon fans to browse through in game collectibles.</p>
      <p>While this project may not be as refined as my recent works, I'm proud of what I accomplished in the earliest days of my journey. This project challenged me to work with third-party APIs, design an UI, and implement dynamic features using only vanilla JavaScript. Although it may not be perfect,
        it was my first and therefore will always have a place in my heart and on my portfolio. It's a testament to my dedication to continuous learning and growth as a developer.
      </p>
    </div>;

  return (
    <WindowFrame
      title="New Horizon Hub"
      icon="src/assets/open-folder-icon.png"
      content={content}
      defaultSize={{ width: 700, height: 500 }}
      state={nhhState}
      setFunc={setNHHState}
    />
  );

}
