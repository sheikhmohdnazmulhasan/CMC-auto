import fabric from '../../assets/Fabric.webp';
import leather from '../../assets/Leather.webp';
import croCstorage from '../../assets/CroCstorage.webp';
import { Faq } from '../../components/Faq';

const CarUpholstery = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/NshGgLF/CMC-WEB-BG.jpg')] bg-cover text-white" >
            {/* Banner */}
            <div className="bg-[url('https://fantasticservicesgroup.com.au/blog/wp-content/uploads/2021/05/how-to-clean-car-upholstery_header.jpg')] h-72 flex justify-center items-center text-white bg-fixed bg-cover">
                <h3 className='text-4xl font-bold'>Car Upholstery Service</h3>
            </div>

            {/* Main Content */}
            <div className="px-5 md:px-10">
                <h3 className='text-3xl font-semibold mt-4'>Auto Upholstery Specialist </h3>
                <div className="mt-10 opacity-80 space-y-4 text-sm">
                    <p>Welcome to CMC – Your Premier Auto Upholstery Specialists</p>

                    <p>At CMC, we’re more than just experts in car upholstery; we are passionate craftsmen dedicated to elevating your driving experience. Our key services encompass a world of luxury, comfort, and style, all centered around your vehicle’s interior. Explore how our Auto Upholstery Specialists can transform your ride:</p>

                    <p> <span className='font-semibold'>Car Upholstery Services:</span> Transform your vehicle’s interior with our bespoke Car Upholstery Services. From leather seats to fabric seat repairs and custom design creations, we bring your dream car interior to life. As Auto Upholstery Specialists, we’re your trusted partner in enhancing your car’s interior. Our skills and craftsmanship extend beyond ordinary upholstery to redefine your driving environment. Indulge in the opulence of Leather Upholstery. Our Custom Design Making expertise ensures that your leather seats are as unique as you are, combining luxury with personalized style. Rediscover the beauty of your vehicle’s interior with our Interior Restoration services. We breathe new life into worn-out interiors, restoring them to their former glory. Your vehicle deserves more than factory-standard. Our Custom Car Interior solutions let you tailor every detail to match your vision, from steering covers to dashboard leather.</p>
                </div>
            </div>

            {/* Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:ml-5 my-10 px-10 w-full">
                <img className=' rounded hover:scale-105 transition-all' src={leather} alt="" />
                <img className=' rounded hover:scale-105 transition-all' src={fabric} alt="" />
                <img className=' rounded hover:scale-105 transition-all' src={croCstorage} alt="" />
            </div>
            <div className="mx-6 md:mx-10">
                <h3 className='text-2xl font-semibold '>Our Comprehensive Services Include: </h3>
                <ul className='list-disc mx-10 opacity-80 space-y-4 text-sm mt-5'>
                    <li>
                        <span className='font-semibold'>Leather Seats (Custom Design Making): </span> Crafted with precision, our custom-designed leather seats are the epitome of luxury and style.
                    </li>
                    <li>
                        <span className='font-semibold'>Fabric Seats Repair & Custom Design Making: </span> Whether you prefer fabric or want to restore existing seats, we have the skills to make them look and feel perfect.
                    </li>
                    <li>
                        <span className='font-semibold'>Conversions From Fabric To Leather Interior: </span>  Upgrade your car’s interior from fabric to luxurious leather, enhancing both aesthetics and comfort.
                    </li>
                    <li>
                        <span className='font-semibold'>Sun Roof Liner: </span> Experience an elevated view with a custom sunroof liner that adds elegance and sophistication to your vehicle.
                    </li>
                    <li>
                        <span className='font-semibold'>Automatic Window Curtains: </span>  Enjoy privacy and a touch of refinement with our window curtain installations, designed to match your unique style
                    </li>
                    <li>
                        <span className='font-semibold'>Steering Covers (Custom Designs):  </span>  Personalize your driving experience with custom-designed steering covers that reflect your personality.
                    </li>
                    <li>
                        <span className='font-semibold'>Dashboard Leather:</span>   Elevate your dashboard’s look and feel with our premium dashboard leather installations.
                    </li>
                    <li>
                        <span className='font-semibold'>Door Leather:</span> Make a lasting impression with meticulously crafted leather door panels that exude sophistication.
                    </li>
                    <li>
                        <span className='font-semibold'>Floor Carpet:</span> Our expertly installed floor carpets provide both protection and a touch of luxury to your vehicle’s interior.
                    </li>
                    <li>
                        <span className='font-semibold'>Starliner:</span>  Add a touch of elegance to your vehicle’s roof with our starliner installations that create a celestial atmosphere inside
                    </li>
                    <li>
                        <span className='font-semibold'>Carbon Fiber:</span> For a modern and sporty touch, opt for carbon fiber accents that enhance both aesthetics and performance.
                    </li>
                    <p>At CMC Auto Mobile Upholstery Service, we specialize in providing top-notch upholstery services for all types of vehicles, including cars, trucks, vans, and more. Whether you're looking to upgrade your interior, repair damaged upholstery, or customize your vehicle to reflect your personal style, we have the expertise and resources to bring your vision to life.</p>
                </ul>

            </div>
            {/* Accordion */}
            <div className="mt-20 mx-5 md:mx-10">
                <Faq title1={" Expert Craftsmanship"} des1={"Our team of highly skilled upholsterers has years of experience in the industry. We take pride in our meticulous attention to detail and commitment to delivering exceptional results."} title2={"  Customization Options"} des2={"We understand that every client has unique preferences and requirements. That’s why we offer a wide range of customization options, including fabric selection, color schemes, patterns, stitching styles, and additional features. Our goal is to create a tailored interior that reflects your personal style and meets your specific needs"} title3={"  Premium Materials"} des3={"We source only the finest materials for our upholstery projects. From luxurious fabrics to durable and easy-to-clean options, we ensure that your van’s interior is not only visually stunning but also built to withstand the demands of your lifestyle"} title4={"  Timely Delivery"} des4={"We understand the excitement of transforming your van, and we strive to complete projects within the agreed-upon timeline. Our efficient processes and dedicated team enable us to deliver on time without compromising on quality"} />
            </div>
        </div>
    );
};

export default CarUpholstery;