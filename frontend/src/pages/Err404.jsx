import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Err404() {
  return (
    <>
    <Navbar />
      <div className="flex flex-col items-center justify-center h-screen w-full">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Error 404</h1>
          <p className="text-lg mb-6">
            Sorry the page you are looking for does not exist. 😔
          </p>
          <Link
            to="/"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}
