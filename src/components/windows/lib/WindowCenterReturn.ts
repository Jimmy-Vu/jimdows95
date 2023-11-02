export default function WindowCenterReturn() {
  const widthCenter = window.innerWidth / 3.5;
  const heightCenter = (window.innerHeight - 35) / 6; // -35 to account for the height of the taskbar
  return { widthCenter, heightCenter };
}
