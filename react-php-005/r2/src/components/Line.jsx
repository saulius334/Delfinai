import { useContext } from "react"
import AnimalsContext from "./AnimalsOne"

function Line({data}) {

    const {animalsTypes, setDeleteData} = useContext(AnimalsContext)


    return (
        <>
  <li className="list-group-item">
    <div className="line">
        <div className="line_content">
            <span className="line_content_title">
                {animalsTypes.find(a => a.id == data.type).type}
            </span>
        <span className="line_content_svoris">
                {data.svoris}
            </span>
        </div>
        <div className="line_buttons">
            <button type="button" className="btn btn-outline-success m-2">Edit</button>
            <button type="button" onClick={()=> setDeleteData(data.id)} className="btn btn-outline-danger m-2">Delete</button>
        </div>
    </div>
  </li>
        </>
    )
}
export default Line