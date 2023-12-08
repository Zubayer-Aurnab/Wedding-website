
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";



const Register = () => {
    const { GoogleAuth, createUser, UpdateUser } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handelSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const name = e.target.name.value
        const photo = e.target.photo.value
        console.log(email, password, name, photo);

        if (password.length < 6) {
            return toast.error('Password must be at least 6 characters long.')
        }


        if (!/[A-Z]/.test(password)) {
            return toast.error(' Password must contain at least one capital letter.')
        }


        if (!/[!@#$%^&*]/.test(password)) {
            return toast.error('Password must contain at least one special character.')
        }

        createUser(email, password)
            .then(res => {
                UpdateUser(name, photo)
                    .then(() => {
                        toast.success('Registration successful')
                        navigate(location?.state ? location.state : '/')
                    })
                    .catch(err => {
                        toast.error(err.massage)
                    })
            })
            .catch(err => {
                toast.error(err.message)
            })

    }


    const GoogleSubmit = () => {

        GoogleAuth()
            .then(res => {

                toast.success('Registration successful');
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {

                toast.error(err.message);
            });


    }

    return (
        <div className="p-3">

            <Toaster />
            <div className=" mx-auto border-4 border-[#F7E4BC]  mt-10 w-full lg:mt-2 lg:w-1/3 rounded-xl">
                <div className="text-center">
                    <h1 className="text-2xl lg:text-4xl font-bold italic mt-5">Register Now</h1>
                </div>
                <form onSubmit={handelSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="name"
                            className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            name="photo"
                            placeholder="URL"
                            className="input input-bordered" />
                    </div>
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
                            placeholder="password"
                            name="password"
                            className="input input-bordered" required />
                        <label className="label">
                            <div className="my-6">
                                <p className="text-sm">Already  have an account?
                                    <Link to={'/login'}
                                        className="ml-2 border-b-2 text-blue-700
                                     border-blue-700 font-semibold"
                                    >
                                        Log In
                                    </Link></p>

                            </div>
                        </label>
                    </div>
                    <div className=" flex justify-center">
                        <div className="form-control mt-6 w-1/2 ">
                            <button className="btn bg-[#F7E4BC] hover:bg-[#F7E4BC] text-center">REGISTER</button>
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

export default Register;