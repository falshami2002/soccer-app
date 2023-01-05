import '../index.css';
import Navbar from '../Components/Navbar';
import { useLocation } from 'react-router-dom';
import TeamMatches from '../Components/TeamMatches';

const TeamPage: React.FC = () => {
    const location = useLocation();

    const team = location.state?.team;

    return (
        <div className='h-screen w-screen max-w-full bg-soccer-league bg-no-repeat bg-cover flex justify-center items-center'>
            <Navbar />
            <TeamHero team={team}/>
            <TeamMatches id={team.id}/>
        </div>
    );
}

interface TeamHeroProps {
    team: any
}

const TeamHero: React.FC<TeamHeroProps> = ({team}) => {
    return (
        <div className="hero h-2/3 w-1/2 bg-base-200 rounded-3xl">
            <div className="hero-content max-w-full p-0 items-start flex h-[90%]">
                <img src={team.team.logo} className="w-2/5 rounded-full shadow-2xl" />
                <div>
                    <h1 className="max-w-full text-5xl font-bold">{team.team.name}</h1>
                    <p className="py-6 text-3xl text-blue-800">{team.venue.city}, {team.team.country}</p>
                    <p className="text-2xl text-blue-800">{team.venue.name}</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default TeamPage;