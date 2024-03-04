import s1 from '../../assets/Seats_5.webp';
import s2 from '../../assets/Seat_3.webp';
import s3 from '../../assets/Seat_6.webp';
import s4 from '../../assets/Seat_7.webp';
import s5 from '../../assets/Seat_8.webp';
import s6 from '../../assets/Seat_1.webp';
import { Faq } from '../../components/Faq';

const SeatModification = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/NshGgLF/CMC-WEB-BG.jpg')] bg-cover text-white" >

            {/* Banner */}
            <div className="bg-[url('https://th.bing.com/th/id/R.c676fc057467fc822a6b18c06e0f5048?rik=UAp8PRAp0407GA&riu=http%3a%2f%2f3.bp.blogspot.com%2f_3Nq7CKYaRdQ%2fS8sWBuGPhFI%2fAAAAAAAANEw%2fuoSspVEI--E%2fs1600%2fporsche-techart-black-edition-panamera-5.jpg&ehk=TbhVNRZVwiAamSpQ3zQIKeI2w0Wek7CQhYapIp%2bIGRk%3d&risl=&pid=ImgRaw&r=0')] h-72 flex justify-center items-center text-white bg-fixed bg-cover">
                <h3 className='text-4xl font-bold'>Seat Modification</h3>
            </div>

            {/* Main Content */}
            <div className="px-5 md:px-10">
                <h3 className='text-3xl font-semibold'>Seat Modification</h3>
                <div className="mt-10 opacity-80 space-y-4 text-sm">
                    <p>Welcome to CMC, where luxury and comfort are redefined to meet the most discerning tastes. Our expertise lies in transforming the interior of your Mercedes-Benz or other top-tier brands into an oasis of sophistication and relaxation. Discover how we can elevate your driving experience with our premium seat modification services:</p>

                    <p> <span className='font-semibold'>VIP Seats with Massage System (8 Airbags):</span> Experience the epitome of comfort with our VIP seats, meticulously crafted to provide you with the utmost relaxation during your journeys. Our massage system, featuring 8 airbags, is designed to target key pressure points, easing tension and promoting overall well-being. Let the stress of the road melt away as you indulge in a therapeutic massage while driving or sitting in your vehicle.</p>

                    <p> <span className='font-semibold'>Ventilation System:</span> Stay cool and refreshed, even on the hottest days, with our advanced ventilation system. Say goodbye to uncomfortable, sweaty drives and hello to a climate-controlled paradise. Our ventilation system ensures optimal airflow, enhancing your driving comfort and ensuring you arrive at your destination feeling refreshed and invigorated.</p>

                    <p> <span className='font-semibold'>Hot and Cold System:</span> Tailor your seating experience to your exact preferences with our hot and cold system. Whether you desire a warm, cozy embrace on a chilly morning or a refreshing coolness on a scorching day, our customizable climate control system ensures you’re always in control of your comfort.</p>

                    <p> <span className='font-semibold'>Nappa Leather Upgrade:</span> Immerse yourself in opulence with our Nappa leather upgrades. Choose from a range of exquisite leather options, each handpicked for its premium quality and luxurious feel. Our expert craftsmen skillfully transform your seats, enveloping you in the softest, most sumptuous leather, elevating your driving experience to a new level of sophistication.</p>

                    <p> <span className='font-semibold'>Automatic Backrest, Headrest, and Footrest:</span> Enjoy the convenience of effortless adjustment with our automatic backrest, headrest, and footrest features. Tailor your seating position with the push of a button, allowing you to find the perfect angle for relaxation, comfort, and ergonomic support. Whether you’re on a long journey or simply taking a break, your seat adjusts to your preferences instantly.</p>
                </div>

                {/* Images */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:ml-5 my-10">
                    <img className=' rounded hover:scale-105 transition-all' src={s1} alt="" />
                    <img className=' rounded hover:scale-105 transition-all' src={s2} alt="" />
                    <img className=' rounded hover:scale-105 transition-all' src={s3} alt="" />
                    <img className=' rounded hover:scale-105 transition-all' src={s4} alt="" />
                    <img className=' rounded hover:scale-105 transition-all' src={s5} alt="" />
                    <img className=' rounded hover:scale-105 transition-all' src={s6} alt="" />
                </div>

                <div className=" opacity-80 space-y-4 text-sm">
                    <p>At CMC, we understand that the interior of your vehicle is a reflection of your taste and style. Our seat modification services are designed to cater to the most discerning automotive enthusiasts, ensuring that every moment you spend inside your vehicle is a testament to luxury and comfort.</p>

                    <p>Beyond our exceptional craftsmanship, CMC Auto Mobile is dedicated to providing unparalleled customer service and satisfaction. We believe in building lasting relationships with our clients based on trust, reliability, and a shared passion for automotive excellence.</p>
                </div>
                <div className="mt-20 mx-5 md:mx-10">
                    <Faq title1={" Expert Craftsmanship"} des1={"Our team of highly skilled upholsterers has years of experience in the industry. We take pride in our meticulous attention to detail and commitment to delivering exceptional results."} title2={"  Customization Options"} des2={"We understand that every client has unique preferences and requirements. That’s why we offer a wide range of customization options, including fabric selection, color schemes, patterns, stitching styles, and additional features. Our goal is to create a tailored interior that reflects your personal style and meets your specific needs"} title3={"  Premium Materials"} des3={"We source only the finest materials for our upholstery projects. From luxurious fabrics to durable and easy-to-clean options, we ensure that your van’s interior is not only visually stunning but also built to withstand the demands of your lifestyle"} title4={"  Timely Delivery"} des4={"We understand the excitement of transforming your van, and we strive to complete projects within the agreed-upon timeline. Our efficient processes and dedicated team enable us to deliver on time without compromising on quality"} />
                </div>
            </div>
        </div>
    );
};

export default SeatModification;