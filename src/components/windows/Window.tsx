import Draggable from "react-draggable";

export default function Window() {
  return (
    <Draggable positionOffset={{ x: '-50%', y: '-50%' }}>
      <section className="window">
        <i className="fa-solid fa-window-minimize"></i>
      </section>
    </Draggable>
  );
}
