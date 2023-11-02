import WindowFrame from "../WindowFrame";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { setProjectsOpenState, selectProjectsOpenState, setProjectsMaxState, selectProjectsMaxState } from "../../../app/appSlice";
import { setColosseumOpenState, setVicarusOpenState, setJimdows95OpenState, setNHHOpenState } from "../../../app/projectsSlice";
import { setActiveWindow } from "../../../app/zIndexSlice";
import { addWindow } from "../../../app/taskbarSlice";
import ZIndexCheck from "../lib/ZIndexCheck";
import Colosseum from "./Colosseum";
import Vicarus from "./Vicarus";
import Jimdows95 from "./Jimdows95";
import NHH from "./NHH";
import closedFolderIcon from "/src/assets/closed_folder.png";
import projectsIcon from "/src/assets/open-folder-icon.png";

export default function Projects() {
  const dispatch = useAppDispatch();
  const projectsOpenState = useAppSelector(selectProjectsOpenState);
  const projectMaxState = useAppSelector(selectProjectsMaxState);
  const zIdx = ZIndexCheck('projects');

  function handleColosseumClick() {
    dispatch(setColosseumOpenState(true));
    dispatch(setActiveWindow('colosseum'));
    dispatch(addWindow({ title: 'Colosseum', id: 'colosseum' }));
  }

  function handleVicarusClick() {
    dispatch(setVicarusOpenState(true));
    dispatch(setActiveWindow('vicarus'));
    dispatch(addWindow({ title: 'Vincent&Icarus', id: 'vicarus' }));
  }

  function handleJimdows95Click() {
    dispatch(setJimdows95OpenState(true));
    dispatch(setActiveWindow('jimdows95'));
    dispatch(addWindow({ title: 'Jimdows95', id: 'jimdows95' }));
  }

  function handleNHHClick() {
    dispatch(setNHHOpenState(true));
    dispatch(setActiveWindow('nhh'));
    dispatch(addWindow({ title: 'New Horizon Hub', id: 'nhh' }));
  }

  const content =
    <div className="projects">
      <section className="projects__icons">
        <button className="projects__icons__item" onClick={handleColosseumClick}>
          <img id="colosseum" src={closedFolderIcon} alt="closed folder icon" />
          <label htmlFor="colosseum">Colosseum</label>
        </button>
        <button className="projects__icons__item" onClick={handleVicarusClick}>
          <img id="vicarus" src={closedFolderIcon} alt="closed folder icon" />
          <label htmlFor="vicarus">Vincent&Icarus</label>
        </button>
        <button className="projects__icons__item" onClick={handleJimdows95Click}>
          <img id="jimdows95" src={closedFolderIcon} alt="closed folder icon" />
          <label htmlFor="jimdows95">Jimdows95</label>
        </button>
        <button className="projects__icons__item" onClick={handleNHHClick}>
          <img id="NHH" src={closedFolderIcon} alt="closed folder icon" />
          <label htmlFor="NHH">New Horizon Hub</label>
        </button>
      </section>
    </div>;

  return (
    <>
      <WindowFrame
        title="Projects"
        id={'projects'}
        zIdx={zIdx}
        icon={projectsIcon}
        content={content}
        defaultSize={{ width: 500, height: 400 }}
        state={{ openState: projectsOpenState, maxState: projectMaxState }}
        setOpenFunc={setProjectsOpenState}
        setMaxFunc={setProjectsMaxState}
      />
      <Colosseum />
      <Vicarus />
      <Jimdows95 />
      <NHH />
    </>
  );

}
