import { Link } from "react-router-dom";
import hyundai from '../assets/more/hyundai-staria.jpg';
import lexus from '../assets/more/lexus.jpg';
import coaster from '../assets/more/coaster.jpg';
import camper from '../assets/more/camper.jpg';
import mobile from '../assets/more/mobile.jpg';
import mobility from '../assets/more/mobility-bus.png';
import longBusses from '../assets/more/long-busses-type.jpeg';

const MoreCar = () => {

    return (
        <div data-aos="fade-left" className="bg-[url('https://i.ibb.co/NshGgLF/CMC-WEB-BG.jpg')] bg-cover text-white  bg-animate-bounce px-5 md:px-10 min-h-screen pb-20" >
            <h1 className="text-3xl py-20 text-center uppercase font-bold">VEHICLES</h1>

            {/* Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

                {/* Card1 */}
                <div className="card  shadow-xl bg-[#292929] text-white rounded-md hover:scale-105 transition-all">
                    <figure><img className="md:w-96 md:h-40" src={hyundai} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title uppercase">hyundai staria</h2>
                        {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                        <div className="flex justify-center">
                            <Link className="px-4 py-2 w-full bg-black text-white rounded-md hover:bg-transparent hover:border transition-all text-center" to={"/hyundai-staria"}><button>Details</button></Link>
                        </div>
                    </div>
                </div>

                {/* Card2 */}
                <div className="card  shadow-xl bg-[#292929] text-white rounded-md hover:scale-105 transition-all">
                    <figure><img className="md:w-96 md:h-40" src={lexus} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title uppercase">lexus</h2>
                        {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                        <div className="flex justify-center">
                            <Link className="px-4 py-2 w-full bg-black text-white rounded-md hover:bg-transparent hover:border transition-all text-center" to={"/lexus"}><button>Details</button></Link>
                        </div>
                    </div>
                </div>

                {/* Card3 */}
                <div className="card  shadow-xl bg-[#292929] text-white rounded-md hover:scale-105 transition-all">
                    <figure><img className="md:w-96 md:h-40" src={coaster} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title uppercase">toyota coaster</h2>
                        {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                        <div className="flex justify-center">
                            <Link className="px-4 py-2 w-full bg-black text-white rounded-md hover:bg-transparent hover:border transition-all text-center" to={"/toyota-coaster"}><button>Details</button></Link>
                        </div>
                    </div>
                </div>

                {/* Card4 */}
                <div className="card  shadow-xl bg-[#292929] text-white rounded-md hover:scale-105 transition-all">
                    <figure><img className="md:w-96 md:h-40" src={camper} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title uppercase">camper bus</h2>
                        {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                        <div className="flex justify-center">
                            <Link className="px-4 py-2 w-full bg-black text-white rounded-md hover:bg-transparent hover:border transition-all text-center" to={"/camper-bus"}><button>Details</button></Link>
                        </div>
                    </div>
                </div>

                {/* Card5 */}
                <div className="card  shadow-xl bg-[#292929] text-white rounded-md hover:scale-105 transition-all">
                    <figure><img className="md:w-96 md:h-40" src={mobile} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title uppercase">mobile office bus</h2>
                        {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                        <div className="flex justify-center">
                            <Link className="px-4 py-2 w-full bg-black text-white rounded-md hover:bg-transparent hover:border transition-all text-center" to={"/mobile-office-bus"}><button>Details</button></Link>
                        </div>
                    </div>
                </div>

                {/* Card6 */}
                <div className="card  shadow-xl bg-[#292929] text-white rounded-md hover:scale-105 transition-all">
                    <figure><img className="md:w-96 md:h-40" src={mobility} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title uppercase">mobility bus</h2>
                        {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                        <div className="flex justify-center">
                            <Link className="px-4 py-2 w-full bg-black text-white rounded-md hover:bg-transparent hover:border transition-all text-center" to={"/mobility-bus"}><button>Details</button></Link>
                        </div>
                    </div>
                </div>

                {/* Card7 */}
                <div className="card  shadow-xl bg-[#292929] text-white rounded-md hover:scale-105 transition-all">
                    <figure><img className="md:w-96 md:h-40" src={longBusses} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title uppercase">long busses type</h2>
                        {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                        <div className="flex justify-center">
                            <Link className="px-4 py-2 w-full bg-black text-white rounded-md hover:bg-transparent hover:border transition-all text-center" to={"/long-busses-type"}><button>Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoreCar;