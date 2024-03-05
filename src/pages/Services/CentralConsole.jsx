import img1 from '../../assets/xxx/center console/WhatsApp Image 2024-03-05 at 13.26.00_5da5a086.jpg';
import img2 from '../../assets/xxx/center console/WhatsApp Image 2024-03-05 at 13.26.00_9ec087ec.jpg';
import img3 from '../../assets/xxx/center console/WhatsApp Image 2024-03-05 at 13.26.01_6083b79c.jpg';

const CentralConsole = () => {
    return (
        <div>
            <div className="bg-[url('https://i.ibb.co/NshGgLF/CMC-WEB-BG.jpg')] bg-cover text-white" >

                {/* Banner */}
                <div className="bg-[url('https://electrek.co/wp-content/uploads/sites/3/2021/02/Tesla-new-center-console-hero.jpg?quality=82&strip=all')] h-72 flex justify-center items-center text-white bg-fixed bg-cover">
                    <h3 className='text-4xl font-bold'>Central Console Design</h3>
                </div>

                {/* Main Content */}
                <div className="p-5 md:p-10">
                    <h3 className='text-3xl font-semibold '>Central Console Design</h3>
                    <div className="mt-10 opacity-80 space-y-4 text-sm">
                        <p>Welcome to CMC’s, where luxury and innovation converge to create a driving experience like no other. Our team specializes in crafting central consoles that seamlessly blend functionality with style. Explore the intricacies of our central console designs:</p>

                        <p> <span className='font-semibold'>Light Control Button:</span>  Our central consoles feature an intuitive light control button, allowing you to effortlessly set the ambiance inside your vehicle. Whether you prefer soft, subtle lighting or a brighter, more vibrant atmosphere, our system puts you in control, ensuring your driving environment is just the way you like it.</p>

                        <p> <span className='font-semibold'>Music Control:</span> Take charge of your in-car audio experience with our integrated music control system. Designed for convenience and safety, it allows you to manage your playlist, adjust volume, and switch audio sources without diverting your attention from the road. Our central console keeps your music at your fingertips, enhancing your journey with harmonious sounds</p>

                        <p> <span className='font-semibold'>Unique Look:</span> Our commitment to excellence extends beyond just aesthetics – we prioritize the use of high-quality materials and cutting-edge technology to ensure long-lasting durability and functionality. When you entrust your vehicle to CMC Auto Mobile, you can rest assured that it will receive the utmost care and precision.</p>

                        <p> <span className='font-semibold'>Cup Holder:</span> Stay refreshed and hydrated during your travels with our thoughtfully designed cup holder. Offering both functionality and elegance, it securely cradles your beverages while seamlessly integrating into the central console’s overall design, preserving the vehicle’s aesthetic appeal.</p>

                        <p> <span className='font-semibold'>Side Table:</span> Experience the luxury of additional space with our central console’s integrated side table. It serves as a convenient spot to place your smartphone, snacks, or a compact laptop, providing versatility and practicality for your on-road needs. Our side table is the perfect solution for those moments when extra space is a necessity.</p>
                    </div>

                    {/* Images */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:ml-5 my-10">
                        <img className=' rounded hover:scale-105 transition-all' src={img1} alt="" />
                        <img className=' rounded hover:scale-105 transition-all' src={img2} alt="" />
                        <img className=' rounded hover:scale-105 transition-all' src={img3} alt="" />
                    </div>

                    <div className=" opacity-80 space-y-4 text-sm">
                        <p>At CMC, we understand that the central console is the focal point of your vehicle’s interior—a place where form meets function. Our central console designs are meticulously crafted to harmonize seamlessly with your vehicle’s existing features, adding an exclusive touch of luxury and customization to enhance your driving experience.</p>

                        <p>From classic models to the latest luxury vehicles, our skilled technicians have the experience and expertise to handle a wide range of interior customization projects. Whether you drive a sleek sports car or a spacious SUV, we tailor our services to meet your specific needs and preferences.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CentralConsole;