import img1 from '../../assets/Details/3/WhatsApp Image 2023-12-30 at 19.13.56_4e6ec124.jpg';
import img2 from '../../assets/Details/3/WhatsApp Image 2023-12-30 at 19.13.57_1b9c9cc3.jpg';
import img3 from '../../assets/Details/3/WhatsApp Image 2023-12-30 at 19.13.57_f37dab68.jpg';
import img4 from '../../assets/Details/3/WhatsApp Image 2023-12-30 at 19.14.02_d5738c2d.jpg';

const Toyota = () => {
    return (
        <div className="mt-20 mx-5 md:mx-10 ">
            <div className="text-center">
                <h1 className="text-3xl font-bold">Mercedes-Benz Models</h1>
                <p className="mt-3">CMC's proudly introduces one of a kind handcrafted quality created for first class travel in a Mercedes-Benz wide-body Sprinter. The "MERCEDES LUXURY TRANSPORT". Amenities that you would expect to find in a five-star hotel suite are abundant throughout this vehicle. It's spacious luxury interior includes custom tailored Italian leather seating with heat, massage, and ventilation, a lavish private restroom, multiple secured storage compartments, custom kitchen workstation with large refrigerator, Bose home theater surround sound system, Control 4 audio/visual touch screens, and satellite TV. Other onboard features and equipment include; electronic VIP cabin shades, dimmable ambient overhead lights, adjustable reading lights, and heavy duty air conditioning system all powered by a Cummings Onan generator when parked. A truly distinguished travel experience fashioned for the distinguished traveler.</p>
            </div>
            <div className="mt-20">
                <div className="bg-white py-6 sm:py-8 lg:py-12">
                    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">

                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">

                            <a href="#"
                                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                                <img src={img1} loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                                <div
                                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                </div>

                                {/* <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span> */}
                            </a>


                            <a href="#"
                                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                                <img src={img2} loading="lazy" alt="Photo by Magicle" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                                <div
                                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                </div>

                                {/* <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Tech</span> */}
                            </a>
                            <a href="#"
                                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                                <img src={img3} loading="lazy" alt="Photo by Martin Sanchez" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                                <div
                                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                </div>

                                {/* <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Dev</span> */}
                            </a>
                            <a href="#"
                                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                                <img src={img4} loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                                <div
                                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                </div>
                                {/* <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Retro</span> */}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Toyota;