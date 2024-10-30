import { Link, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';


const User = ({ user }) => {
    const navigate = useNavigate();
    const handleDetailsButton = () => {
        navigate(`/users/${user.id}`);
    }
    return (
        <div key={user.id} className="border border-gray-300 rounded-xl p-6 flex flex-col gap-4">
            <h2 className="text-xl text-yellow-400 font-bold">{user.name}</h2>
            <p className="">Email: {user.email}</p>
            <p className="">Phone: {user.phone}</p>
            <Link to={`/users/${user.id}`} className="btn btn-primary w-1/2 mx-auto">View Details</Link>
            <button onClick={handleDetailsButton} className="btn btn-primary w-1/2 mx-auto">Click to See Details</button>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
    }).isRequired,
};

export default User;