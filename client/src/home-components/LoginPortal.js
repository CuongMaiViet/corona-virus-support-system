import Navbar from "./Navbar"
import { Link } from 'react-router-dom';

export default function LoginPortal() {

    return (
        <div style={{height: "100vh", width: "100vw"}}>
            <Navbar />
            <div className="login-portal">
               <Link to="/login-doctor" className="button green">
                Login as Doctor
               </Link>
               
               <Link to="/login-patient" className="button green">
               Login as Patient 
               </Link>
            </div>
        </div>

    )
}
