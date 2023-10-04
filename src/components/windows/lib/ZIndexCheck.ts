import { useAppSelector } from "../../../app/hooks";
import { selectWindows } from "../../../app/zIndexSlice";

export default function ZIndexCheck(name: string) {
  const windowsOrder = useAppSelector(selectWindows);
  console.log(`${name}: ${windowsOrder.indexOf(name)}`)
  return windowsOrder.indexOf(name);
}
