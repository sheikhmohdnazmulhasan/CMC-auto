import { DetailC } from "./DetailsC";
import { Faq } from "./Faq";
import Wp from "./Wp";

// eslint-disable-next-line react/prop-types
const CarDetailsParent = ({ img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31, img32, img33, img34, img35, img36, img37, img38, img39, img40, title, des, li1, li2, li3, li4, vTitle, vDes, bTitle, bDes1, bDes2, g1, g2, g3, g4, g5, g6, g7, g8 }) => {
    return (
        <div className="bg-[url('https://i.ibb.co/NshGgLF/CMC-WEB-BG.jpg')] bg-cover text-white px-5 md:px-0" >
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <img src={g1} alt="" />
                    <img src={g2} alt="" />
                    <img src={g3} alt="" />
                    <img src={g4} alt="" />
                    <img src={g5} alt="" />
                    <img src={g6} alt="" />
                    <img src={g7} alt="" />
                    <img src={g8} alt="" />
                    {/* <img src={g8} alt="" /> */}

                    <img src={img9} alt="" />
                    <img src={img10} alt="" />
                    <img src={img11} alt="" />
                    <img src={img12} alt="" />
                    {/* <img src={img12} alt="" /> */}
                    <img src={img13} alt="" />
                    <img src={img14} alt="" />
                    <img src={img15} alt="" />
                    <img src={img16} alt="" />
                    <img src={img17} alt="" />
                    <img src={img18} alt="" />
                    <img src={img19} alt="" />
                    <img src={img20} alt="" />
                    <img src={img21} alt="" />
                    <img src={img22} alt="" />
                    <img src={img23} alt="" />
                    <img src={img24} alt="" />
                    <img src={img25} alt="" />
                    <img src={img26} alt="" />
                    <img src={img27} alt="" />
                    <img src={img28} alt="" />
                    <img src={img29} alt="" />
                    {/* <img src={img30} alt="" /> */}
                    <img src={img31} alt="" />
                    <img src={img32} alt="" />
                    <img src={img33} alt="" />
                    {/* <img src={img34} alt="" /> */}
                    <img src={img35} alt="" />
                    <img src={img36} alt="" />
                    <img src={img37} alt="" />
                    <img src={img38} alt="" />
                    <img src={img40} alt="" />
                    <img src={img39} alt="" />
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