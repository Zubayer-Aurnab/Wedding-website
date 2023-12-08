import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const LogIn = () => {
    const { GoogleAuth, LogInUser } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const handelSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        if (password.length < 6) {
            return toast.error('Password did not match')
        }


        if (!/[A-Z]/.test(password)) {
            return toast.error('Password did not match')
        }


        if (!/[!@#$%^&*]/.test(password)) {
            return toast.error('Password did not match')
        }

        LogInUser(email, password)
            .then(res => {
                toast.success('Log In successful')
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                toast.error(err.message)
            })

    }
    const GoogleSubmit = () => {

        GoogleAuth()
            .then(res => {

                toast.success('Log In successful');
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {

                toast.error(err.message);
            });


    }
    return (
        <div className="p-3">
            <div className=" mx-auto border-4 border-[#F7E4BC]  mt-10 w-full lg:mt-32 lg:w-1/3 rounded-xl
            ">
                <div className="text-center">
                    <h1 className=" text-2xl lg:text-4xl font-bold italic mt-5">Log In Now</h1>
                </div>
                <form onSubmit={handelSubmit} className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            className="input input-bordered" required />
                        <label className="label">
                            <div className="my-6">
                                <p className="text-sm">don't have any account?
                                    <Link to={'/register'}
                                        className="ml-2 border-b-2 text-blue-700
                                     border-blue-700 font-semibold"
                                    >
                                        Register
                                    </Link></p>

                            </div>
                        </label>
                    </div>
                    <div className=" flex justify-center">
                        <div className="form-control mt-6 w-1/2 ">
                            <button className="btn bg-[#F7E4BC] hover:bg-[#F7E4BC] text-center">Login</button>
                        </div>
                    </div>
                </form>
                <div className="p-5">
                    <p className="text-center">or</p>
                    <hr />
                    <div className="mx-auto w-4/6">
                        <button
                            onClick={GoogleSubmit}
                            className="btn w-full  mt-5">
                            <FcGoogle className="text-xl" /> GOOGLE</button>
                    </div>
                    <div className="mt-5">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;