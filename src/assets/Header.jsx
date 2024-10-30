import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav className="flex gap-3 justify-center mb-10">
                <Link to="/" className="btn btn-primary px-4 py-1">Home</Link>
                <Link to="/about" className="btn btn-primary px-4 py-1">About</Link>
                <Link to="/contact" className="btn btn-primary px-4 py-1">Contact</Link>
                <Link to="/users" className="btn btn-primary px-4 py-1">Users</Link>
            </nav>
        </div>
    );
};

export default Header;