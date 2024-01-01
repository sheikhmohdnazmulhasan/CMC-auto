import img1 from '../assets/x.jpg';
import img2 from '../assets/x2.jpg';
import img3 from '../assets/x3.jpg';
import img4 from '../assets/x4.jpg';
import img5 from '../assets/x5.jpg';
import img6 from '../assets/x6.jpg';

const PhotoGallery = () => {

    return (
        <div data-aos="fade-up">
            <div className="container mx-auto px-3 md:px-10 py-2 pt-5">
                <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={img1} />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={img2}/>
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={img3} />
                        </div>
                    </div>
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={img4} />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={img5} />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={img6} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoGallery;