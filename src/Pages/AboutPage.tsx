import '../index.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { GiSoccerBall } from 'react-icons/gi';
import { DiReact } from 'react-icons/di';
import { SiTailwindcss, SiFirebase } from 'react-icons/si';

const AboutPage: React.FC = () => {
    return (
        <div className='h-screen w-screen max-w-full scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent'>
            <Navbar />
            <div className='h-full w-full bg-gradient-to-br from-black to-slate-500 flex justify-center items-center'>
                <div className='mt-[5%] h-3/4 w-3/4 bg-green-400 rounded-3xl flex flex-col items-center'>
                    <Title/>
                    <div className='w-[100%] h-[35%] flex justify-around mt-[2%]'>
                        <Card title='About Me' paragraph='I am a computer science student and created this application as a personal project to showcase my passion for web design and soccer.'/>
                        <Card title='ReactJS' icon={<DiReact className='text-[2vw]'/>} paragraph='I used ReactJS for the front end portion of this project.'/>
                        <Card title='TailwindCSS' icon={<SiTailwindcss className='text-[2vw]'/>} paragraph='I used TailwindCSS to style the front end portion of this project.'/>
                    </div>
                    <div className='w-[100%] h-[35%] flex justify-around mt-[4%]'>
                        <Card title='DaisyUI' paragraph='I used DaisyUI alongside TailwindCSS to style the project and create some components.'/>
                        <Card title='Firebase' icon={<SiFirebase className='text-[2vw]'/>} paragraph='I used firebase to handle the backend portion of the project.'/>
                        <Card title='Firebase' icon={<SiFirebase className='text-[2vw]'/>} paragraph='I used firebase to handle the backend portion of the project.'/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

const Title: React.FC = () => {
    return (

        <div className='text-[5vh] flex mt-[2%]'>
            <GiSoccerBall className='mr-5 mt-[1vh]' />
            <h1>About Us</h1>
        </div>
    );
}

interface CardProps {
    title: string;
    icon?: JSX.Element;
    paragraph: string;
}

const Card: React.FC<CardProps> = ({title, icon, paragraph}) => {
    return (
        <div className="card w-1/4 h-full bg-base-100 shadow-xl">
            <div className="card-body p-[10%]">
                <h2 className="card-title text-[1.5vw]">{title}{icon}</h2>
                <p className='text-[1vw] mt-[5%]'>{paragraph}</p>
            </div>
        </div>
    );
}

export default AboutPage;