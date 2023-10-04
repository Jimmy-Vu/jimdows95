import WindowFrame from "../WindowFrame";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { setProjectsOpenState, selectProjectsOpenState, setProjectsMaxState, selectProjectsMaxState } from "../../../app/appSlice";
import { setColosseumOpenState, setVicarusOpenState, setJimdows95OpenState, setNHHOpenState } from "../../../app/projectsSlice";
import { setActiveWindow } from "../../../app/zIndexSlice";
import Colosseum from "./Colosseum";
import Vicarus from "./Vicarus";
import Jimdows95 from "./Jimdows95";
import NHH from "./NHH";

export default function Projects() {
  const projectsOpenState = useAppSelector(selectProjectsOpenState);
  const projectMaxState = useAppSelector(selectProjectsMaxState);
  const dispatch = useAppDispatch();

  function handleColosseumClick() {
    dispatch(setColosseumOpenState(true));
    dispatch(setActiveWindow('colosseum'));
  }

  function handleVicarusClick() {
    dispatch(setVicarusOpenState(true));
    dispatch(setActiveWindow('vicarus'));
  }

  function handleJimdows95Click() {
    dispatch(setJimdows95OpenState(true));
    dispatch(setActiveWindow('jimdows95'));
  }

  function handleNHHClick() {
    dispatch(setNHHOpenState(true));
    dispatch(setActiveWindow('nhh'));
  }

  const content =
    <div className="projects">
      <section className="projects__icons">
        <button className="projects__icons__item" onClick={handleColosseumClick}>
          <img id="colosseum" src="src/assets/closed_folder.png" alt="" />
          <label htmlFor="colosseum">Colosseum</label>
        </button>
        <button className="projects__icons__item" onClick={handleVicarusClick}>
          <img id="vicarus" src="src/assets/closed_folder.png" alt="" />
          <label htmlFor="vicarus">Vincent&Icarus</label>
        </button>
        <button id="jimdows95" className="projects__icons__item" onClick={handleJimdows95Click}>
          <img src="src/assets/closed_folder.png" alt="" />
          <label htmlFor="jimdows95">Jimdows95</label>
        </button>
        <button className="projects__icons__item" onClick={handleNHHClick}>
          <img id="NHH" src="src/assets/closed_folder.png" alt="" />
          <label htmlFor="NHH">New Horizon Hub</label>
        </button>
      </section>
    </div>;

  return (
    <>
      <WindowFrame
        title="Projects"
        icon="src/assets/open-folder-icon.png"
        content={content}
        defaultSize={{ width: 500, height: 400 }}
        state={{ openState: projectsOpenState, maxState: projectMaxState }}
        setOpenFunc={setProjectsOpenState}
        setMaxFunc={setProjectsMaxState}
        id={'projects'}
      />
      <Colosseum />
      <Vicarus />
      <Jimdows95 />
      <NHH />
    </>
  );

}
