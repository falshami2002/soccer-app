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
                    <li><Link>About Us</Link></li>
                    <li tabIndex={0}>
                        <Link>
                            Parent
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </Link>
                        <ul className="p-2">
                            <li><Link>Submenu 1</Link></li>
                            <li><Link>Submenu 2</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn mr-5  btn-outline bg-transparent">Log In</Link>
                <Link className="btn">Sign Up</Link>
            </div>
        </div>
    );
}

export default Navbar;