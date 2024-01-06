import img1 from '../../assets/Smart-TV-Apple-TV_03.webp';
import img2 from '../../assets/Bose-Sound-System.webp';
import img3 from '../../assets/PS5.webp';
import { Faq } from '../../components/Faq';

const Entertainment = () => {
    return (
        <div>
            <div className="bg-[url('https://i.ibb.co/NshGgLF/CMC-WEB-BG.jpg')] bg-cover text-white" >

                {/* Banner */}
                <div className="bg-[url('https://www.jvc.com/content/dam/jvc/shared/asia/22_Asia%20Banner_MM_Asia_1200x600.png')] h-72 flex justify-center items-center text-white bg-fixed bg-cover">
                    <h3 className='text-4xl font-bold'>Audio & Entertainment System</h3>
                </div>

                {/* Main Content */}
                <div className="p-5 md:p-10">
                    <h3 className='text-3xl font-semibold '>Ultimate Audio and Entertainment System for Customized Vans!</h3>
                    <div className="mt-10 opacity-65 space-y-4 text-sm">
                        <p>Welcome to CMC's Audio & Entertainment System, where luxury meets cutting-edge technology. Elevate your driving experience with our premium services tailored exclusively for Mercedes-Benz and other top-tier brands. Our team of experts specializes in enhancing your vehicle’s interior to provide you with the ultimate in-cabin entertainment and comfort. Explore how we can transform your ride:</p>

                        <p> <span className='font-semibold'>Smart TV and Apple TV Installation:</span>  Upgrade your vehicle’s entertainment options with our state-of-the-art Smart TV and Apple TV installation services. Whether you’re on a long road trip or simply stuck in traffic, you can now enjoy your favorite movies, shows, and streaming content right from the comfort of your luxury vehicle. Our seamless installation ensures a sleek and integrated look, so you can enjoy high-quality entertainment without compromising on aesthetics.</p>

                        <p> <span className='font-semibold'>Bose Sound System Upgrade:</span> Take your audio experience to the next level with our Bose sound system upgrades. Immerse yourself in crystal-clear, premium sound quality that brings your music, podcasts, and movies to life. Our expert technicians will carefully integrate the Bose system into your vehicle, ensuring a perfect balance of style and sound. Feel every beat and note as you drive, turning every journey into a concert-like experience.</p>

                        <p> <span className='font-semibold'>PlayStation 5 (PS5) Installation:</span>  For the gaming enthusiasts among us, Scuderia Motor Design offers PS5 installation services that will turn your vehicle into a gaming haven on wheels. Whether you’re parked at a scenic overlook or waiting for an appointment, the thrill of gaming is just a button press away. Our technicians will seamlessly integrate the PS5 console into your vehicle, providing you with a premium gaming experience wherever your adventures take you.</p>

                        <p> <span className='font-semibold'>Nappa Leather Upgrade:</span> Immerse yourself in opulence with our Nappa leather upgrades. Choose from a range of exquisite leather options, each handpicked for its premium quality and luxurious feel. Our expert craftsmen skillfully transform your seats, enveloping you in the softest, most sumptuous leather, elevating your driving experience to a new level of sophistication.</p>

                        <p> <span className='font-semibold'>Automatic Backrest, Headrest, and Footrest:</span> Enjoy the convenience of effortless adjustment with our automatic backrest, headrest, and footrest features. Tailor your seating position with the push of a button, allowing you to find the perfect angle for relaxation, comfort, and ergonomic support. Whether you’re on a long journey or simply taking a break, your seat adjusts to your preferences instantly.</p>
                    </div>

                    {/* Images */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:ml-5 my-10">
                        <img className=' rounded hover:scale-105 transition-all' src={img1} alt="" />
                        <img className=' rounded hover:scale-105 transition-all' src={img2} alt="" />
                        <img className=' rounded hover:scale-105 transition-all' src={img3} alt="" />
                    </div>

                    <div className=" opacity-80 space-y-4 text-sm">
                        <h1 className='text-2xl font-semibold'>Transform Your Van Today!</h1>
                        <p>At Scuderia Motor Design, we understand that luxury goes beyond the exterior of your vehicle. It’s about creating an oasis of comfort and entertainment while you’re on the road. Our Audio & Entertainment System services are designed to meet the highest standards of quality and sophistication, ensuring that every moment you spend inside your vehicle is truly exceptional.</p>

                        <p>Experience the future of in-car entertainment with Scuderia Motor Design. Contact us today to schedule a consultation, and let us elevate your driving experience to a whole new level of luxury and entertainment. Your journey begins here, where technology meets sophistication.</p>
                    </div>
                    <div className="mt-20 mx-5 md:mx-10 rounded-md">
                        <Faq title1={"Custom Seat Design and Installation"} des1={"Our team of experienced professionals will work closely with you to create custom seat designs that suit your specific preferences and requirements. From ergonomic designs to luxurious materials, we ensure that every seat is tailored to perfection. We handle the entire installation process with precision and expertise, guaranteeing a seamless integration into your vehicle."} title2={"Seat Upholstery and Material Upgrades"} des2={"Upgrade the look and feel of your vehicle’s seats with our extensive range of high-quality upholstery and material options. From premium leather to durable fabrics, we offer a wide selection of materials that are both stylish and easy to maintain. Our skilled craftsmen pay attention to every detail, ensuring a flawless finish that enhances the overall aesthetics of your vehicle’s interior."} title3={"Seat Heating and Cooling Solutions"} des3={"Experience ultimate comfort regardless of the weather with our seat heating and cooling solutions. We integrate advanced temperature control systems into your seats, allowing you to adjust the climate according to your preference. Say goodbye to uncomfortable seats during extreme weather conditions and enjoy a pleasant journey all year round."} title4={"14 Airbag Massage System"} des4={"At Scuderia Motor Design, we are proud to present the latest innovation in automotive luxury: the 14 Airbag Massage for Vehicles. Imagine experiencing the ultimate comfort and relaxation during your daily commute or long road trips. Our cutting-edge technology combines the convenience of modern vehicles with the therapeutic benefits of a professional massage, taking your driving experience to a whole new level."} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Entertainment;