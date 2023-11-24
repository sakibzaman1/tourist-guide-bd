import React, { useContext, useState } from 'react';
import { BiLowVision, BiShowAlt } from "react-icons/bi";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import logo from '../../assets/logos/tourist_Guide-removebg-preview.png'
import swal from 'sweetalert';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {


    const [showPassword, setShowPassword] = useState(false);
    const [loginError, setLoginError] = useState('');

    const { loginUser, signInWithGoogle, goToTop } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();


    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        console.log(email, password);
        setLoginError('');

        loginUser(email, password)
            .then(() => {
                swal({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Successfully Signed In',
                    showConfirmButton: false,
                    showCancelButton: false,
                    timer: 2000
                });
                // navigate user
                setTimeout(() => {
                    navigate(location?.state ? location.state : '/')
                }, 2000)
            })
            .catch(() => {
                setLoginError("Invalid User. Please Check Email or Password Again")
            })
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                swal({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Successfully Signed In',
                    showConfirmButton: false,
                    showCancelButton: false,
                    timer: 2000
                });
                // navigate user
                setTimeout(() => {
                    navigate(location?.state ? location.state : '/')
                }, 2000)
            })
            .catch((error) => {
                setLoginError(error.message)
            })
    }

    return (
        <div>
            <div className="hero p-10 bg-base-200 font-Roboto">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-right flex flex-col justify-center items-end lg:text-right pl-10 w-[40%]">
                        <img className='w-80' src={logo} alt="" />
                        
                        <p className="py-2 font-Ephesis text-lg">Welcome back!
                            We`re delighted to see you again. Sign in to your account and continue your journey with us. Your access to a world of opportunities and experiences awaits.

                            Let`s get started!</p>
                    </div>
                    <div className="card w-[60%] flex-shrink-0 max-w-lg shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-5xl font-bold text-center mb-10">Login now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="flex items-center relative">
                                    <input name="password" type={showPassword ? "text" : "password"} placeholder="password" className="input input-bordered w-full" required />
                                    <div className="absolute right-4">
                                        {
                                            !showPassword ? <BiLowVision className="cursor-pointer" size="20px" onClick={() => setShowPassword(!showPassword)}></BiLowVision> : <BiShowAlt className="cursor-pointer" size="20px" onClick={() => setShowPassword(!showPassword)}></BiShowAlt>
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className="mx-auto mb-4 pt-4  w-full px-10 text-center">
                                {
                                    loginError && <p className="text-rose-800 italic text-bold">{loginError}</p>
                                }
                            </div>


                            <div className="form-control mt-10">
                                <button className="h-14 hover:scale-110 transition-transform font-semibold w-full bg-gradient-to-r from-green-900 via-green-700 to-green-200 text-white">Login</button>
                            </div>

                            <div className="flex flex-col justify-between mt-10 mb-6 space-y-6 lg:space-y-0">
                                <button onClick={handleGoogleSignIn} className="text-black btn btn-outline rounded-none bg-transparent hover:rounded-none capitalize">
                                    <FcGoogle></FcGoogle>
                                    Sign in with Google
                                </button>
                            </div>

                            <div className="text-center pt-6">
                                <small className="font-medium text-black">New to this Website? Please<Link to="/register" className="text-red-700 ml-1"><button onClick={goToTop}>Register</button></Link></small>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;