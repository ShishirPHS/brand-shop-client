import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center h-[70vh] space-y-5">
        <h2 className="font-bold text-3xl">Page Not Found</h2>
        <NavLink to="/">
          <button className="btn">Go to home</button>
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
