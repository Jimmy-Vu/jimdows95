import Draggable from "react-draggable";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { useAppDispatch } from "../../app/hooks";
import { setActiveWindow } from "../../app/zIndexSlice";

interface ErrorFrameProps {
  title: string,
  icon: string,
  content: React.ReactNode,
  defaultSize: { width: number, height: number },
  state: { openState: boolean},
  setOpenFunc: ActionCreatorWithPayload<boolean, string>,
  setMaxFunc: ActionCreatorWithPayload<boolean, string>,
  id: string
  zIdx: number
}

export default function ErrorFrame(props: ErrorFrameProps) {
  const dispatch = useAppDispatch()
  const { openState } = props.state;

  function handleClose() {
    dispatch(props.setOpenFunc(false));
  }

  function handleClick(event: React.MouseEvent<HTMLDivElement>) {
    const target = event.target as HTMLDivElement;
    if (target.closest('button')?.className !== 'projects__icons__item') {
      dispatch(setActiveWindow(props.id));
    }
  }

  return (
    <div onClick={handleClick}>
      <Draggable handle=".error-window__header">
        <div className="error-window" style={openState ? { height: props.defaultSize.height, width: props.defaultSize.width, zIndex: props.zIdx} : {display: 'none'}}>
          <section className="error-window__container">
            <header className="error-window__header">
              <div className="error-window__header__details">
                <img className="error-window__header__icon" src={props.icon} alt="" />
                <h1 className="error-window__header__title">{props.title}</h1>
              </div>

              <div className="error-window__header__control-buttons">
                <button onClick={handleClose} className="control-buttons__button">
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
            </header>
            <main className="error-window__main">
              {props.content}
            </main>
            <footer className="error-window__footer"></footer>
          </section>
        </div>
      </Draggable>
    </div>
  );
}
