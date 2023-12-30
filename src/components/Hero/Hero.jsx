import './Hero.css'
import heroVideo from '../../assets/heroVideo.mp4';

const Hero = () => {
    return (
        <div>

            <section className="fixed z-[-1] top-0 left-0 w-full h-screen flex flex-col items-center justify-center py-0 px-3">
                <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden bg-fixed">
                    <video className="min-w-full min-h-full  object-cover absolute" src={heroVideo} type="video/mp4" autoPlay muted loop></video>
                </div>
            </section>
            <div className="h-96 z-50 mt-[100vh] bg-red-400 w-full"></div>
        </div>
    );
};
export default Hero;