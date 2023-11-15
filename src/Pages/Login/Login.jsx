
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEyeSlash, FaEye } from "react-icons/fa";

import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { AuthContext } from "../../Provider/AuthProvider";



const Login = () => {
  // const auth = getAuth();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider);
  };

  const [showPassword, setShowPassword] = useState("");
  const [error, setError] = useState(null);

  // const {signIn} = useContext(AuthContext)
  const {signIn} = useContext(AuthContext)
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        navigate(location?.state ? location?.state : "/");
        // const user = { email };

        // Get Accsess Token
        // axios
        //   .post("assinment-11-server-rust.vercel.app/jwt", user, { withCredentials: true })
        //   .then((res) => {
        //     console.log(res.data);
        //     // if (res.data.success) {
        //     //     Swal.fire("Good job!", "Login Successfully!");
             
        //     // }
             
        //   });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <div className="mt-10">
        <div className="hero-content rounded-lg">
          <div className="card flex-shrink-0 w-full max-w-sm bg-slate-300 ">
            <h1 className="text-3xl text-center mt-6 font-bold">Login now!</h1>
            <form onSubmit={handleLogin} className="card-body ">
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Email</span>
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
              </div>
              <div>
                <div className="divider">Or, Continue With</div>
                <button
                  onClick={handleGoogleLogin}
                  className="btn justify-between btn-outline mx-auto w-full mt-2"
                >
                  <FcGoogle className="h-12 w-6"></FcGoogle>
                  Google
                </button>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p className="text-center mt-4">
                Do Not Have Account ?{" "}
                <Link className="text-blue-700 font-bold" to="/up">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
