import img from '../assets/Screenshot 2024-01-01 121035.png';

const About = () => {
    return (
        <div>
            <section className="flex items-center bg-stone-100 xl:h-screen font-poppins ">
                <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
                    <div className="flex flex-wrap ">
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                            <div className="relative lg:max-w-md">
                                <img src={img} alt="aboutimage"
                                    className="relative z-10 object-cover w-full rounded h-96" />
                                <div
                                    className="absolute bottom-0 right-0 z-10 p-8 bg-white border-4 border-blue-500 rounded shadow lg:-mb-8 lg:-mr-11 sm:p-8">
                                    <p className="text-lg font-semibold md:w-72">
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
                        <div className="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 ">
                            <div className="pl-4 mb-6 border-l-4 border-blue-500 ">
                                <span className="text-sm text-gray-600 uppercase ">Who we are?</span>
                                <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl">
                                    About Us
                                </h1>
                            </div>
                            <p className="mb-6 text-base leading-7 text-gray-500">
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
                <h1 className='text-3xl font-bold mb-10'>Transforming Car Interiors with Elegance and Style</h1>
                <div className="space-y-4 opacity-70">
                    <p><span className='font-bold'>Our Passion for Excellence:</span> At the heart of our company is a passionate team dedicated to the artistry of car interior decoration. We believe that the interior of a car is a reflection of its owner's personality and style. With this philosophy, we embark on a journey to transform ordinary car interiors into extraordinary spaces that exude sophistication and luxury.</p>

                    <p><span className='font-bold'>Craftsmanship and Quality:</span> Our skilled artisans and craftsmen are masters in their trade, ensuring every detail is meticulously crafted to perfection. We source premium materials to guarantee durability, comfort, and a touch of opulence in every project. From sumptuous leather upholstery to custom stitching and bespoke trimmings, we pay attention to every element to create an interior that is both visually stunning and comfortable.</p>

                    <p><span className='font-bold'>Tailored Solutions for Every Client:</span> Understanding that each car owner has unique tastes and preferences, we offer personalized solutions to meet individual needs. Whether you're looking for a classic, contemporary, or avant-garde interior design, our team collaborates closely with clients to bring their vision to life. We believe in turning dreams into reality, one car interior at a time.</p>

                    <p><span className='font-bold'>Innovation in Design:</span> Staying at the forefront of design trends and automotive innovations, we infuse modernity into our creations. Our designs not only focus on aesthetics but also incorporate cutting-edge technologies that enhance the functionality and convenience of your car interior. We blend the classic with the contemporary to deliver a timeless appeal.</p>

                    <p><span className='font-bold'>Commitment to Customer Satisfaction:</span> Customer satisfaction is our ultimate goal. We strive to exceed expectations at every step of the process, from the initial consultation to the final delivery. Our transparent communication, attention to detail, and dedication to quality ensure that our clients are not just satisfied but delighted with the transformation of their car interiors.</p>

                    <p><span className='font-bold'>Join Us on the Journey:</span> Embark on a journey with CMC and witness the transformation of your car interior into a masterpiece of design and comfort. Discover the joy of driving in an environment that reflects your style, personality, and a passion for excellence.</p>
                </div>
            </div>
        </div>
    );
};

export default About;