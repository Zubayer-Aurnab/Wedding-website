import { useState, useEffect } from 'react';
import Service from '../componentes/Service/Service';
import Contact from '../componentes/Contact/Contact';
import Location from '../componentes/Location/Location';


const Home = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [


        'https://static.wixstatic.com/media/89881a_7e53b84fd3ae4ca9894e75bee242fed4~mv2.jpg/v1/fill/w_1903,h_754,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/89881a_7e53b84fd3ae4ca9894e75bee242fed4~mv2.jpg',

        'https://static.wixstatic.com/media/89881a_1c3a6220f2534d9aae114dceee6e6361~mv2.jpg/v1/fill/w_1800,h_713,al_c,q_85,enc_auto/89881a_1c3a6220f2534d9aae114dceee6e6361~mv2.jpg',

        'https://static.wixstatic.com/media/89881a_89789922561f49729a4b0617b3a40b98~mv2.jpg/v1/fill/w_1903,h_754,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/89881a_89789922561f49729a4b0617b3a40b98~mv2.jpg',

        'https://static.wixstatic.com/media/89881a_bde068d155154caeba5a722c332fa389~mv2.jpg/v1/fill/w_1903,h_754,al_b,q_85,usm_0.66_1.00_0.01,enc_auto/89881a_bde068d155154caeba5a722c332fa389~mv2.jpg ',

        'https://static.wixstatic.com/media/89881a_894e2b165ee24a8a94a1400f7848df1d~mv2.jpg/v1/fill/w_2379,h_754,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/89881a_894e2b165ee24a8a94a1400f7848df1d~mv2.jpg'

    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 3000);



        return () => {
            clearInterval(interval);
        };
    }, []);





    const sliderStyle = {
        backgroundImage: `url(${images[currentImage]})`,
        transition: 'background-image 1s ease-in-out',
    };

    return (
        <div>
            <div className="hero h-[89vh]" style={sliderStyle}>
                <div className=""></div>

            </div>
            <Service />
            <Contact />
            <Location />


        </div>

    );
};

export default Home;