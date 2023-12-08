import { Fade } from "react-reveal";

const Location = () => {
    return (
        <>
            <h1 className="text-3xl font-bold italic text-center mt-10 underline">Our Location</h1>

            <div id="home" className=" mt-4 lg:mt-32">
                <div className="flex flex-col lg:flex-row justify-between items-center 
    w-4/5 mx-auto gap-5">
                    <Fade left>
                        <div className="flex-1">
                            <h1 className=" text-xl text-center lg:text-3xl font-bold  my-10">
                                THE FARMHOUSE</h1>
                            <p className=" text-sm lg:text-2xl">5600 Old Capitol Trail

                                Wilmington, Delaware 19808 </p>

                        </div>
                    </Fade>

                    <Fade right>
                        <div className=" flex-1 justify-center items-center">

                            <iframe
                                className=" w-full"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90325.41865470161!2d-93.41736497835431!3d44.97071242759384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b333909377bbbd%3A0x939fc9842f7aee07!2sMinneapolis%2C%20MN%2C%20USA!5e0!3m2!1sen!2sbd!4v1696767869394!5m2!1sen!2sbd"
                                width="600"
                                height="450"
                                style={{ border: '0' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />

                        </div>
                    </Fade>
                </div>

            </div>

        </>
    );
};

export default Location;