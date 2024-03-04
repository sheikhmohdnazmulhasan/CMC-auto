import { Link } from "react-router-dom";
import s1 from '../assets/service2/1.jpg';

// eslint-disable-next-line react/prop-types
const ServiceComp = ({ title, text, img, link }) => {
    return (
        <div>
            {/* card 1 */}
            <div className="card flex md:card-side bg-[#191818] shadow-xl" data-aos='fade-right'>
                <figure className='md:w-[35%] pt-5 md:pt-0'><img className='w-72 rounded-md' src={img} alt="Movie" /></figure>
                <div className="card-body md:w-[65%]">
                    <h2 className="card-title">{title}</h2>
                    <p>{text}</p>
                    <div className="flex justify-center">
                        <Link className="px-4 py-2 w-full bg-[#3EA354] text-white rounded-md hover:bg-transparent hover:border transition-all text-center" to={link}><button>Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceComp;