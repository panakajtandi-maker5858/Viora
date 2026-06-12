import { useNavigate } from "react-router";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
            <h1 className="text-8xl font-bold text-primary">404</h1>

            <h2 className="text-3xl font-semibold mt-4">
                Page Not Found
            </h2>

            <p className="text-gray-500 mt-3 max-w-md">
                Oops! The page you are looking for does not exist or has been moved.
            </p>

            <div className="flex gap-4 mt-8">
                <button
                    onClick={() => navigate("/")}
                    className="px-6 py-3 bg-black text-white rounded-lg"
                >
                    Go to Home
                </button>

                <button
                    onClick={() => navigate(-1)}
                    className="px-6 py-3 border rounded-lg"
                >
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default NotFound;