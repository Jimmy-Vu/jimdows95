import ErrorFrame from "./ErrorFrame";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { setSorryHalOpenState, setSorryHalMaxState, selectSorryHalOpenState } from "../../app/appSlice";
import { removeWindow } from "../../app/taskbarSlice";
import ZIndexCheck from "./lib/ZIndexCheck";
import hal9000Img from "/src/components/windows/assets/hal9000.gif";

export default function SorryHal() {
  const dispatch = useAppDispatch();
  const sorryHalOpenState = useAppSelector(selectSorryHalOpenState);
  const zIdx = ZIndexCheck('sorryHal');

  function handleConfirm() {
    dispatch(setSorryHalOpenState(false));
    dispatch(removeWindow('Error Exiting System'));
  }

  const content =
    <div className="sorry-hal">
      <section className="sorry-hal__main">
        <a href="https://youtu.be/ARJ8cAGm6JE?t=59" target="_blank">
          <img className="sorry-hal__main__image" src={hal9000Img} alt="image of Hal 9000" />
        </a>
        <p className="sorry-hal__main__message">I'm sorry
          <a className="sorry-hal__main__message__link" href="https://youtu.be/ARJ8cAGm6JE?t=59" target="_blank">
            &#32;Dave
          </a>
          , I'm afraid I can't do that.</p>
      </section>
      <section className="sorry-hal__btn-container">
        <button onClick={handleConfirm} className="sorry-hal__btn-container__confirm">Okay</button>
      </section>
    </div>;

  return (
    <ErrorFrame
      title="Error Exiting System"
      id="sorryHal"
      zIdx={zIdx}
      icon=""
      content={content}
      defaultSize={{ width: 400, height: 150 }}
      state={{ openState: sorryHalOpenState }}
      setOpenFunc={setSorryHalOpenState}
      setMaxFunc={setSorryHalMaxState}
    />
  );

}
