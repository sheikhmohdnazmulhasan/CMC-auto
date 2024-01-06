import { Link } from 'react-router-dom';
import service1 from '../assets/service/4-768x575.webp';
import service2 from '../assets/service/Car-Upholstery-1067x800.webp';
import service3 from '../assets/service/ksa_bro-9-768x575.webp';
import service4 from '../assets/service/Smart-TV-Apple-TV_03.webp';
const ServiceCard = () => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-5 md:px-0 p-20">


            {/* card 3 */}
            {/* < div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow" >
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 uppercase">Vehicles <br /> </h5>
                </a>
                <Link to={'/entertainment'} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#3EA354] rounded-lg hover:bg-[#348b47] focus:ring-4 focus:outline-none focus:ring-blue-300">
                    View Details
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </Link>
            </ div> */}

            {/* Card1 */}
            <div className="card  shadow-xl bg-[#292929] text-white rounded-md hover:scale-105 transition-all">
                <figure><img src={service1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">SEAT MODIFICATIONS</h2>
                    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                    <div className="flex justify-center">
                        <Link className="px-4 py-2 w-full bg-black text-white rounded-md hover:bg-transparent hover:border transition-all text-center" to={"/auto-upholstery"}><button>Details</button></Link>
                    </div>
                </div>
            </div>
            {/* Card1 */}
            <div className="card  shadow-xl bg-[#292929] text-white rounded-md hover:scale-105 transition-all">
                <figure><img src={service2} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">UPHOLSTERY</h2>
                    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                    <div className="flex justify-center">
                        <Link className="px-4 py-2 w-full bg-black text-white rounded-md hover:bg-transparent hover:border transition-all text-center" to={"/seat-modification"}><button>Details</button></Link>
                    </div>
                </div>
            </div>

            {/* Card3 */}
            <div className="card  shadow-xl bg-[#292929] text-white rounded-md hover:scale-105 transition-all">
                <figure><img src={service3} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">CENTRAL CONSOLE</h2>
                    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                    <div className="flex justify-center">
                        <Link className="px-4 py-2 w-full bg-black text-white rounded-md hover:bg-transparent hover:border transition-all text-center" to={"/central-console-design"}><button>Details</button></Link>
                    </div>
                </div>
            </div>

            {/* Card4 */}
            <div className="card  shadow-xl bg-[#292929] text-white rounded-md hover:scale-105 transition-all">
                <figure><img src={service4} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Entertainment</h2>
                    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                    <div className="flex justify-center">
                        <Link className="px-4 py-2 w-full bg-black text-white rounded-md hover:bg-transparent hover:border transition-all text-center" to={"/entertainment"}><button>Details</button></Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ServiceCard;