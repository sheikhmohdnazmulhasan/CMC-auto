import '../CSS/hero.css'
import logo from '../assets/logo.png';
import heroVideo from '../assets/heroVideo.mp4';
import v1 from '../assets/video2.mp4';
import ServiceCard from '../components/ServiceCard';
import { IoIosArrowForward } from "react-icons/io";
import { CarouselComponent2 } from '../components/Carousel2';
import PhotoGallery from '../components/PhotoGallery';
import Testimonial from '../components/Testimonial';
import WhyChoose from '../components/WhyChoose';
import { Link } from 'react-router-dom';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import Carosusel from '../components/Carosusel';
import Wp from '../components/Wp';
import newImage from '../assets/new Detail page/VIP V class/g/IMG-20231214-WA0114.jpg';
const Home = () => {

    return (
        <div>
            {/* Hero */}
            <section className="fixed z-[-1] top-0 left-0 w-full h-screen flex flex-col items-center justify-center py-0 px-3 bg-[#292929]">
                <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden bg-fixed">
                    <video className="min-w-full min-h-full  object-cover absolute" src={heroVideo} type="video/mp4" autoPlay muted loop></video>
                    <div className="absolute right-0 bottom-0">
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <main className=" z-50 mt-[100vh] bg-white w-full">
                {/* whatsApp */}
                <Wp />

                {/* About us */}
                <div className=" w-full px-10 mt-96 mx-auto py-20 bg-[#292929] text-white">
                    <div className="md:flex gap-5 w-full" data-aos="fade-right">
                        <div className="flex-1">
                            <img className="rounded-lg" src={newImage} alt="" />
                        </div>
                        <div className="flex-1" data-aos="fade-left">
                            <h1 className="text-4xl font-bold uppercase"><span className="text-[#3EA354]"> CMC AUTOMOBILE </span>  OUTFITTING</h1>
                            <div className="mt-5 text-xl opacity-75">
                                <p>CMC Auto specializes in Mercedes car luxury interior builder. We have a collective experience of over 10 years in luxury vehicle modification and delivered with utmost satisfaction to our high-profile customers. Scuderia leads the industry in transforming vans and another SUV’s into some of the most luxuriously productive, comfortable, safe, and exclusive vehicles in the world today. As the leading authority in luxury interior design Dubai, we are committed to delivering unparalleled quality and unparalleled experiences. SMD is the luxury interior builder for Mercedes, Lexus, and other top brands’ vehicle design and conversion.</p>
                            </div>
                            <div />
                        </div>
                    </div>
                </div >
                {/* data-aos="fade-up */}
                {/* Services */}
                <div className=" pt-20 md:p-10 bg-black text-white">
                    <div className="text-center mb-10 px-5 md:px-0">
                        <h1 className='text-3xl font-bold pt-10 md:pt-0'>OUR SERVICES</h1>
                        <p className='mt-2 font-semibold opacity-55'>We transform your brand-new car into a personalized masterpiece with our VIP Modification Services, <br />offering luxurious 4-seat, opulent 5-seat, and futuristic Falcon 6-seat configurations, <br /> each meticulously crafted for an elevated driving experience.</p>
                    </div>

                    <ServiceCard />
                </div>

                {/*video Section */}
                <div className="pt-20 md:flex gap-5 items-center space-y-5 md:space-y-0 bg-[#292929] text-white px-10 pb-20">

                    {/* Content */}
                    <div className="flex-1" data-aos="fade-right">
                        <h1 className='font-bold'>At CMC, we specialize in crafting extraordinary driving experiences by offering bespoke car modification services tailored to your unique preferences and lifestyle. With a passion for excellence, we take pride in delivering VIP 4-seat, opulent 5-seat, and futuristic Falcon 6-seat configurations, ensuring that every detail reflects luxury, innovation, and personalized style. Trust us to turn your brand-new car into a true masterpiece that goes beyond the ordinary, setting you apart on the road. Your journey begins with CMC, where every drive becomes an extraordinary adventure.</h1>
                        <div className="flex mt-5">
                            <p> <IoIosArrowForward className='text-xl mt-1 text-red-600 font-bold' /> </p>
                            <p>Our team comprises skilled artisans and craftsmen who are masters in their trade. We pride ourselves on delivering meticulous attention to detail, ensuring that every modification reflects the highest standards of craftsmanship and precision.</p>
                        </div>
                    </div>


                    {/* Video */}
                    <div className="flex-1 " data-aos="fade-left">
                        <video className='rounded-lg' src={v1} type='video/mp4' muted loop autoPlay></video>
                    </div>
                </div>

                <div className="pt-20 text-white bg-[#2F2F2F]" >
                    <div className="text-center mb-10 px-5 md:px-0">
                        <h1 className='text-3xl font-bold uppercase'>Discover CMC's Vehicles</h1>
                        <p className='mt-2 font-semibold opacity-55'>The possibilities are endless with custom luxury interior upgrades for automobiles. <br /> At CMC our mission is to provide the most functional, luxurious, and elegant travel experience possible. <br /> The unanimously positive response we have received, demonstrates clearly that we have succeeded.</p>
                    </div>
                    <div className="hidden md:flex z-[-100] bg-[#2F2F2F]">
                        {/* <CarouselComponent /> */}
                        <Carosusel className='bg-[#2F2F2F]' />
                    </div>
                    <div className="md:hidden">
                        <CarouselComponent2 />
                    </div>
                </div>
                <div className="mt-20">
                    <div className="text-center mb-5 px-5 md:px-0" data-aos="fade-up">
                        <h1 className='text-3xl font-bold uppercase'>Explore the Motorcar Gallery</h1>
                        <p className='mt-2 font-semibold opacity-55'>CMC’s conversions are famous for their premium interiors, cutting-edge technology, <br />  and unmatched elegance. We believe you shouldn’t have to sail or fly to be transported with class, <br /> so we brought the convenience, comfort and prestige of private first class travel to the road. View just a few of our executive vehicles, <br /> custom SUV and luxury vans in the motorcar gallery.</p>
                    </div>
                    <PhotoGallery />
                    <div className="mt-20" data-aos="fade-up">
                        <WhyChoose />
                    </div>
                    <div className="mt-20" data-aos="zoom-out">
                        <Testimonial />
                    </div>

                    {/* need help */}
                    <div className=" h-96 shadow-md bg-[url('https://www.shutterstock.com/shutterstock/videos/1101756747/thumb/8.jpg?ip=x480')] bg-cover bg-fixed flex justify-center items-center">
                        <div className="h-60 bg-blue-500 bg-opacity-0 md:bg-opacity-20 w-[70%] flex flex-col justify-center items-center">
                            <h1 className="text-3xl uppercase text-white font-semibold">Need Help?</h1>
                            <p className="text-white text-center mt-2">If you need CMC's location or have any trouble finding us, <br /> please don’t hesitate to contact us, and we will be happy to assist you.</p>
                            <div className="flex gap-3 mt-5">
                                <Link to={'mailto:info@cmcauto.ae'}>  <button className="text-white flex items-center py-1 px-4 gap-2 font-semibold bg-[#58AE69] hover:bg-[#2d703a] transition-all"> <MdOutlineMail className="font-semibold" /> Mail Now</button></Link>
                                <Link to={'tel:+971503583882'}> <button className="text-white flex items-center py-1 px-4 gap-2 font-semibold bg-[#58AE69] hover:bg-[#2d703a] transition-all"> <FaPhoneAlt className="font-semibold" /> Call Now</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div >
    );
};

export default Home;