export default function WindowCenterReturn() {
  const widthCenter = window.innerWidth / 3.5;
  const heightCenter = (window.innerHeight - 40) / 6; // -40 to account for the height of the taskbar
  return { widthCenter, heightCenter };
}
