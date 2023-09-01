import Draggable from "react-draggable";
import { Resizable } from 're-resizable';

export default function Window() {
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
        <section className="window__main">
          <header className="window__header">
          </header>
        </section>
      </Resizable>
    </Draggable >
  );
}
