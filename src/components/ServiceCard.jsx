import { Link } from 'react-router-dom';
import s1 from '../assets/service2/1.jpg';
import s2 from '../assets/service2/2.jpg';
import s3 from '../assets/service2/3.jpg';
import s4 from '../assets/service2/4.jpg';

const ServiceCard = () => {

    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 px-5 pb-10">

            {/* card 1 */}
            <div className="card flex md:card-side bg-[#191818] shadow-xl" data-aos='fade-right'>
                <figure className='md:w-[35%] pt-5 md:pt-0'><img className='w-72 rounded-md' src={s1} alt="Movie" /></figure>
                <div className="card-body md:w-[65%]">
                    <h2 className="card-title">SEAT MODIFICATIONS</h2>
                    <p>Elevate comfort and style with our tailored seat upgrades, enhancing your driving experience.</p>
                    <div className="flex justify-center">
                        <Link className="px-4 py-2 w-full bg-[#3EA354] text-white rounded-md hover:bg-transparent hover:border transition-all text-center" to={"/seat-modification"}><button>Details</button></Link>
                    </div>
                </div>
            </div>

            {/* card 2 */}
            <div className="card flex md:card-side bg-[#191818] shadow-xl" data-aos='fade-left'>
                <figure className='md:w-[35%] pt-5 md:pt-0'><img className='w-72 rounded-md' src={s2} alt="Movie" /></figure>
                <div className="card-body md:w-[65%]">
                    <h2 className="card-title">UPHOLSTERY</h2>
                    <p>Transform your car's interior with premium materials, bringing luxury and durability to every ride.
                    </p>
                    <div className="flex justify-center">
                        <Link className="px-4 py-2 w-full bg-[#3EA354] text-white rounded-md hover:bg-transparent hover:border transition-all text-center" to={"/auto-upholstery"}><button>Details</button></Link>
                    </div>
                </div>
            </div>

            {/* card 3 */}
            <div className="card flex md:card-side bg-[#191818] shadow-xl" data-aos='fade-right'>
                <figure className='md:w-[35%] pt-5 md:pt-0'><img className='w-72 rounded-md' src={s4} alt="Movie" /></figure>
                <div className="card-body md:w-[65%]">
                    <h2 className="card-title">CENTRAL CONSOLE</h2>
                    <p>Upgrade functionality and design with our precision-crafted central consoles, blending innovation seamlessly.</p>
                    <div className="flex justify-center">
                        <Link className="px-4 py-2 w-full bg-[#3EA354] text-white rounded-md hover:bg-transparent hover:border transition-all text-center" to={"/central-console-design"}><button>Details</button></Link>
                    </div>
                </div>
            </div>

            {/* card 4 */}
            <div className="card flex md:card-side bg-[#191818] shadow-xl" data-aos='fade-left'>
                <figure className='md:w-[35%] pt-5 md:pt-0'><img className='w-72 rounded-md' src={s3} alt="Movie" /></figure>
                <div className="card-body md:w-[65%]">
                    <h2 className="card-title">Entertainment</h2>
                    <p>Immerse yourself in superior in-car audio and visual experiences for unforgettable journeys.
                    </p>
                    <div className="flex justify-center">
                        <Link className="px-4 py-2 w-full bg-[#3EA354] text-white rounded-md hover:bg-transparent hover:border transition-all text-center" to={"/entertainment"}><button>Details</button></Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ServiceCard;