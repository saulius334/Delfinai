import { useEffect } from "react";
import { useContext, useState } from "react"
import AnimalsContext from "./AnimalsOne"

function Edit() {

    const { animalsTypes, setEditData } = useContext(AnimalsContext);
    const [type, setType] = useState(1);
    const [svoris,setSvori] = useState(``)
    const { modalData, setModalData } = useContext(AnimalsContext)

    const buttonClick = () => {
        setEditData({type, svoris: parseFloat(svoris), id: modalData.id})
        setModalData(null)
    }

    useEffect(() => {
       if(modalData === null) {
        return;
       }
        setSvori(modalData.svoris)
        setType(modalData.type)
    },[modalData])
    
    if (modalData === null) {
        return null
    }
    return (
        <>
        <div className="modal" role="dialog">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Modal title</h5>
        <button type="button" onClick={() => setModalData(null)} className="close">
          <span>&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <div className="card m-4">
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
        </div>
      </div>
      </div>
      <div className="modal-footer">
        <button type="button" onClick={() => setModalData(null)} className="btn btn-secondary">Close</button>
        <button type="button" onClick={buttonClick} className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
        </>
    )
}

export default Edit