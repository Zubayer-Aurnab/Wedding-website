import { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import { useLoaderData, useParams } from "react-router-dom";


const CardDescription = () => {
    const [data, setData] = useState({})
    const loadData = useLoaderData()
    const { id } = useParams()

    useEffect(() => {
        const FilterData = loadData.find(cart => cart.id == id)
        setData(FilterData)
    }, [])
    const { img, title, description, price, facilities } = data
    console.log(facilities);
    return (

        <div id="home" className=" mt-4 lg:mt-32">
            <div className="flex flex-col-reverse lg:flex-row justify-between items-center 
            w-4/5 mx-auto gap-5">
                <Fade left>
                    <div className="flex-1">
                        <h1 className=" text-4xl text-center lg:text-4xl font-bold italic my-10">{title}</h1>
                        <p className="  lg:text-2xl">{description}</p>
                        <div className="mt-10">
                            <p className="font-semibold mb-5" >Facilities : </p>
                            <div className="lg:flex justify-between ">
                                <div className="flex gap-2 flex-wrap ">
                                    {
                                        facilities && facilities.map((item, idx) => (
                                            <span
                                                className="p-2 px-4 bg-base-200 mr-2 rounded-xl"
                                                key={idx}
                                            >{item}</span>
                                        ))
                                    }

                                </div>

                                <div>
                                    <button className="italic bg-[#F7E4BC] btn btn-outline border-none font-bold px-7 lg:text-xl flex  mt-10 mb-6 w-full  text-xl
                                lg:mt-0 lg:mb-0  ">
                                        {price}$
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>

                <Fade right>
                    <div className="flex-1 justify-center items-center">
                        <img className="w-2/3  mx-auto rounded-xl" src={img} alt="" />

                    </div>
                </Fade>
            </div>

        </div>



    );
};

export default CardDescription;