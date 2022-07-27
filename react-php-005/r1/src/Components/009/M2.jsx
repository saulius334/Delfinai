import { useContext } from "react"
import ContextOne from "../../Contexts/ContextOne"

function M2({kas}) {
   const {pirmas, spalva} = useContext(ContextOne)
return <h2 style={{color: spalva}}>{kas} {pirmas}</h2>
}
export default M2