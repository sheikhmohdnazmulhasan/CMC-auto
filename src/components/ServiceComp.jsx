import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ServiceComp = ({ title, text, img, link }) => {
    return (
        <div>
            <div className="border rounded hover:scale-105 transition-all md:w-72 h-[450px]">
                <figure><img className="" src={img} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className="text-sm">{text}</p>
                    <div className="card-actions justify-end">
                        <Link to={link}> <button className=" px-4 rounded text-white py-2 bg-[#3EA354] hover:bg-[#2f773f]">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceComp;