import img1 from '../../assets/Car details/4/Sprinter (1).jpeg';
import img2 from '../../assets/Car details/4/Sprinter (2).jpeg';
import img3 from '../../assets/Car details/4/Sprinter (3).jpeg';
import img4 from '../../assets/Car details/4/Sprinter (4).jpeg';
import DataCard from '../../components/DataCard';
import imgX1 from '../../assets/Car-x/spriner/Comfort Redefined.jpg';
import imgX2 from '../../assets/Car-x/spriner/Innovative Technology.jpg';
import imgX3 from '../../assets/Car-x/spriner/pexels-andrea-piacquadio-3764000.jpg';
import imgX4 from '../../assets/Car-x/spriner/Tailored Elegance.jpg';
import CarPhoto from '../../components/CarPhoto';
import car1 from '../../assets/Car-x/spriner/g/1.jpg';
import car2 from '../../assets/Car-x/spriner/g/2.jpg';
import car3 from '../../assets/Car-x/spriner/g/3.jpg';
import car4 from '../../assets/Car-x/spriner/g/5.jpg';
import car5 from '../../assets/Car-x/spriner/g/4.jpg';
import car6 from '../../assets/Car-x/spriner/g/6.jpg';

const Sprinter = () => {
    return (
        <div data-aos="fade-left">
            <div className="mt-20 ">
                <div className="mx-5 md:mx-10">
                    <h1 className="text-3xl font-bold">Elevate Your Journey with Our Exclusive Sprinter Car Interior Decor Service</h1>
                    <p className="opacity-80 mt-4">Are you ready to transform your Sprinter into a luxurious and personalized haven on wheels? At CMC, we specialize in crafting bespoke car interiors that seamlessly blend style, comfort, and functionality. Our Sprinter car decor service is tailored to elevate your driving experience, whether you're a business owner looking to enhance your corporate fleet or an individual seeking a touch of sophistication. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.</p>
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
                    <h1 className="text-3xl font-bold mb-5">Why Choose Our Sprinter Car Decor Service?</h1>
                    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <DataCard img={imgX4} title={'Tailored Elegance: '} description={" Our expert designers understand that each client is unique. We work closely with you to tailor the interior decor to your specific preferences, ensuring a touch of elegance that reflects your style."} />

                        <DataCard img={imgX1} title={'Premium Materials'} description={"We source and use only the finest materials, ensuring durability, comfort, and a luxurious feel. From high-quality leather upholstery to stylish trim options, every detail is meticulously selected for a premium finish."} />

                        <DataCard img={imgX3} title={'Comfort Redefined'} description={" Experience the ultimate in comfort with ergonomically designed seating and carefully curated interior layouts. Whether it's a spacious executive Sprinter or a cozy camper van, our designs prioritize your comfort during every journey."} />

                        <DataCard img={imgX2} title={'Innovative Technology:'} description={"Stay connected and entertained on the road with our integration of cutting-edge technology. From advanced audio-visual systems to smart connectivity features, we bring the latest innovations to your Sprinter's interior."} />
                    </div>
                </div>
            </div>
            <div className="mx-5 md:mx-10 mt-20">
                <CarPhoto p1={car1} p2={car2} p3={car3} p4={car4} p5={car5} p6={car6} />
            </div>
        </div>
    );
};

export default Sprinter;