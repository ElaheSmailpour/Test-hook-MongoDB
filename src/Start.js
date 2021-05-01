import { Link } from "react-router-dom"
import Überus from "./Überus"
const Start = () => {
    return (
        <div className="Start">
            <Überus/>
          <h1>Einbürgerungstest</h1>
           
           <button> <Link to="/Home">Home</Link></button>
           <button> <Link to='/Startseite'>Start den Test</Link></button>
       
        </div>
    )
}

export default Start