import { useState } from "react";
import Rangebox from "./Rangebox";

function Range() {
  const [box, setBox] = useState([]);
  const [boxlist, setBoxlist] = useState([]);
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);
  const [color, setColor] = useState(`#000000`);

  const sukurti = () => {
    setBox((a) => (box.length === 0 ? [...a, ``] : [...a]));
  };
  const issaugoti = () => {
    setBoxlist((a) => [
      ...a,
      <Rangebox width={width} height={height} color={color}/>,
    ]);
    setBox([]);
  };
  const changewidth = (a) => {
    setWidth(a.target.value);
  };
  const changeheight = (a) => {
    setHeight(a.target.value);
  };
  const changewcolor = (a) => {
    setColor(a.target.value);
  };
  return (
    <>
    <fieldset>
        <legend>5 uzduotis</legend>
      <button style={{ margin: `20px` }} onClick={sukurti}>
        Sukurti
      </button>
      <button onClick={issaugoti}>Issaugoti</button>
      <fieldset style={{ margin: `20px` }}>
        <legend>Options</legend>
        <label htmlFor="Width">Width</label>
        <input
          type="range"
          id="Width"
          min="10"
          max="200"
          name="Width"
          value={width}
          onChange={changewidth}
        />
        <label htmlFor="Height" style={{ margin: `20px` }}>
          Height
        </label>
        <input
          type="range"
          id="Height"
          min="10"
          max="200"
          name="Height"
          value={height}
          onChange={changeheight}
        />
        <label htmlFor="BoxColor" style={{ margin: `20px` }}>
          Box Color
        </label>
        <input
          type="color"
          id="BoxColor"
          name="BoxColor"
          value={color}
          onChange={changewcolor}
        />
      </fieldset>
      <div style={{ display: `flex`, justifyContent:`center` }}>
        {box.map((a, i) => (
          <div
            style={{
              width: +width,
              height: +height,
              backgroundColor: color,
              margin: `10px`,
            }}
            key={i}
          >
            {a}
          </div>
        ))}
      </div>
      <fieldset>
        <legend>Issaugoti: </legend>
        <div style={{display:`flex`, flexWrap:`wrap`}}>
        {boxlist.map((a, i) => <div key={i}>{a}</div>)}
        </div>
      </fieldset>
      </fieldset>
    </>
  );
}
export default Range;
