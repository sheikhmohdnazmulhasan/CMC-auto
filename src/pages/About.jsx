import img from '../assets/Screenshot 2024-01-01 121035.png';
import { Faq } from '../components/Faq';
import goal from '../assets/about/goal.png';
import opportunity from '../assets/about/opportunity.png';
import values from '../assets/about/value.png';
import Wp from '../components/Wp';


const About = () => {

    return (

        <div data-aos="fade-left" className="bg-[url('https://i.ibb.co/NshGgLF/CMC-WEB-BG.jpg')] bg-cover text-white  bg-animate-bounce" >


            {/* whatsApp */}
            <div className="absolute right-5 md:top-[550px] top-[600px] !fixed z-[50000]">
                <Wp />
            </div>
            <section className="flex items-center  xl:h-screen font-poppins ">
                <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
                    <div className="flex flex-wrap ">
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                            <div className="hidden md:flex relative lg:max-w-md z-[500]">
                                <img src={img} alt="aboutimage"
                                    className="relative hidden md:flex z-10 object-cover w-full rounded h-96" />
                                <div
                                    className="absolute bottom-0 right-0 z-10 p-8 bg-white border-4 border-blue-500 rounded shadow lg:-mb-8 lg:-mr-11 sm:p-8">
                                    <p className="text-lg font-semibold md:w-72 text-black">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                            className="absolute top-0 left-0 w-16 h-16 text-blue-700 opacity-10"
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z">
                                            </path>
                                        </svg> CMC AUTOMOBILE OUTFITTING
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 text-white">
                            <div className="pl-4 mb-6 border-l-4 border-blue-500 ">
                                <span className="text-sm uppercase text-white">Who we are?</span>
                                <h1 className="mt-2 text-3xl font-black md:text-5xl">
                                    About Us
                                </h1>
                            </div>
                            <p className="mb-6 text-base leading-7">
                                Welcome to CMC Automobile Outfitting, where we redefine the driving experience by enhancing car interiors with exquisite craftsmanship and unparalleled design. As a leading car interior decoration company, we take pride in our commitment to elevating the aesthetics and comfort of your vehicle.
                            </p>
                            <a href="#more-about"
                                className="px-4 py-2 text-gray-100 bg-[#3EA354] hover:bg-[#358647] rounded">
                                Learn more
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <div className="mx-5 md:mx-10 mt-20" id='more-about'>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="card bg-[#292929] bg-opacity-65 text-white" data-aos="fade-right">
                        <figure className=" ">
                            <img src={goal} alt="Shoes" className="rounded-xl w-28 mt-4" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <p className=''> At CMC, our mission is to consistently push the boundaries of automotive interior design, setting new benchmarks for luxury and customization. We are dedicated to providing our clients with a personalized and immersive driving experience that goes beyond the expected. Our commitment to excellence is reflected in every stitch, material choice, and technological integration, ensuring that each interior we create is a masterpiece of its own</p>
                        </div>
                    </div>
                    <div className="card bg-[#292929] bg-opacity-65 text-white " >
                        <figure className=" ">
                            <img src={opportunity} alt="Shoes" className="rounded-xl w-36" />
                            {/* <a href="https://www.flaticon.com/free-icons/arrive" title="arrive icons"></a> */}
                        </figure>
                        <div className="card-body items-center text-center">
                            <p>CMC vision is to be the premier provider of custom car interiors, known for our exceptional craftsmanship, innovative designs, and unparalleled customer service. We aim to set the standard for the industry, continuously pushing the boundaries of what is possible in custom car interiors. </p>
                        </div>
                    </div>
                    <div className="card bg-[#292929] bg-opacity-65 text-white" data-aos="fade-left">
                        <figure className=" ">
                            <img src={values} alt="Shoes" className="rounded-xl w-36" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <p>We are committed to upholding the highest standards of excellence in all aspects of our business. Our core values guide everything we do, from our interactions with clients to quality control. As a leading car interior decoration company, we take pride in our commitment to elevating the aesthetics and comfort of your vehicle.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-20 mx-5 md:mx-10 rounded-md">
                <Faq title1={"Custom Seat Design and Installation"} des1={"Our team of experienced professionals will work closely with you to create custom seat designs that suit your specific preferences and requirements. From ergonomic designs to luxurious materials, we ensure that every seat is tailored to perfection. We handle the entire installation process with precision and expertise, guaranteeing a seamless integration into your vehicle."} title2={"Seat Upholstery and Material Upgrades"} des2={"Upgrade the look and feel of your vehicle’s seats with our extensive range of high-quality upholstery and material options. From premium leather to durable fabrics, we offer a wide selection of materials that are both stylish and easy to maintain. Our skilled craftsmen pay attention to every detail, ensuring a flawless finish that enhances the overall aesthetics of your vehicle’s interior."} title3={"Seat Heating and Cooling Solutions"} des3={"Experience ultimate comfort regardless of the weather with our seat heating and cooling solutions. We integrate advanced temperature control systems into your seats, allowing you to adjust the climate according to your preference. Say goodbye to uncomfortable seats during extreme weather conditions and enjoy a pleasant journey all year round."} title4={" Can I install an entertainment system in any vehicle?"} des4={"While entertainment system upgrades are possible in most vehicles, the feasibility can vary depending on the make and model of your car. Our team specializes in custom installations and will assess your vehicle to determine the best options available. We have experience working with a wide range of vehicles, so whether you drive a compact sedan or a spacious SUV, we can find a solution that fits your needs."} />
            </div>
        </div>
    );
};

export default About;