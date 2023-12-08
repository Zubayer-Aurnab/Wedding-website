import { Fade } from "react-reveal";
import { AiOutlineMail } from 'react-icons/ai';
import { FcPhone } from 'react-icons/fc';
import { FaWhatsappSquare } from 'react-icons/fa';


const Contact = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold italic text-center mt-16">Contact Us</h1>
            <div>
                <div className="flex flex-col-reverse lg:flex-row justify-between items-center 
            w-4/5 mx-auto gap-5">
                    <Fade left>
                        <div className="flex-1">
                            <h1 className=" text-xl text-left lg:text-2xl font-bold italic my-10 underline">
                                With</h1>
                            <div className="space-y-5  p-4 ">
                                <div className="space-y-2">
                                    <h1 className="flex items-center text-2xl font-bold cursor-pointer">Email- <AiOutlineMail /></h1>
                                    <p className="hover:text-blue-600 hover:underline cursor-pointer">Thefarmhouse@gmail,com</p>
                                </div>
                                <div className="space-y-2">
                                    <h1 className="flex items-centerl text-2xl font-bold cursor-pointer">Phone- <FcPhone /></h1>
                                    <p className="hover:text-blue-600 hover:underline  cursor-pointer">(912) 638-9238</p>
                                </div>

                                <div className="space-y-2">
                                    <h1 className="flex items-center  text-2xl font-bold cursor-pointer">WhatsApp- <FaWhatsappSquare className="text-green-600 text-2xl" /></h1>
                                    <p className="hover:text-blue-600 hover:underline cursor-pointer">(912) 638-9238</p>
                                </div>
                            </div>

                        </div>
                    </Fade>

                    <Fade right>
                        <div className="flex-1 justify-center items-center">
                            <img className=" lg:w-1/2  mx-auto rounded-xl" src='https://i.ibb.co/TTCkZ66/New-Logo.webp' alt="" />

                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Contact;