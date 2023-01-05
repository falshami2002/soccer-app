import '../index.css';
import Navbar from '../Components/Navbar';
import { useLocation } from 'react-router-dom';
import TeamMatches from '../Components/TeamMatches';

const TeamPage: React.FC = () => {
    const location = useLocation();

    const team = location.state?.team;
    const id = location.state?.id;

    return (
        <div className='h-screen w-screen max-w-full bg-soccer-league bg-no-repeat bg-cover flex justify-center items-center'>
            <Navbar />
            <TeamHero team={team} id={id} />
        </div>
    );
}

interface TeamHeroProps {
    team: any
    id: number
}

const TeamHero: React.FC<TeamHeroProps> = ({ team, id }) => {
    return (
        <div className="hero h-[85%] w-2/3 bg-base-200 rounded-3xl">
            <div className="hero-content max-w-full p-0 items-center justify-start flex flex-col h-[90%] w-full">
                <div className='flex w-2/3 h-1/2 gap-4'>
                    <img src={team.team.logo} className="w-2/5 rounded-full shadow-2xl" />
                    <div>
                        <h1 className="max-w-full text-5xl font-bold">{team.team.name}</h1>
                        <p className="py-6 text-3xl text-blue-800">{team.venue.city}, {team.team.country}</p>
                        <p className="text-2xl text-blue-800">{team.venue.name}</p>
                        <button className="btn btn-primary mt-5">Add Team</button>
                    </div>
                </div>
                <TeamMatches id={id} />
            </div>
        </div>
    )
}

export default TeamPage;