import { useErrorBoundary } from "react-error-boundary";
import { IoIosRefresh } from "react-icons/io";


const ErrorFallback = ({ error }: { error: Error }) => {
    const { resetBoundary } = useErrorBoundary();

    return (
        <div role="alert" className="text-wp-18 leading-wp-18 flex flex-col items-center shadow-wp-252 border border-wp-96 w-full px-5 py-10">
            <div className="mb-10 text-center">
            <p>Something went wrong</p>
            <pre style={{ color: "red" }}>{error.message}</pre>
            </div>
            <button onClick={resetBoundary} className="flex gap-1 items-center text-wp-20 text-emerald-600"><IoIosRefresh/> Refresh</button>
        </div>
    );
}
export default ErrorFallback