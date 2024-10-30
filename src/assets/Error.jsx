import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    return (
        <div>
            <h1 className="text-2xl text-yellow-400">Oops!</h1>
            <p className="">Sorry, an unexpected error has occurred.</p>
            <p>
                <b>{error.statusText || error.message}</b>
            </p>
        </div>
    );
};

export default Error;