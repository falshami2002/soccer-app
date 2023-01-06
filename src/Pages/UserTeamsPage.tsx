import Navbar from "../Components/Navbar";
import UserTeams from "../Components/UserTeams";

const UserTeamsPage = () => {
    return (
        <div className="h-screen w-screen max-w-full bg-soccer-league bg-no-repeat bg-cover flex justify-center items-center">
            <Navbar />
            <UserTeamsHero />
        </div>
    )
}

const UserTeamsHero = () => {
    return (
        <div className="hero h-4/5 w-3/4 bg-base-200 rounded-3xl flex flex-col justify-start">
            <div className="hero-content text-center h-full">
                <div className="mt-10 h-full">
                    <h1 className="text-5xl font-bold">Your Teams</h1>
                    <UserTeams/>
                </div>
            </div>
        </div>
    )
}

export default UserTeamsPage;