import '../CSS/hero.css'
import logo from '../assets/logo.png';
import heroVideo from '../assets/heroVideo.mp4';
import v1 from '../assets/video2.mp4';
import ServiceCard from '../components/ServiceCard';
import { IoIosArrowForward } from "react-icons/io";
import CarouselComponent from '../components/Carousel';
import { CarouselComponent2 } from '../components/Carousel2';
import PhotoGallery from '../components/PhotoGallery';
import Testimonial from '../components/Testimonial';

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
                <div className=" mt-20 mb-10 md:p-10">
                    <div className="text-center mb-10 px-5 md:px-0">
                        <h1 className='text-3xl font-bold'>OUR SERVICES</h1>
                        <p className='mt-2 font-semibold opacity-55'>We transform your brand-new car into a personalized masterpiece with our VIP Modification Services, <br />offering luxurious 4-seat, opulent 5-seat, and futuristic Falcon 6-seat configurations, <br /> each meticulously crafted for an elevated driving experience.</p>
                    </div>

                    {/* Links */}
                    {/* <div className="flex flex-col md:flex-row justify-around">

                        <Link className='bg-white text-center px-6 py-3 border hover:shadow-md transition-all hover:scale-105' to={'/seat-modification'}><button className=''></button></Link>

                        <Link className='bg-white text-center px-6 py-3 border hover:shadow-md transition-all hover:scale-105' to={'/auto-upholstery'}><button >CAR UPHOLSTERY</button></Link>

                        <Link className='bg-white text-center px-6 py-3 border hover:shadow-md transition-all hover:scale-105' to={'/central-console-design'}><button className='uppercase'> Entertainment</button></Link>

                        <Link className='bg-white text-center px-6 py-3 border hover:shadow-md transition-all hover:scale-105' to={'/central-console-design'}><button >CENTRAL CONSOLE</button></Link>
                    </div> */}

                    <ServiceCard />
                </div>

                {/*video Section */}
                <div className="mt-20 p-10 md:flex gap-5 items-center space-y-5 md:space-y-0">

                    {/* Content */}
                    <div className="flex-1">
                        <h1 className='font-bold'>At CMC, we specialize in crafting extraordinary driving experiences by offering bespoke car modification services tailored to your unique preferences and lifestyle. With a passion for excellence, we take pride in delivering VIP 4-seat, opulent 5-seat, and futuristic Falcon 6-seat configurations, ensuring that every detail reflects luxury, innovation, and personalized style. Trust us to turn your brand-new car into a true masterpiece that goes beyond the ordinary, setting you apart on the road. Your journey begins with CMC, where every drive becomes an extraordinary adventure.</h1>
                        <div className="flex mt-5">
                            <p> <IoIosArrowForward className='text-xl mt-1 text-[#3EA354] font-bold' /> </p>
                            <p>Our team comprises skilled artisans and craftsmen who are masters in their trade. We pride ourselves on delivering meticulous attention to detail, ensuring that every modification reflects the highest standards of craftsmanship and precision.</p>
                        </div>

                        {/* <div className="flex mt-5">
                            <p> <IoIosArrowForward className='text-xl mt-1 text-[#3EA354] font-bold' /> </p>
                            <p>We understand that each client is unique, and so are their preferences. Our personalized approach means that every modification service is tailored to meet your specific desires and lifestyle, ensuring a one-of-a-kind driving experience that resonates with your personality.</p>
                        </div>
                        <div className="flex mt-5">
                            <p> <IoIosArrowForward className='text-xl mt-1 text-[#3EA354] font-bold' /> </p>
                            <p>We source and utilize premium materials to guarantee durability, comfort, and a touch of opulence in every project. Whether it's the finest leather upholstery or high-end interior components, our commitment to quality is unwavering.</p>
                        </div> */}
                    </div>


                    {/* Video */}
                    <div className="flex-1 ">
                        <video className='rounded-lg' src={v1} type='video/mp4' muted loop autoPlay></video>
                    </div>
                </div>
                <div className="mt-20 ">
                    <div className="text-center mb-10 px-5 md:px-0">
                        <h1 className='text-3xl font-bold uppercase'>Discover CMC's Vehicles</h1>
                        <p className='mt-2 font-semibold opacity-55'>The possibilities are endless with custom luxury interior upgrades for automobiles. <br /> At CMC our mission is to provide the most functional, luxurious, and elegant travel experience possible. <br /> The unanimously positive response we have received, demonstrates clearly that we have succeeded.</p>
                    </div>
                    <div className="hidden md:flex">
                        <CarouselComponent />
                    </div>
                    <div className="md:hidden">
                        <CarouselComponent2 />
                    </div>
                </div>
                <div className="mt-20">
                    <div className="text-center mb-5 px-5 md:px-0">
                        <h1 className='text-3xl font-bold uppercase'>Explore the Motorcar Gallery</h1>
                        <p className='mt-2 font-semibold opacity-55'>CMC’s conversions are famous for their premium interiors, cutting-edge technology, <br />  and unmatched elegance. We believe you shouldn’t have to sail or fly to be transported with class, <br /> so we brought the convenience, comfort and prestige of private first class travel to the road. View just a few of our executive vehicles, <br /> custom SUV and luxury vans in the motorcar gallery.</p>
                    </div>
                    <PhotoGallery />
                    <div className="mt-20">
                        <Testimonial />
                    </div>
                </div>
            </main>
        </div >
    );
};

export default Home;