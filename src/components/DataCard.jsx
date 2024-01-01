/* eslint-disable react/prop-types */

const DataCard = ({ img, title, description }) => {

    return (
        <div className="flex flex-col border rounded-md">
            <div
                className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
                <div className="w-full md:w-1/3 bg-white grid place-items-center">
                    <img src={img} alt="tailwind logo" className="rounded-xl h-52 w-" />
                </div>
                <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                    <h3 className="font-black text-gray-800 md:text-2xl text-xl">{title}</h3>
                    <p className="md:text-lg text-gray-500 text-base">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default DataCard;