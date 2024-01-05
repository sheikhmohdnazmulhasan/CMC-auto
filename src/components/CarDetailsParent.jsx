import { DetailC } from "./DetailsC";
import { Faq } from "./Faq";
import Wp from "./Wp";

// eslint-disable-next-line react/prop-types
const CarDetailsParent = ({ img1, img2, img3, img4, title, des, li1, li2, li3, li4, vTitle, vDes, bTitle, bDes1, bDes2, g1, g2, g3, g4, g5, g6 }) => {
    return (
        <div className="">
            <Wp />
            <div className=" md:flex w-full bg-[#000000] text-white  md:p-20 gap-10 flex-row-reverse">

                {/* content */}
                <div className="flex-1 p-5">
                    <h3 className="text-2xl font-bold mb-2">{title}</h3>
                    <p className="text-sm">{des}</p>
                    <ul className="list-disc ml-10 mt-10 text-sm">
                        <li>{li1}</li>
                        <li>{li2}</li>
                        <li> {li3}</li>
                        <li>{li4}</li>
                    </ul>
                </div>

                {/* img */}
                <div className="flex-1 mt-5 md:mt-10">
                    <DetailC img1={img1} img2={img2} img3={img3} img4={img4} />
                </div>
            </div>
            <div data-aos="fade-up" className=" md:mx-10 mt-20">
                <div className="container mx-auto px-3 md:px-10 py-2 pt-5">
                    <div className="-m-1 flex flex-wrap md:-m-2">
                        <div className="flex w-1/2 flex-wrap">
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src={g1} />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src={g2} />
                            </div>
                            <div className="w-full p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src={g3} />
                            </div>
                        </div>
                        <div className="flex w-1/2 flex-wrap">
                            <div className="w-full p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src={g4} />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src={g5} />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src={g6} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* YT Video section */}
            <div className="mx-0 md:mx-10 mt-20 md:flex gap-5 items-center">

                {/* Video */}
                <div className="flex-1">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/TdIe_FTTHO0?si=NsAOz8PAl7pPmsyO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                {/* Content */}
                <div className="flex-1 mx-5 md:mx-0 mt-5 md:mt-0">
                    <h1 className="text-2xl font-bold mb-4">{vTitle}</h1>
                    <p className="opacity-80">{vDes}</p>
                </div>
            </div>
            <div className="mx-5 md:mx-10 mt-20">
                <h3 className="text-xl font-semibold">{bTitle}</h3>
                <p className="mt-5 opacity-90">
                    {bDes1}
                </p>
                <p className="mt-5 opacity-90">
                    {bDes2}
                </p>
            </div>
            <div className="mt-20 md:z-10">
                <div className="mt-20 mx-5 md:mx-10 rounded-md">
                    <Faq title1={"Custom Seat Design and Installation"} des1={"Our team of experienced professionals will work closely with you to create custom seat designs that suit your specific preferences and requirements. From ergonomic designs to luxurious materials, we ensure that every seat is tailored to perfection. We handle the entire installation process with precision and expertise, guaranteeing a seamless integration into your vehicle."} title2={"Seat Upholstery and Material Upgrades"} des2={"Upgrade the look and feel of your vehicle’s seats with our extensive range of high-quality upholstery and material options. From premium leather to durable fabrics, we offer a wide selection of materials that are both stylish and easy to maintain. Our skilled craftsmen pay attention to every detail, ensuring a flawless finish that enhances the overall aesthetics of your vehicle’s interior."} title3={"Seat Heating and Cooling Solutions"} des3={"Experience ultimate comfort regardless of the weather with our seat heating and cooling solutions. We integrate advanced temperature control systems into your seats, allowing you to adjust the climate according to your preference. Say goodbye to uncomfortable seats during extreme weather conditions and enjoy a pleasant journey all year round."} title4={"14 Airbag Massage System"} des4={"At Scuderia Motor Design, we are proud to present the latest innovation in automotive luxury: the 14 Airbag Massage for Vehicles. Imagine experiencing the ultimate comfort and relaxation during your daily commute or long road trips. Our cutting-edge technology combines the convenience of modern vehicles with the therapeutic benefits of a professional massage, taking your driving experience to a whole new level."} />
                </div>
            </div>
        </div>
    );
};

export default CarDetailsParent;