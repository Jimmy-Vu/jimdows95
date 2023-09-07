import WindowFrame from "../WindowFrame";
import { useAppSelector } from "../../../app/hooks";
import { setColosseumState, selectColosseumState } from "../../../app/projectsSlice";

export default function Colosseum() {
  const colosseumState = useAppSelector(selectColosseumState);

  const content =
    <div className="colosseum">

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
