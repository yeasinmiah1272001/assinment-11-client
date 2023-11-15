
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { AuthContext } from "../../Provider/AuthProvider";
// import { AuthContext } from "../AuthProvider/AuthProvider";
const SignUp = () => {
  // const auth = getAuth();
  const auth = getAuth()
  const provider = new GoogleAuthProvider();
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      //  toast("GoogleLogin Successfully!");
      Swal.fire("Good job!", "Register Successfully!");
    } catch (error) {
      console.error("Google Login Error:", error);
    }
  };
  const [registerArror, setRegijsterArror] = useState("");
  const [showPassword, setShowPassword] = useState(false);
 
  const {createUser} = useContext(AuthContext)

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const accept = form.get("terms");
    console.log(name, email, password, accept);
    setRegijsterArror("");

    if (password.length < 6) {
      setRegijsterArror(" Password should be at least 6 characters or longer");
      return;
    } 
    // else if (!/[A-Z]/.test(password)) {
    //   setRegijsterArror("Passwor Shuld be At Least One UpperCasse Caractaars");
    //   return;
    // } 
    // create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire("Good job!", "Register Successfully!");
        // navigate("/login")
      })
      .catch((error) => {
        console.error(error);
        setRegijsterArror(error.message);
      });
  };

  return (
    <div>
      <div className=" mt-10">
        <div className="hero-content rounded-lg">
          <div className="card flex-shrink-0 w-full max-w-sm bg-slate-300 ">
            <h1 className="text-3xl text-center mt-6 font-bold ">
              Register Now !
            </h1>
            <form onSubmit={handleRegister} className="card-body ">
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text"> Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  required
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  type="Email"
                  name="email"
                  required
                  placeholder="Your Email Address"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  placeholder="Password"
                  className="input input-bordered"
                />
                <span
                  className="absolute mt-[51px] right-[50px]"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                </span>
                <div>
                  <div className="divider ">Or, Continue With</div>
                  <button
                    onClick={handleGoogleLogin}
                    className="btn btn-outline justify-between rounded-b mt-4 w-full"
                  >
                    <FcGoogle className="h-12 w-6"></FcGoogle>
                    Google
                  </button>
                </div>
                <br />
               
              </div>
              <div className="form-control mt-2">
                <button className="btn btn-primary">Register</button>
              </div>

              <p className="text-center mt-2">
                Already Have an Account ?{" "}
                <Link className="text-blue-700 font-bold" to="/login">
                  Login
                </Link>
              </p>
              {registerArror && (
                <p className="text-red-500 text-center">{registerArror}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;