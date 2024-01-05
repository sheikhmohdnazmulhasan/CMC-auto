import 'swiper/css';
import 'swiper/css/navigation';
import img2 from '../assets/Carosol/WhatsApp Image 2024-01-05 at 12.27.28_a6454df8.jpg';
import img4 from '../assets/Carosol/WhatsApp Image 2024-01-05 at 12.37.38_d80386b1.jpg';
import img5 from '../assets/Carosol/WhatsApp Image 2024-01-05 at 12.45.57_56b566cc.jpg';
import img7 from '../assets/Carosol/WhatsApp Image 2024-01-05 at 13.13.28_15b03117.jpg';
import { Link } from 'react-router-dom';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Carosusel = () => {
    return (
        <div className=' w-full mx-20 bg-white'>
            <AwesomeSlider className='h-screen bg-white'>
                <div className="block text-center px-40 bg-white">
                    <h4 className="uppercase text-xl font-bold text-[#3EA354]">Mercedes Benz</h4>
                    <h1 className="uppercase text-7xl font-bold text-[#2FA053]">V CLASS</h1>
                    <img className="" src={img2} />
                    <Link to={'/mercedes-vip'}> <button className="mb-10 bg-[#3EA354] hover:bg-transparent hover:text-[#3EA354] border-2 border-[#3EA354] transition-all px-3 py-2 uppercase rounded-md text-white">View Vehicles</button></Link>
                </div>

                <div className="block text-center px-40 bg-white">
                    <h4 className="uppercase text-xl font-bold text-[#3EA354]">Bus</h4>
                    <h1 className="uppercase text-7xl font-bold text-[#2FA053]">Long Bus</h1>
                    <img src={img4} />
                    <Link to={'/long-bus'}> <button className="mb-10 bg-[#3EA354] hover:bg-transparent hover:text-[#3EA354] border-2 border-[#3EA354] transition-all px-3 py-2 uppercase rounded-md text-white">View Vehicles</button></Link>
                </div>

                <div className="block text-center px-40 bg-white">
                    <h4 className="uppercase text-xl font-bold text-[#3EA354]">Mercedes Benz</h4>
                    <h1 className="uppercase text-7xl font-bold text-[#2FA053]">Falcon</h1>
                    <img src={img5} />
                    <Link to={'/falcon'}> <button className="mb-10 bg-[#3EA354] hover:bg-transparent hover:text-[#3EA354] border-2 border-[#3EA354] transition-all px-3 py-2 uppercase rounded-md text-white">View Vehicles</button></Link>
                </div>

                <div className="block text-center px-40 bg-white">
                    <h4 className="uppercase text-xl font-bold text-[#3EA354]">5 SEAT Type</h4>
                    <h1 className="uppercase text-7xl font-bold text-[#2FA053]">5 SEAT</h1>
                    <img src={img7} />
                    <Link to={'/5-seat'}> <button className="mb-10 bg-[#3EA354] hover:bg-transparent hover:text-[#3EA354] border-2 border-[#3EA354] transition-all px-3 py-2 uppercase rounded-md text-white">View Vehicles</button></Link>
                </div>

            </AwesomeSlider>
        </div>
    );
};

export default Carosusel;