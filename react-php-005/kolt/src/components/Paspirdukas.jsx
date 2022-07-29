import { useContext } from "react";
import RndSerial from "../functions/Rndserial";
import KoltContext from "./KoltContext";

function Paspirdukas() {
  const { nRida } = useContext(KoltContext);
  console.log({
    Serialnr: RndSerial(),
    isBusy: false,
    Rida: parseFloat(nRida),
  });
  return (
    <div>
      {RndSerial()} {parseFloat(nRida)}ffgddgf{" "}
    </div>
  );
}
export default Paspirdukas;
