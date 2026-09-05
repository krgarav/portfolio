import { Fragment, useRef } from "react";
import { useNavigate } from "react-router";
import { FcBusinessman } from "react-icons/fc";
import { FaArrowCircleRight } from "react-icons/fa";
const Auth = () => {
  //   const [state, setState] = useState(false);
  const enteredEmail = useRef();
  const enteredPassword = useRef();
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    const email = enteredEmail.current.value;
    const password = enteredPassword.current.value;
    if (email === "kumar@gmail.com" && password === "123456") {
      navigate("/portfolio", { replace: true });
    } else {
      alert("Invalid email or password");
    }
  };
  return (
    <Fragment>
      <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-r from-[#03034e] to-[#58b1e4] p-4">
        <div className="flex min-h-[80vh] w-[85vw] max-w-5xl overflow-hidden rounded-2xl bg-blue-50 shadow-xl">
          <div className="hidden w-1/2 overflow-hidden rounded-l-2xl md:block">
            <lottie-player
              src="https://lottie.host/ff3b6286-5c9a-446b-98ff-02b7560a2ff7/DDJaBJxmdm.json"
              background="#87CEFA"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>

          <div className="w-full p-8 md:w-1/2 md:p-16">
            <FcBusinessman />
            <h2>Welcome Back</h2>
            <form onSubmit={submitHandler}>
                <label className="mb-1 block text-sm font-semibold text-slate-700">Email address</label>
                <input
                  ref={enteredEmail}
                  type="email"
                  placeholder="Enter email"
                  required className="mb-4 w-full rounded-md border border-slate-300 p-3"
                />

                <label className="mb-1 block text-sm font-semibold text-slate-700">Password</label>
                <input
                  ref={enteredPassword}
                  type="password"
                  placeholder="Password"
                  required className="mb-4 w-full rounded-md border border-slate-300 p-3"
                />

              <button
                style={{ backgroundColor: "rgb(3, 3, 78)" }}
                type="submit"
                className="mt-3 w-full"
              >
                Login
                <FaArrowCircleRight
                  style={{
                    float: "right",
                    margin: "5px 5px",
                    fontSize: "1.2rem",
                  }}
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Auth;
