import { FaTools, Fa500Px } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { IoMdTime } from "react-icons/io";

const WhyChoose = () => {
    return (
        <div>
            <section className="text-white">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div className="w-full mb-8 lg:mb-16">
                        <h2 className="mb-4 text-center text-3xl md:text-4xl tracking-tight font-extrabold uppercase">Why Choose <span className="text-[#3EA354]">CMC</span> ?</h2>
                    </div>
                    <div className="space-y-8 md:mx-10 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0">
                        <div className="border-2 p-3 border-[#3EA354] hover:scale-105 transition-all bg-[#292929] bg-opacity-65">
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12">
                                <FaTools className="text-2xl text-[#3EA354]" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold uppercase">Expert Craftsmanship</h3>
                            <p className="text-gray-400 ">Our team of highly skilled upholsterers has years of experience in the industry. We take pride in our meticulous attention to detail and commitment to delivering exceptional results</p>
                        </div>
                        <div className="border-2 p-3 bg-[#292929] bg-opacity-65 border-[#3EA354] hover:scale-105 transition-all">
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12">
                                <Fa500Px className="text-3xl text-[#3EA354]" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold uppercase">Customization Options</h3>
                            <p className="text-gray-400">We understand that every client has unique preferences and requirements. That’s why we offer a wide range of customization options, including fabric selection, color schemes, patterns, stitching styles, and additional features.</p>
                        </div>
                        <div className="border-2 p-3 bg-[#292929] bg-opacity-65 border-[#3EA354] hover:scale-105 transition-all">
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12">
                                <BiSolidLike className="text-3xl text-[#3EA354]" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold uppercase">Premium Materials</h3>
                            <p className="text-gray-400">We source only the finest materials for our upholstery projects. From luxurious fabrics to durable and easy-to-clean options, we ensure that your van’s interior is not only visually stunning but also built to withstand the demands of your lifestyle</p>
                        </div>
                        <div className="border-2 p-3 bg-[#292929] bg-opacity-65 border-[#3EA354] hover:scale-105 transition-all">
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12">
                                <IoMdTime className="text-3xl text-[#3EA354]" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold uppercase">Timely Delivery</h3>
                            <p className="text-gray-400">We understand the excitement of transforming your van, and we strive to complete projects within the agreed-upon timeline. Our efficient processes and dedicated team enable us to deliver on time without compromising on quality</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhyChoose;