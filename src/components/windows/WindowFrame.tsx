import Draggable from "react-draggable";
import { Resizable } from 're-resizable';
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { useAppDispatch } from "../../app/hooks";

interface WindowFrameProps {
  title: string,
  icon: string,
  content: React.ReactNode,
  defaultSize: { width: number, height: number },
  state: {openState: boolean, maxState: boolean},
  setOpenFunc: ActionCreatorWithPayload<boolean, string>,
  setMaxFunc: ActionCreatorWithPayload<boolean, string>,
}

export default function WindowFrame(props: WindowFrameProps) {
  const dispatch = useAppDispatch()
  const {width, height} = props.defaultSize;
  const state = props.state;

  function handleClose() {
    dispatch(props.setOpenFunc(false));
  }

  function handleMax() {
    dispatch(props.setMaxFunc(true));
  }

  return (
    <Draggable handle=".window__header">
      <Resizable
        className='window'
        handleComponent={{ bottomRight: <img style={{ transform: 'translateX(-10px) translateY(-10px)' }} src="src/assets/resize-right.svg" alt="" /> }}
        enable={{
          top: false,
          right: false,
          bottom: false,
          left: false,
          topRight: false,
          bottomRight: true,
          bottomLeft: false,
          topLeft: false
        }}
        defaultSize={{
          width: state.maxState ? window.innerWidth : width,
          height: height
        }}
        minWidth={500}
        minHeight={300}
        style={state.openState ? { position: 'absolute', left: '25%', top: '15%' } : { display: 'none' }}
      >
        <section className="window__container">
          <header className="window__header">
            <div className="window__header__details">
              <img className="window__header__icon" src={props.icon} alt="" />
              <h1 className="window__header__title">{props.title}</h1>
            </div>

            <div className="window__header__control-buttons">
              <button className="control-buttons__button">
                <i className="fa-solid fa-window-minimize"></i>
              </button>
              <button onClick={handleMax} className="control-buttons__button">
                <i className="fa-regular fa-window-maximize"></i>
              </button>
              <button onClick={handleClose} className="control-buttons__button">
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </header>
          <main className="window__main">
            {props.content}
          </main>
          <footer className="window__footer"></footer>
        </section>
      </Resizable>
    </Draggable >
  );
}
