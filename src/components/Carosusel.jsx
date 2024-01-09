import 'swiper/css';
import 'swiper/css/navigation';
import FALCON from '../assets/Carosol/FALCON.png';
import LONGBUS from '../assets/Carosol/LONG BUS.png';
import MARSEDESGCLASS from '../assets/Carosol/MARSEDES G CLASS.png';
import MARSEDESVCLASS from '../assets/Carosol/MARSEDES V CLASS.png';
import SPRINTER from '../assets/Carosol/SPRINTER.png';
import { Link } from 'react-router-dom';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Carosusel = () => {
    return (
        <div className=' w-full mx-20 bg-[#2F2F2F]'>
            <AwesomeSlider className='h-screen bg-[#2F2F2F]'>
                <div className="block text-center px-40 ">
                    {/* <h4 className="uppercase text-xl font-bold text-[#3EA354]">Mercedes Benz</h4> */}
                    <h1 className="uppercase text-7xl font-bold text-[#2FA053]">Falcon</h1>
                    <img className="" src={FALCON} />
                    <Link to={'/falcon'}> <button className="mb-10 bg-[#3EA354] hover:bg-transparent hover:text-[#3EA354] border-2 border-[#3EA354] transition-all px-3 py-2 uppercase rounded-md text-white">View Vehicles</button></Link>
                </div>

                <div className="block text-center px-40">
                    {/* <h4 className="uppercase text-xl font-bold text-[#3EA354]">Bus</h4> */}
                    <h1 className="uppercase text-7xl font-bold text-[#2FA053]">Long bus</h1>
                    <img src={LONGBUS} />
                    <Link to={'/long-busses-type'}> <button className="mb-10 bg-[#3EA354] hover:bg-transparent hover:text-[#3EA354] border-2 border-[#3EA354] transition-all px-3 py-2 uppercase rounded-md text-white">View Vehicles</button></Link>
                </div>

                <div className="block text-center px-40">
                    {/* <h4 className="uppercase text-xl font-bold text-[#3EA354]">Mercedes Benz</h4> */}
                    <h1 className="uppercase text-7xl font-bold text-[#2FA053]">MARSEDES G CLASS</h1>
                    <img src={MARSEDESGCLASS} />
                    <Link to={'/mercedes-g-class'}> <button className="mb-10 bg-[#3EA354] hover:bg-transparent hover:text-[#3EA354] border-2 border-[#3EA354] transition-all px-3 py-2 uppercase rounded-md text-white">View Vehicles</button></Link>
                </div>

                <div className="block text-center px-40">
                    {/* <h4 className="uppercase text-xl font-bold text-[#3EA354]">5 SEAT Type</h4> */}
                    <h1 className="uppercase text-7xl font-bold text-[#2FA053]"> MARSEDES V CLASS</h1>
                    <img src={MARSEDESVCLASS} />
                    <Link to={'/v-class-4'}> <button className="mb-10 bg-[#3EA354] hover:bg-transparent hover:text-[#3EA354] border-2 border-[#3EA354] transition-all px-3 py-2 uppercase rounded-md text-white">View Vehicles</button></Link>
                </div>

                <div className="block text-center px-40">
                    {/* <h4 className="uppercase text-xl font-bold text-[#3EA354]">5 SEAT Type</h4> */}
                    <h1 className="uppercase text-7xl font-bold text-[#2FA053]"> SPRINTER</h1>
                    <img src={SPRINTER} />
                    <Link to={'/sprinter'}> <button className="mb-10 bg-[#3EA354] hover:bg-transparent hover:text-[#3EA354] border-2 border-[#3EA354] transition-all px-3 py-2 uppercase rounded-md text-white">View Vehicles</button></Link>
                </div>

            </AwesomeSlider>
        </div>
    );
};

export default Carosusel;