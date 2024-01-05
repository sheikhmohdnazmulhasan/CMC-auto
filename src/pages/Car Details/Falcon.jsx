import img1 from '../../assets/Car details/3/Falcon6 (11).jpg';
import img2 from '../../assets/Car details/3/Falcon6 (5).jpg';
import img3 from '../../assets/Car details/3/Falcon6 (8).jpg';
import img4 from '../../assets/Car details/3/Falcon6 (9).jpg';
import DataCard from '../../components/DataCard';
import imgX1 from '../../assets/Car-x/falcon/Personalization Excellence.jpg';
import imgX2 from '../../assets/Car-x/falcon/Precision Craftsmanship.jpg';
import imgX3 from '../../assets/Car-x/falcon/Customization Excellence.jpg';
import imgX4 from '../../assets/Car-x/falcon/High-Tech Interior.jpg';
import CarPhoto from '../../components/CarPhoto';
import car1 from '../../assets/Car-x/falcon/g/WhatsApp Image 2023-12-30 at 19.13.57_6b0ee08f.jpg';
import car2 from '../../assets/Car-x/falcon/g/WhatsApp Image 2023-12-30 at 19.13.59_9a48082c.jpg';
import car3 from '../../assets/Car-x/falcon/g/WhatsApp Image 2023-12-30 at 19.14.00_46f96475.jpg';
import car4 from '../../assets/Car-x/falcon/g/WhatsApp Image 2023-12-30 at 19.14.00_55772e2c.jpg';
import car5 from '../../assets/Car-x/falcon/g/WhatsApp Image 2023-12-30 at 19.14.00_7af2b281.jpg';
import car6 from '../../assets/Car-x/falcon/g/WhatsApp Image 2023-12-30 at 19.14.01_32791275.jpg';
import Wp from '../../components/Wp';

const Falcon = () => {
    return (
        <div className="mt-20" data-aos="fade-left">
            <Wp />
            <div className="mx-5 md:mx-10">
                <h1 className="text-3xl font-bold">Unleash the Power of Style with Our Falcon Car Decoration Services</h1>
                <p className="opacity-80 mt-4">Step into the extraordinary with our Falcon car decoration services. Elevate the interior of your Falcon to match its powerful performance. Our skilled decorators combine craftsmanship and innovation to create a customized interior that complements the dynamic nature of the Falcon.</p>
            </div>
            <div className="mt-10">
                <div className="carousel w-full">
                    <div id="item1" className="carousel-item w-full">
                        <img src={img1} className="w-full" />
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
                <h1 className="text-3xl font-bold mb-5">Why Choose Our Falcon Car Decor Service?</h1>
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <DataCard img={imgX1} title={'Personalization Excellence'} description={"Transform your Falcon with our dynamic car decoration service. Our expert designers infuse performance-inspired elements, ensuring your Falcon's interior complements its powerful nature with a touch of style"} />

                    <DataCard img={imgX2} title={'Precision Craftsmanship'} description={"At CMC, precision is our hallmark. Every detail is meticulously crafted to achieve a flawless finish. From cutting-edge materials to innovative design, experience the epitome of quality in every aspect of your Falcon's interior."} />

                    <DataCard img={imgX3} title={'Customization Excellence'} description={"Tailor your Falcon's interior to your preferences. Our customization options range from carbon fiber accents to sporty color schemes, allowing you to create a driving environment that resonates with your individual taste."} />

                    <DataCard img={imgX4} title={'High-Tech Interior'} description={"Immerse yourself in technology with our Falcon car decor. Enjoy the latest audio-visual systems and smart connectivity features, enhancing your driving experience with the best in modern innovation."} />
                </div>
            </div>
            <div className="mx-5 md:mx-10 mt-20">
                <CarPhoto p1={car1} p2={car2} p3={car3} p4={car4} p5={car5} p6={car6} />
            </div>
        </div>

    );
};

export default Falcon;