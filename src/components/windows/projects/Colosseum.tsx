import WindowFrame from "../WindowFrame";
import { useAppSelector } from "../../../app/hooks";
import { setProjectsState, selectProjectsState } from "../../../app/appSlice";

export default function Colosseum() {
  const projectsState = useAppSelector(selectProjectsState);

  const content =
    <div className="colosseum">

    </div>;

  return (
    <WindowFrame
      title="Colosseum"
      icon="src/assets/open-folder-icon.png"
      content={content}
      defaultSize={{ width: 600, height: 400 }}
      state={projectsState}
      setFunc={setProjectsState}
    />
  );

}
