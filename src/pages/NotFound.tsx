import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate("/", { replace: true });
  };

  return (
    <main className="flex flex-col items-center justify-center w-full h-screen space-y-2 bg-gray-100 ">
      <h1 className="text-2xl font-bold">404 Page Not Found.</h1>
      <button
        onClick={redirectToHome}
        className="text-sm text-blue-700 cursor-pointer hover:underline"
      >
        Back to Home.
      </button>
    </main>
  );
}
