import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const NavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { user, logOutUser } = useContext(AuthContext)

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const links = <>

        <li className="p-3 ">
            <NavLink

                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border-x-4 border-[#F7E4BC] px-3" : ""
                }
            >
                Home
            </NavLink>
        </li>
        <li className="p-3 ">
            <NavLink

                to="/about"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border-x-4 border-[#F7E4BC] px-3" : ""
                }
            >
                About
            </NavLink>
        </li>
        <li className="p-3 ">
            <NavLink

                to="/gallery"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border-x-4 border-[#F7E4BC] px-3" : ""
                }
            >
                Gallery
            </NavLink>
        </li>
        {/* <li className="p-3 ">
            <NavLink

                to="/blog"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border-x-4 border-[#F7E4BC] px-3" : ""
                }
            >
                Blog
            </NavLink>
        </li> */}
        <li className="p-3 ">
            <NavLink

                to="/login"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border-x-4 border-[#F7E4BC] px-3" : ""
                }
            >
                Log In
            </NavLink>
        </li>



    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start flex justify-center">
                <div className="dropdown">
                    <label
                        tabIndex={0}
                        className="btn btn-ghost lg:hidden"
                        onClick={toggleDropdown} // Toggle dropdown on button click
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ${isDropdownOpen ? '' : 'hidden'}`}
                    >
                        {links}
                    </ul>
                </div>
                <div className="">
                    <img
                        className="h-[100px]"
                        src="https://i.ibb.co/TTCkZ66/New-Logo.webp"
                        alt=""
                    />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex border-t-4 border-[#F7E4BC] border-b-4 font-medium">
                <ul className="menu-horizontal px-4 space-x-16">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex justify-center">
                {
                    user?.email ? <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img  src={user.photoURL} alt="" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <button className="btn btn-sm  btn-ghost">{user.displayName}</button>

                            </li>
                            <li>
                                <button
                                    onClick={logOutUser}
                                    className="btn btn-sm  btn-ghost hover:bg-red-400 hover:text-white ">Logout</button>

                            </li>
                        </ul>
                    </div>
                        :
                        <Link to='/login'>
                            <button className="btn btn-ghost">Login</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default NavBar;