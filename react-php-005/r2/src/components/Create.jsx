import { useState } from "react";
import { useContext } from "react";
import AnimalsContext from "./AnimalsOne";

function CreateD() {
  const { animalsTypes, setCreateData } = useContext(AnimalsContext);
  const [type, setType] = useState(1);
  const [svoris,setSvori] = useState(``)
  const buttonClick = () => {
    setCreateData({type, svoris: parseFloat(svoris)})
    setType(1)
    setSvori(``)
  }
  return (
    <>
      <div className="card m-4">
        <h5 className="card-header">Add new animal</h5>
        <div className="card-body">
          <div className="form-group">
            <label>Animal selection</label>
            <select
              className="form-control"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              {animalsTypes.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.type}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Kiek sveria {animalsTypes.find(a => a.id == type).type}?</label>
            <input type="text" className="form-control" value={svoris}  onChange={e => setSvori(e.target.value)}/>
            <small className="form-text text-muted">Please enter your animal weigth</small>
          </div>
          <button type="button" onClick={buttonClick} className="btn btn-outline-info m-2">Add animal</button>
        </div>
      </div>
    </>
  );
}
export default CreateD;
