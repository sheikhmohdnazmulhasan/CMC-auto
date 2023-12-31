import img1 from '../../assets/Details/4/WhatsApp Image 2023-12-30 at 19.13.55_5781c2b0.jpg';
import img2 from '../../assets/Details/4/WhatsApp Image 2023-12-30 at 19.13.59_21876fd3.jpg';
import img3 from '../../assets/Details/4/WhatsApp Image 2023-12-30 at 19.14.01_80b3d289.jpg';
import img4 from '../../assets/Details/4/WhatsApp Image 2023-12-30 at 19.14.02_611c59b7.jpg';

const Gmc = () => {
    return (
        <div className="mt-20 mx-5 md:mx-10 ">
            <div className="text-center">
                <h1 className="text-3xl font-bold">GMC Models</h1>
                <p className="mt-3">The custom Yukon luxury conversion is breathtaking; with plush Italian leather seats, <br /> vibrant wood finish, custom raised ceiling, and ambient environment, you might forget you're not in a private jet. <br />
                    This four-passenger executive transport with suede-lined walls and gold plated accents is easy on the eyes and provides unmatched comfort. <br /> Depending on the number of passengers, the 3-way power jump seats (patent pending) can function as a footrest or as seats.</p>
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

export default Gmc;