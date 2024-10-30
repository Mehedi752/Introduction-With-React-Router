import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData("userId");
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <div className="p-6 flex flex-col gap-4">
            <h2 className="">This is User Details Page.</h2>
            <p className="">UserID: {user.id}</p>
            <h3 className="text-2xl text-yellow-400">{user.name}</h3>
            <button onClick={handleGoBack} className="btn btn-primary w-[150px] mx-auto">Go Back</button>
        </div>
    );
};

export default UserDetails;