import img1 from '../assets/x.jpg';
import img2 from '../assets/x2.jpg';
import img3 from '../assets/new Detail page/VIP V class/g/IMG-20231214-WA0182.jpg';
import img4 from '../assets/x4.jpg';
import img5 from '../assets/x5.jpg';
import img6 from '../assets/x6.jpg';
import img7 from '../assets/new Detail page/VIP V class/g/IMG-20231214-WA0122.jpg';
import img8 from '../assets/new Detail page/VIP V class/g/IMG-20231214-WA0179.jpg';

const PhotoGallery = () => {

    return (
        <div data-aos="fade-up" className='mx-5 md:mx-10'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
                <img src={img1} className="block h-full w-full rounded-md object-cover object-center" />
                <img src={img2} className="block h-full w-full rounded-md object-cover object-center" />
                <img src={img3} className="block h-full w-full rounded-md object-cover object-center" />
                <img src={img4} className="block h-full w-full rounded-md object-cover object-center" />
                <img src={img5} className="block h-full w-full rounded-md object-cover object-center" />
                <img src={img6} className="block h-full w-full rounded-md object-cover object-center" />
                <img src={img7} className="block h-full w-full rounded-md object-cover object-center" />
                <img src={img8} className="block h-full w-full rounded-md object-cover object-center" />
            </div>
        </div>
    );
};

export default PhotoGallery;