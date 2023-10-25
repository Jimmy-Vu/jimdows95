import Draggable from "react-draggable";
import { Resizable } from 're-resizable';
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { useAppDispatch } from "../../app/hooks";
import { useState } from "react";
import { setActiveWindow } from "../../app/zIndexSlice";
import WindowCenterReturn from "./lib/WindowCenterReturn";
import bottomRightHandleImage from "/src/assets/resize-right.svg";

interface WindowFrameProps {
  title: string,
  icon: string,
  content: React.ReactNode,
  defaultSize: { width: number, height: number },
  state: { openState: boolean, maxState: boolean },
  setOpenFunc: ActionCreatorWithPayload<boolean, string>,
  setMaxFunc: ActionCreatorWithPayload<boolean, string>,
  id: string
  zIdx: number
}

export default function WindowFrame(props: WindowFrameProps) {
  const dispatch = useAppDispatch()
  const { width, height } = props.defaultSize;
  const { openState, maxState } = props.state;
  const [isDisabled, setIsDisabled] = useState(false);
  const [size, setSize] = useState({ width: width, height: height });
  const { widthCenter, heightCenter } = WindowCenterReturn();

  function handleClose() {
    dispatch(props.setOpenFunc(false));
  }

  function handleMax() {
    setSize({ width: window.innerWidth, height: window.innerHeight - 30 })
    setIsDisabled(true);
    dispatch(props.setMaxFunc(true));
    dispatch(setActiveWindow(props.id));
  }

  function handleMin() {
    setSize({ width: width, height: height })
    setIsDisabled(false);
    dispatch(props.setMaxFunc(false))
  }

  function handleClick(event: React.MouseEvent<HTMLDivElement>) {
    const target = event.target as HTMLDivElement;
    if (target.closest('button')?.className !== 'projects__icons__item') {
      dispatch(setActiveWindow(props.id));
    }
  }

  // @ts-expect-error: The onResizeStop property requires the `e`, `direction`, and `ref` parameters even though they don't get used in the function
  function handleResizeStop(e, direction, ref, d: { width: number; height: number; }) {
    // Update the width and height based on the change in dimensions (d.width and d.height)
    setSize({
      width: size.width + d.width,
      height: size.height + d.height,
    });
  }

  if (maxState) {
    return (
      <Draggable position={{ x: 0, y: 0 }} disabled={isDisabled} handle=".window__header">
        <Resizable
          className='window'
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
          size={size} // Use the managed size state
          onResizeStop={handleResizeStop} // Handle the resize event
          minWidth={500}
          minHeight={300}
          style={
            openState ?
              maxState ? { position: 'absolute', left: '0', top: '0', zIndex: props.zIdx } // Maximized
                : { position: 'absolute', left: '25%', top: '15%'} // Open but not maximized
              : { display: 'none' } // Closed
          }
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
                <button onClick={handleMin} className="control-buttons__button">
                  <i className="fa-regular fa-window-restore"></i>
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
  } else {
    return (
      <div onClick={handleClick}>
        <Draggable disabled={isDisabled} handle=".window__header">
          <Resizable
            className='window'
            handleComponent={{ bottomRight: <img style={{ transform: 'translateX(-10px) translateY(-10px)' }} src={bottomRightHandleImage} alt="" /> }}
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
            size={size} // Use the managed size state
            onResizeStop={handleResizeStop} // Handle the resize event
            minWidth={300}
            minHeight={300}
            style={
              openState
                ? { position: 'absolute', left: widthCenter, top: heightCenter, zIndex: props.zIdx } // Open but not maximized
                : { display: 'none' } // Closed
            }
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
      </div>
    );
  }
}
