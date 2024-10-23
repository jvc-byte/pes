import Navbar from "../components/Navbar";

export default function Login() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen w-full">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Sign in Page</h1>
          <p className="text-lg mb-6">
            Sign in here
          </p>
        </div>
      </div>
    </div>
  );
}
