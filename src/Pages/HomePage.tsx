import '../index.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import { GiSoccerBall } from 'react-icons/gi';

const HomePage = () => {
    return (
        <div className='h-screen w-screen max-w-full max-h-full scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent'>
            <Navbar/>
            <div className='h-full w-full bg-base-300 flex justify-center items-center bg-soccer-pattern bg-no-repeat bg-cover text-white'>
                <div className='flex flex-col justify-start items-start w-2/5'>
                    <h1 className='text-6xl flex justify-center'><GiSoccerBall className='mr-5'/>Soccer Alert</h1>
                    <p className='text-3xl mt-5'>Keep track of your favorite Soccer teams and their upcoming games and results. Search teams to find their individual schedules or create an account to get a schedule of all your favorite teams' games.</p>
                    <div className='flex justify-start w-1/2 mt-5'>
                        <Link to='/about' className='btn bg-green-500 w-1/3'>
                            About Us
                        </Link>
                        <Link to='/signup' className='btn w-1/3 ml-5'>
                            Register
                        </Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
        
    );
}

export default HomePage;