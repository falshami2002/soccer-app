import Navbar from "../Components/Navbar";
import UserSchedule from "../Components/UserSchedule";

const UserSchedulePage = () => {
    return (
        <div className="h-screen w-screen max-w-full bg-soccer-league bg-no-repeat bg-cover flex justify-center items-center">
            <Navbar />
            <UserScheduleHero />
        </div>
    )
}

const UserScheduleHero = () => {
    return (
        <div className="hero h-4/5 w-3/4 bg-base-200 rounded-3xl flex flex-col justify-start">
            <div className="hero-content max-w-full w-full text-center h-full">
                <div className="mt-10 w-full h-full flex flex-col items-center">
                    <h1 className="text-5xl font-bold">Your Schedule</h1>
                    <UserSchedule/>
                </div>
            </div>
        </div>
    )
}

export default UserSchedulePage 