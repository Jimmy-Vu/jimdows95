import WindowFrame from "../WindowFrame";
import { useAppSelector } from "../../../app/hooks";
import { setJimdows95State, selectJimdows95State } from "../../../app/projectsSlice";

export default function Jimdows95() {
  const jimdows95State = useAppSelector(selectJimdows95State);

  const content =
    <div className="vicarus">

    </div>;

  return (
    <WindowFrame
      title="Jimdows95"
      icon="src/assets/open-folder-icon.png"
      content={content}
      defaultSize={{ width: 700, height: 500 }}
      state={jimdows95State}
      setFunc={setJimdows95State}
    />
  );

}
