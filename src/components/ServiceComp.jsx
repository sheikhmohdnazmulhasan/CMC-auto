import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ServiceComp = ({ title, text, img, link }) => {
    return (
        <div>
            <div className="rounded-md hover:scale-105 transition-all bg-[#292929] bg-opacity-65 text-white">
                <figure><img className="" src={img} /></figure>
                <div className="card-body">
                    <h2 className="card-title uppercase">{title}</h2>
                    <p className="text-sm">{text}</p>
                    <div className="card-actions justify-end">
                        <Link to={link}> <button className="px-4 py-2 w-full bg-black text-white rounded-md hover:bg-transparent hover:border transition-all text-center">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceComp;