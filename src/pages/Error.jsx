import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img  src="https://t4.ftcdn.net/jpg/03/88/63/83/360_F_388638369_wSBADhKfhiTx6Q5Pz1xfdpy6zotku1Sg.jpg" className=" rounded-lg shadow-2xl" />
                <div>
                    <h1 className=" text-4xl lg:text-7xl font-bold">404</h1>
                    <p className="py-6">PAGE NOT FOUND</p>
                   <Link to={'/'}> <button className="btn btn-primary">Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Error;