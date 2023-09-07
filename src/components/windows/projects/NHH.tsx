import WindowFrame from "../WindowFrame";
import { useAppSelector } from "../../../app/hooks";
import { setNHHState, selectNHHState } from "../../../app/projectsSlice";

export default function NHH() {
  const nhhState = useAppSelector(selectNHHState);

  const content =
    <div className="vicarus">

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
