import { useAppSelector } from "../../../app/hooks";
import { selectWindows } from "../../../app/zIndexSlice";

export default function ZIndexCheck(name: string) {
  const windowsOrder = useAppSelector(selectWindows);
  return windowsOrder.indexOf(name);
}
