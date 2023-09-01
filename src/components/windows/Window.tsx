import Draggable from "react-draggable";
import { Resizable } from 're-resizable';

export default function Window() {
  return (
    <Draggable
      handle=".window__header"
      // bounds="parent"
      defaultPosition={{ x: 0, y: 0 }}
      positionOffset={{ x: '-50%', y: '-50%' }}
    >
      <Resizable
        className="window"
        handleComponent={{ bottomRight: <img style={{ transform: 'translateX(-10px) translateY(-10px)' }} src="src/assets/resize-right.svg" alt="" /> }}
        handleClasses={{
          top: "pointer-events-none",
          right: "pointer-events-none",
          bottom: "pointer-events-none",
          left: "pointer-events-none",
          topRight: "pointer-events-none",
          bottomLeft: "pointer-events-none",
          topLeft: "pointer-events-none",
        }}
        defaultSize={{
          width: 600,
          height: 400
        }}
        minWidth={600}
        minHeight={400}
        bounds="parent"
        style={{ position: 'absolute', left: '50%', top: '50%' }}
      >
        <section className="window__main">
          <header className="window__header">
          </header>
        </section>
      </Resizable>
    </Draggable >
  );
}
