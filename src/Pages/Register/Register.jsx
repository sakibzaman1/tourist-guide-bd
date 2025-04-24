import React from "react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiLowVision, BiShowAlt } from "react-icons/bi";
import logo from "../../assets/logos/smart campus no bg.png";
import swal from "sweetalert";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosPublic from "../../CustomHooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";
import bgImage from '../../assets/Banner/uni-8.jpg'

const Register = () => {
  const { createUser, updateUser, goToTop } = useContext(AuthContext);

  const axiosPublic = useAxiosPublic();
  const [showPassword, setShowPassword] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [registerError, setRegisterError] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState("");

  const navigate = useNavigate();

  // set button disabled

  const handleButtonDisable = (e) => {
    const termsAccepted = e.target.checked;
    console.log(termsAccepted);
    // button disabled

    if (termsAccepted) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  // create user

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, email, photo, password);

    setRegisterError("");
    setRegistrationSuccess("");

    if (password.length < 6) {
      setRegisterError("Password should be at least 6 character long");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Your Password should have at least one uppercase character"
      );
      return;
    } else if (!/[^A-Za-z0-9]/.test(password)) {
      setRegisterError("Your Password must have one special character");
      return;
    }

    // create User

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();

        updateUser(name, photo)
          .then(() => {
            // user data entry in database
            const userInfo = {
              name: name,
              email: email,
            };
            axiosPublic.post("/users", userInfo).then((res) => {
              if (res.data.insertedId) {
                console.log('user added to database')
                swal({
                  position: "top-center",
                  icon: "success",
                  title: "Registration Successfull",
                  showConfirmButton: false,
                  showCancelButton: false,
                  timer: 2000,
                });
                // Swal.fire({
                //     position: 'top-center',
                //     icon: 'success',
                //     title: 'Registration Successful',
                //     showConfirmButton: false,
                //     timer: 2500
                //   })
                //   navigate user
                setTimeout(() => {
                  navigate("/");
                }, 2000);
              }
            });
          })
          .catch();
      })
      .catch((error) => {
        console.log(error.message);
        setRegisterError(error.message);
      });
  };

  return (
    <div className="">
      <Helmet>
                <title>Smart Campus | REGISTRATION</title>
            </Helmet>
      <div className="hero min-h-screen lg:px-10 bg-base-200" style={{ 
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover', // This property makes the background image cover the entire container
            backgroundPosition: 'center', // This property centers the background image
            backgroundRepeat: 'no-repeat', // This property prevents the background image from repeating
        }}>
        <div className="hero-content flex-col-reverse lg:flex-row justify-between">
          <div className=" flex flex-col justify-center items-end text-center lg:text-right lg:pl-10 lg:w-[40%]">
            <img className="w-80 mx-auto" src={logo} alt="" />

            <p className="py-2 font-Ephesis text-lg text-white">
              We are thrilled to have you join us. Sign up now and unlock a
              world of possibilities. Experience the best of what we have to
              offer and connect with like-minded individuals. Your journey
              begins here. Let`s get started!
            </p>
          </div>
          <div className=" pt-10 lg:w-[60%] w-[90%] flex-shrink-0 max-w-lg shadow-2xl ">
            <form onSubmit={handleRegister} className="card-body">
              <h1 className="text-2xl lg:text-5xl font-bold text-center text-white mb-10">
                Register Now!
              </h1>
              <div className="form-control">
                <label className="label " >
                  <span className="label-text text-gray-200">Your Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-200">Photo URL</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="photo url"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-200">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-200">Password</span>
                </label>
                <div className="flex items-center relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    className="input input-bordered w-full"
                    required
                  />
                  <div className="absolute right-4">
                    {!showPassword ? (
                      <BiLowVision
                        className="cursor-pointer"
                        size="20px"
                        onClick={() => setShowPassword(!showPassword)}
                      ></BiLowVision>
                    ) : (
                      <BiShowAlt
                        className="cursor-pointer"
                        size="20px"
                        onClick={() => setShowPassword(!showPassword)}
                      ></BiShowAlt>
                    )}
                  </div>
                </div>
              </div>
              <div className="py-6">
                <input
                  onChange={handleButtonDisable}
                  type="checkbox"
                  name="terms"
                  id=""
                  required
                />{" "}
                {isDisabled ? (
                  <span className="text-red-500 pl-3 text-sm font-mono">
                    Please Accept Our Terms & Conditions*
                  </span>
                ) : (
                  <span className="text-green-500 pl-3 text-sm font-semibold font-mono">
                    Terms & Conditions Accepted
                  </span>
                )}
              </div>
              <div className="form-control mt-6 ">
                <button
                  disabled={isDisabled}
                  className={`w-full  font-semibold text-white h-14 rounded-lg ${
                    isDisabled
                      ? "bg-gray-600"
                      : " bg-gradient-to-r from-green-900 via-green-700 to-green-200  hover:scale-110 transition-transform"
                  }`}
                >
                  Submit
                </button>
              </div>

              <div className="mx-auto mt-10 w-full px-10 text-center">
                {registerError && (
                  <p className="text-red-900 italic font-semibold">
                    {registerError}
                  </p>
                )}
                {registrationSuccess && (
                  <p className="text-green-900">{registrationSuccess}</p>
                )}
              </div>

              <div className="text-center pt-10">
                <small className="font-medium text-gray-200">
                  Already Have an Account? Please
                  <Link to="/login" className="text-green-900 ml-2 font-bold">
                    <button onClick={goToTop}>Login</button>
                  </Link>
                </small>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
