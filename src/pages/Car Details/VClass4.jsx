import img1 from '../../assets/Car details/2/VIP4 (1).jpg';
import img2 from '../../assets/Car details/2/VIP4 (2).jpg';
import img3 from '../../assets/Car details/2/VIP4 (3).jpg';
import img4 from '../../assets/Car details/2/VIP4 (4).jpg';
import DataCard from '../../components/DataCard';
import imgX1 from '../../assets/Car-x/v4/Attention to Detail.jpg';
import imgX3 from '../../assets/Car-x/v4/Luxurious Comfort.jpg';
import imgX7 from '../../assets/Car-x/v4/Variety of Options.jpg';
import imgX5 from '../../assets/Car-x/v4/Personalization Excellence.jpg';
import CarPhoto from '../../components/CarPhoto';
import car1 from '../../assets/Car-x/v4/g/WhatsApp Image 2023-12-30 at 19.13.42_af6acbb5.jpg';
import car2 from '../../assets/Car-x/v4/g/WhatsApp Image 2023-12-30 at 19.13.43_104a5ebe.jpg';
import car3 from '../../assets/Car-x/v4/g/WhatsApp Image 2023-12-30 at 19.13.43_34fcf43d.jpg';
import car4 from '../../assets/Car-x/v4/g/WhatsApp Image 2023-12-30 at 19.13.43_64dc3c0a.jpg';
import car5 from '../../assets/Car-x/v4/g/WhatsApp Image 2023-12-30 at 19.13.44_290b4637.jpg';
import car6 from '../../assets/Car-x/v4/g/WhatsApp Image 2023-12-30 at 19.13.44_f6f902a2.jpg';
import Wp from '../../components/Wp';

const VClass4 = () => {
    return (
        <div className="mt-20 " data-aos="fade-left">
            <Wp />
            <div className="mx-5 md:mx-10">
                <h1 className="text-3xl font-bold">Transform Your V Class 4 Seats with Our Exclusive Car Decoration Services</h1>
                <p className="opacity-80 mt-4">Discover the perfect blend of comfort and style with our V Class 4 Seats car decoration service. Whether you use your V Class for business or leisure, our team of skilled decorators is dedicated to enhancing your driving environment. From refined leather finishes to personalized accessories, we offer a wide range of options to suit your preferences.</p>
            </div>
            <div className="mt-10">
                <div className="carousel w-full">
                    <div id="item1" className="carousel-item w-full">
                        <img src={img1} className='w-full' />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img src={img2} className="w-full" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img src={img3} className="w-full" />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <img src={img4} className="w-full" />
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                </div>
            </div>
            <div className="mx-5 mt-20 md:mx-10">
                <h1 className="text-3xl font-bold mb-5">Why Choose Our V Class 4 Seats Car Decor Service?</h1>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <DataCard img={imgX5} title={'Personalization '} description={'  Seats with our car decoration service that excels in personalization. Our expert designers ensure that your vehicle reflects your individual taste and lifestyle with tailor-made interior decor'} />

                    <DataCard img={imgX1} title={'Attention to Detail'} description={'  Explore a wide range of customization options to suit your preferences. From refined leather finishes to personalized accessories, we  offer a variety of choices to create a unique and eye-catching V Class 4 Seats interior.'} />

                    <DataCard img={imgX7} title={'Variety of Options'} description={'  Every stitch, every accent – we pay attention to the smallest details. Our commitment to perfection ensures a flawlessly customized interior, from premium leather seat covers to woodgrain accents.'} />

                    <DataCard img={imgX3} title={'Luxurious Comfort'} description={'  Indulge in the perfect blend of comfort and style. Our V Class 4 Seats car decoration prioritizes luxurious comfort with comfortable and durable seat covers, ensuring a premium driving experience.'} />
                </div>
            </div>
            <div className="mx-5 md:mx-10 mt-20">
                <CarPhoto p1={car1} p2={car2} p3={car3} p4={car4} p5={car5} p6={car6} />
            </div>
        </div>
    );
};

export default VClass4