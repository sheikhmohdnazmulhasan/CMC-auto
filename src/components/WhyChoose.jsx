import { FaLock } from "react-icons/fa";
import { MdBrowserUpdated } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";
import { BiSupport } from "react-icons/bi";

const WhyChoose = () => {
    return (
        <div>
            <section className="bg-white">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div className="w-full mb-8 lg:mb-16">
                        <h2 className="mb-4 text-center text-4xl tracking-tight font-extrabold text-gray-900 uppercase">Why Choose <span className="text-blue-500">Odommo xyz</span> ?</h2>
                    </div>
                    <div className="space-y-8 md:mx-10 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0">
                        <div className="border-2 p-3 border-blue-600 hover:scale-105 transition-all">
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12">
                                <FaLock className="text-2xl text-blue-500" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold uppercase">Commitment to Security</h3>
                            <p className="text-gray-500">We don`t compromise on server security, get from highly skilled Engineers to maintain our server.</p>
                        </div>
                        <div className="border-2 p-3 border-blue-600 hover:scale-105 transition-all">
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12">
                                <MdBrowserUpdated className="text-3xl text-blue-500" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold uppercase">99.99% Uptime Guarantee</h3>
                            <p className="text-gray-500">We give you guarantee about our service so you don`t have to worry after buying us any service.</p>
                        </div>
                        <div className="border-2 p-3 border-blue-600 hover:scale-105 transition-all">
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12">
                                <BiSolidLike className="text-3xl text-blue-500" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold uppercase">Reliability</h3>
                            <p className="text-gray-500">Success depends on strong honest relationships that involve having a strong bond with our customers.</p>
                        </div>
                        <div className="border-2 p-3 border-blue-600 hover:scale-105 transition-all">
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12">
                                <BiSupport className="text-3xl text-blue-500" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold uppercase">24/7 Premium Support</h3>
                            <p className="text-gray-500">Our Special Support Engineer does their best to give as much support as possible for us customers.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhyChoose;