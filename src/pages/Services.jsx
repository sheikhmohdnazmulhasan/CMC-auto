import ServiceComp from '../components/ServiceComp';
import img1 from '../assets/service2/1.jpg';
import img2 from '../assets/service2/2.jpg';
import img3 from '../assets/service2/3.jpg';
import img4 from '../assets/service2/4.jpg';
import { Faq } from '../components/Faq';
import Wp from '../components/Wp';

const Services = () => {

    return (
        <div className='bg-[url("https://i.ibb.co/6wQxFYJ/Whats-App-Image-2024-01-06-at-20-19-27-0dbbe3b5-1.jpg")] bg-cover text-white' data-aos="fade-left">
            <Wp />

            {/* Banner */}
            <div className="bg-[url('https://cdn.pixabay.com/photo/2017/03/20/04/57/truck-2158284_640.png')] h-72 flex justify-center items-center text-white bg-fixed bg-cover">
                <h3 className='text-4xl font-bold'>Our Services</h3>
            </div>
            
            <div className="mx-5 md:mx-10 mt-20">
                <h1 className='text-3xl font-bold'>AUTOMOBILE OUTFITTING</h1>
                <p className='opacity-70 mt-5'>
                    At CMC Auto Mobile, we specialize in enhancing and rejuvenating the interiors of luxury automobiles, ensuring that every aspect of your driving experience exudes sophistication and style. Whether you're looking to refresh worn upholstery, upgrade your entertainment system, or add custom accents, we have the expertise to bring your vision to life.
                </p>
            </div>
            <div className="mx-5 md:mx-10 mt-20" data-aos="fade-up">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ServiceComp text={'Modifying the seats to provide more comfort or support, or to fit the customer’s specific body shape or size.'} title={"VEHICLES Seat modifications"} img={img1} link={'/seat-modification'} />

                    <ServiceComp text={'Creating unique upholstery designs that perfectly match the customer’s vision, using high-quality materials such as leather.'} title={"Car Upholstery Service"} img={img2} link={'/auto-upholstery'} />

                    <ServiceComp text={'Installing custom audio and entertainment systems that integrate seamlessly with the car’s interior design and provide '} title={"Entertainment systems"} img={img3} link={'/entertainment'} />

                    <ServiceComp text={'Designing and building custom dashboards and consoles that provide a unique look and feel and incorporate advanced '} title={"Central console design"} img={img4} link={'/central-console-design'} />
                </div>
            </div>
            <div className="mt-20 mx-5 md:mx-10">
                <Faq title1={" Expert Craftsmanship"} des1={"Our team of highly skilled upholsterers has years of experience in the industry. We take pride in our meticulous attention to detail and commitment to delivering exceptional results."} title2={"  Customization Options"} des2={"We understand that every client has unique preferences and requirements. That’s why we offer a wide range of customization options, including fabric selection, color schemes, patterns, stitching styles, and additional features. Our goal is to create a tailored interior that reflects your personal style and meets your specific needs"} title3={"  Premium Materials"} des3={"We source only the finest materials for our upholstery projects. From luxurious fabrics to durable and easy-to-clean options, we ensure that your van’s interior is not only visually stunning but also built to withstand the demands of your lifestyle"} title4={"  Timely Delivery"} des4={"We understand the excitement of transforming your van, and we strive to complete projects within the agreed-upon timeline. Our efficient processes and dedicated team enable us to deliver on time without compromising on quality"} />
            </div>
        </div>
    );
};

export default Services;