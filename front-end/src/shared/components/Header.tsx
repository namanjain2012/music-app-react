import { Link } from "react-router-dom";

const Header = ()=>{
    return (<div className="text-center m-10">
        <Link to={"/"} className="hover:text-blue-500">Home</Link>
        &nbsp;
        <Link to={"/login"} className="hover:text-blue-500">Login</Link>
        &nbsp;
        <Link to={"/register"} className="hover:text-blue-500">Register</Link>
    </div>)
}

export default Header;