import ErrorFrame from "./ErrorFrame";
import { useAppSelector } from "../../app/hooks";
import { setSorryHalOpenState, setSorryHalMaxState, selectSorryHalOpenState, selectSorryHalMaxState } from "../../app/appSlice";
import ZIndexCheck from "./lib/ZIndexCheck";

export default function SorryHal() {
  const sorryHalOpenState = useAppSelector(selectSorryHalOpenState);
  const sorryHalMaxState = useAppSelector(selectSorryHalMaxState);
  const zIdx = ZIndexCheck('sorryHal');

  const content =
    <div className="sorry-hal">
      <img src="src/components/windows/assets/hal9000.gif" alt="" />
      <p>I'm sorry Dave, I'm afraid I can't do that.</p>
    </div>;

  return (
    <ErrorFrame
      title="Error!"
      id="sorryHal"
      zIdx={zIdx}
      icon=""
      content={content}
      defaultSize={{ width: 600, height: 400 }}
      state={{ openState: sorryHalOpenState}}
      setOpenFunc={setSorryHalOpenState}
      setMaxFunc={setSorryHalMaxState}
    />
  );

}
