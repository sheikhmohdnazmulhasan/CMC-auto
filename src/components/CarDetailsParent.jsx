import { DetailC } from "./DetailsC";
import { Faq } from "./Faq";
import Wp from "./Wp";

// eslint-disable-next-line react/prop-types
const CarDetailsParent = ({ img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31, img32, img33, img34, img35, img36, img37, img38, img39, img40, title, des, li1, li2, li3, li4, vTitle, vDes, bTitle, bDes1, bDes2, g1, g2, g3, g4, g5, g6, g7, g8 }) => {
    return (
        <div className="bg-[url('https://i.ibb.co/NshGgLF/CMC-WEB-BG.jpg')] bg-cover text-white px-5 md:px-0" >
            <Wp />

            {/* Banner */}
            <div className="bg-[url('https://i.ibb.co/XY9r2Th/erik-mclean-sepnkx-MZSzo-unsplash.jpg')] h-72 flex justify-center items-center text-white bg-fixed bg-cover">
                <div className="bg-black h-full w-full bg-opacity-75 text-center flex items-center justify-center">
                    <h3 className='text-3xl md:text-4xl font-bold'>{title}</h3>
                </div>
            </div>

            {/* section 2 */}
            <div className="md:flex items-center space-y-5 md:space-y-0 mt-8 gap-7 w-full justify-between md:px-20">
                <div className="flex-1">
                    <h3 className="text-xl">{des}</h3>
                </div>
                <div className="flex-1 gap-6 grid grid-cols-1 md:grid-cols-2">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                </div>
            </div>

            {/* section 3 */}
            <div className="md:px-20 mb-20">
                <h1 className="text-3xl md:text-4xl mt-10 font-semibold mb-5">Services We Offer</h1>
                <li>{li1}</li>
                <li>{li2}</li>
                <li>{li3}</li>
                <li>{li4}</li>
            </div>

            {/* section 3 */}
            <div className="md:px-20 mb-20">
                <h1 className="text-3xl md:text-4xl mt-10 font-semibold mb-5">{vTitle}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <p>{vDes}</p>
                    <p></p>
                </div>
            </div>

            {/* section 4 */}
            <div className="md:px-20 mb-20">
                <h1 className="text-3xl md:text-4xl mt-10 font-semibold mb-5">{vTitle}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <p>{vDes}</p>
                    <p></p>
                </div>
            </div>
            <div className="mt-20 grid grid-cols-1 md:grid-cols-6 gap-4 md:px-20 pb-10">

                {/* <img src={img7} alt="" />
                <img src={img8} alt="" /> */}
                <img src={img9} alt="" />
                <img src={img10} alt="" />
                <img src={img11} alt="" />
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
                <img src={img30} alt="" />
                <img src={img31} alt="" />
                <img src={img32} alt="" />
                <img src={img33} alt="" />
                <img src={img34} alt="" />
                <img src={img35} alt="" />
                <img src={img36} alt="" />
                <img src={img37} alt="" />
                <img src={img38} alt="" />
                <img src={img39} alt="" />
                <img src={img1} alt="" />
                <img src={img2} alt="" />
            </div>
        </div>
    );
};

export default CarDetailsParent;