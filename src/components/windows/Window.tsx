import Draggable from "react-draggable";
import { Resizable } from 're-resizable';

export default function Window() {
  return (
    <Draggable
      handle=".window__header"
      positionOffset={{ x: '-50%', y: '-50%' }}
    >
      {/* <Resizable
        defaultSize={{
          width: 620,
          height: 400
        }}
        bounds="parent"
        style={{position: "absolute"}}
      > */}
      <section className="window">
        <header className="window__header">

        </header>
      </section>
      {/* </Resizable> */}
    </Draggable>
  );
}
