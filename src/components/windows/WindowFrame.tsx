import Draggable from "react-draggable";
import { Resizable } from 're-resizable';

export default function WindowFrame(props: {
  title: string,
  icon: string
}) {

  return (
    <Draggable handle=".window__header">
      <Resizable
        className="window"
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
          width: 600,
          height: 400
        }}
        minWidth={600}
        minHeight={400}
        style={{ position: 'absolute', left: '30%', top: '20%' }}
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
              <button className="control-buttons__button">
                <i className="fa-regular fa-window-maximize"></i>
              </button>
              <button className="control-buttons__button">
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </header>
          <main className="window__main">

          </main>
          <footer className="window__footer"></footer>
        </section>
      </Resizable>
    </Draggable >
  );
}
