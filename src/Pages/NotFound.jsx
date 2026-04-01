import { Link } from "react-router-dom";
import NotFoundPage from "../assets/NoPage.png";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <img src={NotFoundPage} alt="Not Found Pages" className="w-250" />
      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-yellow-400 text-black font-bold rounded hover:bg-yellow-500 transition"
      >
        Back to Home Page
      </Link>
    </div>
  );
};

export default NotFound;
