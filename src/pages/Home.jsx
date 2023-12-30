import '../CSS/hero.css'
import logo from '../assets/logo.png';
import heroVideo from '../assets/heroVideo.mp4';
import MercedesBenzVclassBanner from '../assets/Mercedes-benz-vclass-banner-1.webp';
import aat from '../assets/aat-12.webp';
import timeSq from '../assets/time_sq-5.webp';
import Hyundai from '../assets/Hyundai-Staria-Luxury-Van-9.webp';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>

            {/* Hero */}
            <section className="fixed z-[-1] top-0 left-0 w-full h-screen flex flex-col items-center justify-center py-0 px-3">
                <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden bg-fixed">
                    <video className="min-w-full min-h-full  object-cover absolute" src={heroVideo} type="video/mp4" autoPlay muted loop></video>
                </div>
            </section>

            {/* Main Content */}
            <main className=" z-50 mt-[100vh] bg-white w-full">

                {/* About us */}
                <div className="w-[90%] mt-96 mx-auto py-20">
                    <div className="md:flex items-center gap-5 space-y-20">
                        <div className="md:w-[40%] md:flex">
                            <img className="w-[1000px]" src={logo} alt="" />
                        </div>
                        <div className="md:w-[60%]">
                            <h1 className="text-4xl font-bold uppercase"><span className="text-[#3EA354]"> CMC AUTOMOBILE </span>  OUTFITTING</h1>
                            <div className="mt-5 text-xl opacity-75">
                                <p>CMC Auto specializes in Mercedes car luxury interior builder. We have a collective experience of over 10 years in luxury vehicle modification and delivered with utmost satisfaction to our high-profile customers. Scuderia leads the industry in transforming vans and another SUV’s into some of the most luxuriously productive, comfortable, safe, and exclusive vehicles in the world today. As the leading authority in luxury interior design Dubai, we are committed to delivering unparalleled quality and unparalleled experiences. SMD is the luxury interior builder for Mercedes, Lexus, and other top brands’ vehicle design and conversion.</p>
                            </div>
                            <div />
                        </div>
                    </div>
                </div >

                {/* Services */}
                <div className=" bg-[#F3F3F3] mt-20 md:p-10">

                    {/* Links */}
                    <div className="flex flex-col md:flex-row justify-center">
                        <Link to={'/seat-modification'}><button className='bg-white px-6 py-3 border hover:shadow-md transition-all hover:scale-105'>SEAT MODIFICATIONS</button></Link>
                        <button className='bg-white px-6 py-3 border hover:shadow-md transition-all hover:scale-105'>CAR UPHOLSTERY</button>
                        <button className='bg-white px-6 py-3 border hover:shadow-md transition-all hover:scale-105'>SEAT MODIFICATIONS</button>
                        <button className='bg-white px-6 py-3 border hover:shadow-md transition-all hover:scale-105'> CENTRAL CONSOLE</button>
                        <button className='bg-white px-6 py-3 border hover:shadow-md transition-all hover:scale-105'> CUSTOM DASHBOARD</button>
                        <button className='bg-white px-6 py-3 border hover:shadow-md transition-all hover:scale-105'>  MORE SERVICES...</button>
                    </div>

                    {/* Images */}
                    <div className="md:flex p-2 gap-3 space-y-4 md:space-y-0">
                        <img className='md:w-[24%]' src={MercedesBenzVclassBanner} alt="" />
                        <img className='md:w-[24%]' src={aat} alt="" />
                        <img className='md:w-[24%]' src={timeSq} alt="" />
                        <img className='md:w-[24%]' src={Hyundai} alt="" />

                    </div>
                </div>

            </main>
        </div >
    );
};

export default Home;