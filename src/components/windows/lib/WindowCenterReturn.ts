export default function WindowCenterReturn() {
  const widthCenter = window.innerWidth / 2;
  const heightCenter = (window.innerHeight - 40) / 2; // -40 to account for the height of the taskbar
  return { widthCenter, heightCenter };
}
