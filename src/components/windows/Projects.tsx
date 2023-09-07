import WindowFrame from "./WindowFrame";
import { useAppSelector } from "../../app/hooks";
import { setProjectsState, selectProjectsState } from "../../app/appSlice";

export default function Projects() {
  const projectsState = useAppSelector(selectProjectsState);

  const content =
    <div className="projects">

    </div>;

  return (
    <WindowFrame
      title="Projects"
      icon="src/assets/open-folder-icon.png"
      content={content}
      state={projectsState}
      setFunc={setProjectsState}
    />
  );

}
