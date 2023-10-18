import { useContext } from "react";
import { BiLogoGoogle } from "react-icons/bi";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Login Successful",
        });
        navigate("/");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Something went wrong, Try again later.",
        });
      });
  };

  return (
    <div className="px-8">
      <div className="divider">Continue With</div>
      <div className="flex justify-center items-center">
        <button
          className="flex items-center border px-10 py-5 text-xl rounded-lg mb-8 mt-2"
          onClick={handleGoogleLogin}
        >
          <BiLogoGoogle className="mr-3"></BiLogoGoogle> Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
