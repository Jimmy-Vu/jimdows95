import WindowFrame from "./WindowFrame";
import { useAppSelector } from "../../app/hooks";
import { setSorryHalOpenState, setSorryHalMaxState, selectSorryHalOpenState, selectSorryHalMaxState } from "../../app/appSlice";
import ZIndexCheck from "./lib/ZIndexCheck";

export default function SorryHal() {
  const sorryHalOpenState = useAppSelector(selectSorryHalOpenState);
  const sorryHalMaxState = useAppSelector(selectSorryHalMaxState);
  const zIdx = ZIndexCheck('sorryHal');

  const content =
    <div className="sorry-hal">
      <p>I'm sorry Dave, I'm afraid I can't do that.</p>
    </div>;

  return (
    <WindowFrame
      title="Error!"
      id="sorryHal"
      zIdx={zIdx}
      icon="src/assets/aim-icon.png"
      content={content}
      defaultSize={{ width: 600, height: 400 }}
      state={{ openState: sorryHalOpenState, maxState: sorryHalMaxState }}
      setOpenFunc={setSorryHalOpenState}
      setMaxFunc={setSorryHalMaxState}
    />
  );

}
