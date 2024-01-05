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
                    <Faq title1={"What customization options do you offer for luxury vehicles?"}

                        des1={"At CMC, we specialize in a wide array of customization options, ranging from interior upgrades like bespoke leather seating, advanced entertainment systems, to exterior modifications such as bespoke paint finishes, aerodynamic enhancements, and high-end wheel selections."}

                        title2={"How long does the customization process typically take?"}

                        des2={"The duration of customization can vary based on the extent of modifications desired. Generally, our team works efficiently to ensure a timely completion without compromising the superior quality our clients expect. We provide an estimated timeline for each project based on its unique requirements."}

                        title3={"Can you accommodate specific safety and security enhancements?"}

                        des3={"Absolutely. We prioritize safety and security, offering various options such as advanced security systems, reinforced doors, bulletproof glass installations, and other bespoke safety features tailored to meet individual needs."}

                        title4={"Do you provide ongoing support and maintenance after customization?"}

                        des4={"At CMC, our commitment extends beyond the completion of the customization. We offer post-customization support and maintenance services to ensure that our clients continue to experience the same level of excellence and satisfaction with their vehicles over time."} />
                </div>
            </div>
        </div>
    );
};

export default CarDetailsParent;