import img1 from '../../assets/Central-Console-Design-01.webp';
import img2 from '../../assets/Central-Console-Design-02.webp';
import img3 from '../../assets/Central-Console-Design-03.webp';
import img4 from '../../assets/Central-Console-Design-04.webp';
import img5 from '../../assets/Central-Console-Design-07.webp';
import img6 from '../../assets/IMG_5724.webp';

const CentralConsole = () => {
    return (
        <div>
            <div className="">

                {/* Banner */}
                <div className="bg-[url('https://i.pinimg.com/736x/5d/9a/b3/5d9ab3486d4b4d9d2f4df9c1c228448d.jpg')] h-72 flex justify-center items-center text-white bg-fixed bg-cover">
                    <h3 className='text-4xl font-bold'>Central Console Design</h3>
                </div>

                {/* Main Content */}
                <div className="m-10">
                    <h3 className='text-3xl font-semibold text-slate-500'>Central Console Design</h3>
                    <div className="mt-10 opacity-65 space-y-4 text-sm">
                        <p>Welcome to CMC’s, where luxury and innovation converge to create a driving experience like no other. Our team specializes in crafting central consoles that seamlessly blend functionality with style. Explore the intricacies of our central console designs:</p>

                        <p> <span className='font-semibold'>Light Control Button:</span>  Our central consoles feature an intuitive light control button, allowing you to effortlessly set the ambiance inside your vehicle. Whether you prefer soft, subtle lighting or a brighter, more vibrant atmosphere, our system puts you in control, ensuring your driving environment is just the way you like it.</p>

                        <p> <span className='font-semibold'>Music Control:</span> Take charge of your in-car audio experience with our integrated music control system. Designed for convenience and safety, it allows you to manage your playlist, adjust volume, and switch audio sources without diverting your attention from the road. Our central console keeps your music at your fingertips, enhancing your journey with harmonious sounds</p>

                        <p> <span className='font-semibold'>Unique Look:</span>  Scuderia Motor Design takes pride in creating central consoles that are far from ordinary. Each design is meticulously crafted to harmonize with the interior aesthetics of your Mercedes-Benz or other top-tier brand vehicle. Whether your preference leans towards modern minimalism or opulent extravagance, our central console becomes a distinctive piece, reflecting your individual taste.</p>

                        <p> <span className='font-semibold'>Cup Holder:</span> Stay refreshed and hydrated during your travels with our thoughtfully designed cup holder. Offering both functionality and elegance, it securely cradles your beverages while seamlessly integrating into the central console’s overall design, preserving the vehicle’s aesthetic appeal.</p>

                        <p> <span className='font-semibold'>Side Table:</span> Experience the luxury of additional space with our central console’s integrated side table. It serves as a convenient spot to place your smartphone, snacks, or a compact laptop, providing versatility and practicality for your on-road needs. Our side table is the perfect solution for those moments when extra space is a necessity.</p>
                    </div>

                    {/* Images */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:ml-5 my-10">
                        <img className='md:w-[80%] rounded hover:scale-105 transition-all' src={img1} alt="" />
                        <img className='md:w-[80%] rounded hover:scale-105 transition-all' src={img2} alt="" />
                        <img className='md:w-[80%] rounded hover:scale-105 transition-all' src={img3} alt="" />
                        <img className='md:w-[80%] rounded hover:scale-105 transition-all' src={img4} alt="" />
                        <img className='md:w-[80%] rounded hover:scale-105 transition-all' src={img5} alt="" />
                        <img className='md:w-[80%] rounded hover:scale-105 transition-all' src={img6} alt="" />
                    </div>

                    <div className=" opacity-65 space-y-4 text-sm">
                        <p>At CMC, we understand that the central console is the focal point of your vehicle’s interior—a place where form meets function. Our central console designs are meticulously crafted to harmonize seamlessly with your vehicle’s existing features, adding an exclusive touch of luxury and customization to enhance your driving experience.</p>

                        <p>Embark on a journey into the future of central console design with Scuderia Motor Design. Contact us today to schedule a consultation and discover how we can transform your vehicle’s interior into a realm of innovation, style, and practicality. Your path to luxury and customization starts here with us.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CentralConsole;