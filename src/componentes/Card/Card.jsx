import { Link } from "react-router-dom";


const Card = ({ item }) => {
    const { img, title, description,id } = item;

    return (
        <div className="relative flex w-full  flex-row rounded-xl bg-white  bg-clip-border text-gray-700 shadow-xl">
            <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                <img
                    src={img}
                    alt="image"
                    className="h-96 w-full object-cover"
                />
            </div>
            <div className="p-6">

                <h4 className="mb-7 block font-sans text-2xl lg:text-3xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {title}
                </h4>
                <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                    {description.slice(0, 80)}
                </p>

                <Link to={`/description/${id}`}>
                    <button
                        className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans lg:text-xl font-bold uppercase text-black transition-all hover:bg-[#F7E4BC] active:bg-[#F7E4BC] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-10 "
                        type="button"
                    >
                        Details
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="h-4 w-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            ></path>
                        </svg>
                    </button>
                </Link>

            </div>
        </div>

    );
};

export default Card;