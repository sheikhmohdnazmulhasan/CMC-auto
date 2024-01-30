import { Link } from 'react-router-dom';
import service1 from '../assets/service/4-768x575.webp';
import service2 from '../assets/service/Car-Upholstery-1067x800.webp';
import service3 from '../assets/service/ksa_bro-9-768x575.webp';
import service4 from '../assets/service/Smart-TV-Apple-TV_03.webp';
const ServiceCard = () => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-5 md:px-0 p-20">

            {/* Card1 */}
            <div className="card  shadow-xl bg-[#292929] text-white rounded-md hover:scale-105 transition-all">
                <figure><img src={service1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">SEAT MODIFICATIONS</h2>
                    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                    <div className="flex justify-center">
                        <Link className="px-4 py-2 w-full bg-black text-white rounded-md hover:bg-transparent hover:border transition-all text-center" to={"/seat-modification"}><button>Details</button></Link>
                    </div>
                </div>
            </div>
            {/* Card2 */}
            <div className="card  shadow-xl bg-[#292929] text-white rounded-md hover:scale-105 transition-all">
                <figure><img src={service2} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">UPHOLSTERY</h2>
                    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                    <div className="flex justify-center">
                        <Link className="px-4 py-2 w-full bg-black text-white rounded-md hover:bg-transparent hover:border transition-all text-center" to={"/auto-upholstery"}><button>Details</button></Link>
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
                    <h2 className="card-title uppercase">Entertainment</h2>
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