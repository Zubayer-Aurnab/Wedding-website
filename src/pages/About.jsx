import { Fade } from "react-reveal";

const About = () => {
    return (
        <>

            <div id="home" className=" mt-4 lg:mt-32">
                <div className="flex flex-col-reverse lg:flex-row justify-between items-center 
            w-4/5 mx-auto gap-5">
                    <Fade left>
                        <div className="flex-1">
                            <h1 className=" text-2xl text-center lg:text-4xl font-bold italic my-10">
                                HISTORIC
                                MULBERRY ROOM</h1>
                            <p className=" text-sm lg:text-2xl">The historic Mulberry Room is situated in the original section of the Farmhouse



                                The Mulberry Room features an antique brick fireplace, gleaming hardwood floors and space for additional guest tables (if needed).



                                The space can also be utilized for indoor portraits or other uses. </p>

                        </div>
                    </Fade>

                    <Fade right>
                        <div className="flex-1 justify-center items-center">
                            <img className=" lg:w-1/2  mx-auto rounded-xl" src='https://static.wixstatic.com/media/89881a_e1bcec68f04043aaa337e28fae13275a~mv2.jpg/v1/fill/w_229,h_351,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/89881a_e1bcec68f04043aaa337e28fae13275a~mv2.jpg' alt="" />

                        </div>
                    </Fade>
                </div>

            </div>

            <div id="home" className=" mt-4 lg:mt-32">
                <div className="flex flex-col lg:flex-row-reverse justify-between items-center 
            w-4/5 mx-auto gap-5">
                    <Fade right>
                        <div className="flex-1">
                            <h1 className=" text-2xl text-center lg:text-4xl font-bold italic my-10">
                                INDOOR BAR & LOUNGE</h1>
                            <p className="text-sm  lg:text-2xl">The indoor bar features dark wood accents, gleaming crystal glassware displays and a large bar top for guests to spread out across.
                                Adjacent to the indoor bar, the guest lounge provides additional room for guests to mingle and adds to the intimate feel of the Farmhouse </p>

                        </div>
                    </Fade>

                    <Fade left>
                        <div className="flex-1 justify-center items-center mb-10">
                            <img className=" lg:w-1/2  mx-auto rounded-xl" src='https://static.wixstatic.com/media/89881a_e071a8d546d544fe962b3b1e17789ce7~mv2.jpeg/v1/fill/w_480,h_319,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/89881a_e071a8d546d544fe962b3b1e17789ce7~mv2.jpeg' alt="" />

                        </div>
                    </Fade>
                </div>

            </div>


        </>



    );
};

export default About;