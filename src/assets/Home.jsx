import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
    return (
        <div>
            <h2 className="text-2xl mb-5">This is Home Page</h2>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;