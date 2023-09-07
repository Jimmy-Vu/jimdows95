import WindowFrame from "../WindowFrame";
import { useAppSelector } from "../../../app/hooks";
import { setVicarusState, selectVicarusState } from "../../../app/projectsSlice";

export default function Vicarus() {
  const vicarusState = useAppSelector(selectVicarusState);

  const content =
    <div className="vicarus">

    </div>;

  return (
    <WindowFrame
      title="Vincent&Icarus"
      icon="src/assets/open-folder-icon.png"
      content={content}
      defaultSize={{ width: 700, height: 500 }}
      state={vicarusState}
      setFunc={setVicarusState}
    />
  );

}
