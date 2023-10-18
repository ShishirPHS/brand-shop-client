import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

const SignUp = () => {
  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(name, photo, email, password);
  };

  return (
    <div>
      <Header></Header>
      <div className="container mx-auto mt-20 mb-24">
        <h2 className="text-center font-bold text-3xl lg:text-5xl mb-6">
          Please SingUp!
        </h2>
        <div className="hero">
          <div className="hero-content flex-col w-[90%] lg:w-2/4">
            <div className="card w-full drop-shadow bg-base-100">
              <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Photo URL"
                    name="photo"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="registerBtn normal-case btn bg-[#4A4040] text-white">
                    SignUp
                  </button>
                </div>
                <p className="font-medium mt-2">
                  Do not have an account?{" "}
                  <Link className="font-bold text-blue-700" to="/login">
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
