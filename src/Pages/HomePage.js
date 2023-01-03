import '../index.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const HomePage = () => {
    return (
        <div className='h-screen w-screen max-w-full max-h-full'>
            <Navbar/>
            <div className='h-full w-full bg-gray-900 flex'>
            </div>
            <Footer/>
        </div>
        
    );
}

export default HomePage;