import s1 from '../../assets/Seats_5.webp';
import s2 from '../../assets/Seat_3.webp';
import s3 from '../../assets/Seat_6.webp';
import s4 from '../../assets/Seat_7.webp';
import s5 from '../../assets/Seat_8.webp';
import s6 from '../../assets/Seat_1.webp';

const SeatModification = () => {
    return (
        <div className="">

            {/* Banner */}
            <div className="bg-[url('https://th.bing.com/th/id/R.c676fc057467fc822a6b18c06e0f5048?rik=UAp8PRAp0407GA&riu=http%3a%2f%2f3.bp.blogspot.com%2f_3Nq7CKYaRdQ%2fS8sWBuGPhFI%2fAAAAAAAANEw%2fuoSspVEI--E%2fs1600%2fporsche-techart-black-edition-panamera-5.jpg&ehk=TbhVNRZVwiAamSpQ3zQIKeI2w0Wek7CQhYapIp%2bIGRk%3d&risl=&pid=ImgRaw&r=0')] h-72 flex justify-center items-center text-white bg-fixed bg-cover">
                <h3 className='text-4xl font-bold'>Seat Modification</h3>
            </div>

            {/* Main Content */}
            <div className="m-10">
                <h3 className='text-3xl font-semibold text-slate-500'>Seat Modification</h3>
                <div className="mt-10 opacity-65 space-y-4 text-sm">
                    <p>Welcome to CMC, where luxury and comfort are redefined to meet the most discerning tastes. Our expertise lies in transforming the interior of your Mercedes-Benz or other top-tier brands into an oasis of sophistication and relaxation. Discover how we can elevate your driving experience with our premium seat modification services:</p>

                    <p> <span className='font-semibold'>VIP Seats with Massage System (8 Airbags):</span> Experience the epitome of comfort with our VIP seats, meticulously crafted to provide you with the utmost relaxation during your journeys. Our massage system, featuring 8 airbags, is designed to target key pressure points, easing tension and promoting overall well-being. Let the stress of the road melt away as you indulge in a therapeutic massage while driving or sitting in your vehicle.</p>

                    <p> <span className='font-semibold'>Ventilation System:</span> Stay cool and refreshed, even on the hottest days, with our advanced ventilation system. Say goodbye to uncomfortable, sweaty drives and hello to a climate-controlled paradise. Our ventilation system ensures optimal airflow, enhancing your driving comfort and ensuring you arrive at your destination feeling refreshed and invigorated.</p>

                    <p> <span className='font-semibold'>Hot and Cold System:</span> Tailor your seating experience to your exact preferences with our hot and cold system. Whether you desire a warm, cozy embrace on a chilly morning or a refreshing coolness on a scorching day, our customizable climate control system ensures you’re always in control of your comfort.</p>

                    <p> <span className='font-semibold'>Nappa Leather Upgrade:</span> Immerse yourself in opulence with our Nappa leather upgrades. Choose from a range of exquisite leather options, each handpicked for its premium quality and luxurious feel. Our expert craftsmen skillfully transform your seats, enveloping you in the softest, most sumptuous leather, elevating your driving experience to a new level of sophistication.</p>

                    <p> <span className='font-semibold'>Automatic Backrest, Headrest, and Footrest:</span> Enjoy the convenience of effortless adjustment with our automatic backrest, headrest, and footrest features. Tailor your seating position with the push of a button, allowing you to find the perfect angle for relaxation, comfort, and ergonomic support. Whether you’re on a long journey or simply taking a break, your seat adjusts to your preferences instantly.</p>
                </div>

                {/* Images */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:ml-5 my-10">
                    <img className='md:w-[80%] rounded hover:scale-105 transition-all' src={s1} alt="" />
                    <img className='md:w-[80%] rounded hover:scale-105 transition-all' src={s2} alt="" />
                    <img className='md:w-[80%] rounded hover:scale-105 transition-all' src={s3} alt="" />
                    <img className='md:w-[80%] rounded hover:scale-105 transition-all' src={s4} alt="" />
                    <img className='md:w-[80%] rounded hover:scale-105 transition-all' src={s5} alt="" />
                    <img className='md:w-[80%] rounded hover:scale-105 transition-all' src={s6} alt="" />
                </div>

                <div className=" opacity-65 space-y-4 text-sm">
                    <p>At CMC, we understand that the interior of your vehicle is a reflection of your taste and style. Our seat modification services are designed to cater to the most discerning automotive enthusiasts, ensuring that every moment you spend inside your vehicle is a testament to luxury and comfort.</p>

                    <p>Experience the pinnacle of seat modification with Scuderia Motor Design. Contact us today to schedule a consultation and embark on a journey to transform your vehicle’s interior into a haven of luxury and relaxation. Your destination is comfort, and it starts here with us.</p>
                </div>

                {/* Accordion */}
                <div className="w-full my-16 space-y-4">
                    <h3 className='text-2xl'>Why Choose CMC?</h3>
                    <div className="collapse collapse-arrow bg-base-200 opacity-80">
                        <input type="radio" name="my-accordion-2" checked="checked" />
                        <div className="collapse-title font-medium">
                            Custom Seat Design and Installation
                        </div>
                        <div className="collapse-content">
                            <p>Our team of experienced professionals will work closely with you to create custom seat designs that suit your specific preferences and requirements. From ergonomic designs to luxurious materials, we ensure that every seat is tailored to perfection. We handle the entire installation process with precision and expertise, guaranteeing a seamless integration into your vehicle.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200 opacity-80">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-medium">
                            Custom Seat Design and Installation
                        </div>
                        <div className="collapse-content">
                            <p>Our team of experienced professionals will work closely with you to create custom seat designs that suit your specific preferences and requirements. From ergonomic designs to luxurious materials, we ensure that every seat is tailored to perfection. We handle the entire installation process with precision and expertise, guaranteeing a seamless integration into your vehicle.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200 opacity-80">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-medium">
                            Seat Heating and Cooling Solutions
                        </div>
                        <div className="collapse-content">
                            <p>Experience ultimate comfort regardless of the weather with our seat heating and cooling solutions. We integrate advanced temperature control systems into your seats, allowing you to adjust the climate according to your preference. Say goodbye to uncomfortable seats during extreme weather conditions and enjoy a pleasant journey all year round.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200 opacity-80">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-medium">
                            Lumbar Support and Ergonomic Enhancements
                        </div>
                        <div className="collapse-content">
                            <p>If you suffer from back pain or discomfort during long drives, our lumbar support and ergonomic enhancements are the perfect solution. We utilize cutting-edge technology and design principles to provide optimal support to your back, reducing strain and promoting better posture. Enjoy a pain-free driving experience and arrive at your destination feeling refreshed and rejuvenated.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SeatModification;