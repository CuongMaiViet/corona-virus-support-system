import Navbar from "./Navbar"
import DoctorPhoto from '../assets/images/doctor.png'
import { Link } from 'react-router-dom';

export default function HomePage() {

    return (
        <div style={{height: "100vh", width: "100vw"}}>
            <Navbar />
            <div className="homepage-container">
                <div className="text-container">

                    <p className='text1'>Signs of COVID ?</p>
                    <h1 className='text2 desktop'>
                        Get direct doctor support and prescriptions
                        delivered right from home
                    </h1>
                    <h1 className='text2 mobile'>
                        Get direct doctor support &amp; prescriptions
                        delivered right from home
                    </h1>

                    <p className='text3'>
                        Register an account, logged your symptoms and let one of our
                        professional doctors in your area take care of you.
                    </p>


                    <Link to="/register" id="register" class="hover">Register as a patient</Link>
                </div>
                <div className="image-container">
                    <img src={DoctorPhoto} alt="" />
                </div>

            </div>
        </div>

    )
}
