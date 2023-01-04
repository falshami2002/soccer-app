import '../index.css';
import { GiSoccerBall } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-green-500 h-[5vh] fixed top-0">
            <div className="navbar-start">
                <Link to='/' className="btn btn-ghost normal-case text-xl"><GiSoccerBall className='text-3xl mr-5'/>Soccer Alert</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/search'>Search Teams</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/login' className="btn mr-5 btn-outline bg-transparent">Log In</Link>
                <Link to='/signup' className="btn mr-5">Sign Up</Link>
            </div>
        </div>
    );
}

export default Navbar;